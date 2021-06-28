package com.flight.flight.controllers;

import com.flight.flight.entities.Users;
import com.flight.flight.models.AuthenticationRequest;
import com.flight.flight.models.AuthenticationResponse;
import com.flight.flight.models.MessageResponse;
import com.flight.flight.models.Signup;
import com.flight.flight.repository.UserRepository;
import com.flight.flight.security.JwtUtil;
import com.flight.flight.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@CrossOrigin(origins="http://localhost:4500")
@RestController
public class UserController {

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        Date expire;
        String jwt = null;
        final Users userDetails = authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        if (userDetails.getUsername() != null) {
            expire = jwtTokenUtil.extractExpiration(jwt);
            jwt = jwtTokenUtil.generateToken(userDetails);
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Invalid Credentials"));
        }
        if (jwt == null) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Jwt Token is not valid"));
        }
        return ResponseEntity.ok(new AuthenticationResponse(
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getFirstName(),
                userDetails.getLastName(),
                userDetails.getEmail(),
                jwt,
                expire));
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> registerUser(@RequestBody Signup user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("USER_NAME_EXISTS"));
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("EMAIL_EXISTS"));
        }

        int userType = 0;
        Users newUser = new Users(
                user.getUsername(),
                user.getFirstname(),
                user.getLastname(),
                user.getPassword(),
                userType,
                user.getEmail());
        userService.save(newUser);
        final String jwt = jwtTokenUtil.generateToken(newUser);
        final Date expire = jwtTokenUtil.extractExpiration(jwt);
        return ResponseEntity.ok(new AuthenticationResponse(
                newUser.getId(),
                newUser.getUsername(),
                newUser.getFirstName(),
                newUser.getLastName(),
                newUser.getEmail(),
                jwt,
                expire));
    }

    private Users authenticate(String username, String password) throws Exception {
        try {
            UserDetails userDetails = userService.loadUserByUsername(username);
            if(password.equals(userDetails.getPassword())) {
                UsernamePasswordAuthenticationToken authentication  = new UsernamePasswordAuthenticationToken(username, password);
                SecurityContextHolder.getContext().setAuthentication(authentication);
                return (Users) userDetails;
            } else {
                return new Users();
            }
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}

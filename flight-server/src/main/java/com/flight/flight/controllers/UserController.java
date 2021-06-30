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

@CrossOrigin(origins="http://localhost:4200")
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
        Users user =  authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        if (user.getUsername() != null) {
            jwt = this.jwtTokenUtil.generateToken(user);
            expire = this.jwtTokenUtil.extractExpiration(jwt);
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
                user.getId(),
                user.getAccountType(),
                user.getUsername(),
                user.getEmail(),
                jwt,
                expire));
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> registerUser(@RequestBody Signup user) {
        int userType;
        if (this.userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("USER_NAME_EXISTS"));
        }
        if (this.userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("EMAIL_EXISTS"));
        }

        if ("admin".equals(user.getUsername())) {
            userType = 1;  // for admin user
        } else {
            userType = 0; // for other users
        }
        Users newUser = new Users(user.getUsername(), user.getPassword(), user.getEmail(), userType);
        this.userService.save(newUser);
        final String jwt = this.jwtTokenUtil.generateToken(newUser);
        final Date expire = this.jwtTokenUtil.extractExpiration(jwt);
        return ResponseEntity.ok(new AuthenticationResponse(
                newUser.getId(),
                newUser.getAccountType(),
                user.getUsername(),
                newUser.getEmail(),
                jwt,
                expire));
    }

    private Users authenticate(String username, String password) throws Exception {
        try {
            UserDetails userDetails = this.userService.loadUserByUsername(username);
            UsernamePasswordAuthenticationToken authentication  = new UsernamePasswordAuthenticationToken(username, password);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String credentials = authentication.getCredentials().toString();
            if(password.equals(credentials)) {
               return (Users) userDetails;
            } else {
                return  new Users();
            }
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}

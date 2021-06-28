package com.flight.flight.service;

import com.flight.flight.entities.Users;
import com.flight.flight.repository.UserRepository;
import com.flight.flight.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return user;
    }

    public void save(Users user) {
        userRepository.save(user);
    }

    public String refresh(String username) {
        String token = null;
        if (username != null) {
            token =  jwtTokenUtil.refreshToken(username);
        }
        return token;
    }
}

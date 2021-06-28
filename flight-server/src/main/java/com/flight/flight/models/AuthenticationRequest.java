package com.flight.flight.models;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

public class AuthenticationRequest implements Serializable {

    @NotBlank
    private String username;
    @NotBlank
    private String password;

    public AuthenticationRequest() {
    }

    public AuthenticationRequest(@NotBlank String username, @NotBlank String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

package com.flight.flight.models;

import java.io.Serializable;
import java.util.Date;

public class AuthenticationResponse implements Serializable {

    private final String jwtToken;
    private long  id;
    private String type = "Bearer";
    private String firstname;
    private String lastname;
    private String username;
    private String email;
    private Date expire;

    public AuthenticationResponse(String accessToken) {
        this.jwtToken = accessToken;
    }

    public AuthenticationResponse(long id,
                                  String userName,
                                  String firstName,
                                  String lastName,
                                  String email,
                                  String jwtToken,
                                  Date expire) {
        this.id = id;
        this.username = userName;
        this.firstname = firstName;
        this.lastname = lastName;
        this.jwtToken = jwtToken;
        this.email = email;
        this.expire = expire;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getExpire() {
        return expire;
    }

    public void setExpire(Date expire) {
        this.expire = expire;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getFirstName() {
        return firstname;
    }

    public void setFirstName(String firstName) {
        this.firstname = firstName;
    }

    public String getLastName() {
        return lastname;
    }

    public void setLastName(String lastName) {
        this.lastname = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

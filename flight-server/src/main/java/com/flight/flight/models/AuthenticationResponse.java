package com.flight.flight.models;

import java.io.Serializable;
import java.util.Date;

public class AuthenticationResponse implements Serializable {

    private final String jwtToken;
    private long  id;
    private int  accountType;
    private String type = "Bearer";
    private String username;
    private String email;
    private Date expire;

    public AuthenticationResponse(String accessToken) {
        this.jwtToken = accessToken;
    }

    public AuthenticationResponse(long id,
                                  int accountType,
                                  String username,
                                  String email,
                                  String jwtToken,
                                  Date expire) {
        this.id = id;
        this.accountType = accountType;
        this.username = username;
        this.jwtToken = jwtToken;
        this.email = email;
        this.expire = expire;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAccountType() {
        return accountType;
    }

    public void setAccountType(int accountType) {
        this.accountType = accountType;
    }
}

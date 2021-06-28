package com.flight.flight.entities;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Collection;

@Entity
public class Users  implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(unique = true, nullable = false)
    private String firstname;

    @Column(unique = true, nullable = false)
    private String lastname;

    @Size(min = 4, message = "Minimum password length: 4 characters")
    private String password;

    @Column(unique = true, nullable = false)
    private String email;

    private Integer accountType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String userName) {
        this.username = userName;
    }

    public Integer getAccountType() {
        return accountType;
    }

    public void setAccountType(Integer accountType) {
        this.accountType = this.accountType;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

    public Users(String userName,
                 String firstName,
                 String lastName,
                 @Size(min = 4, message = "Minimum password length: 4 characters") String password,
                 String email) {
        this.username = userName;
        this.firstname = firstName;
        this.lastname = lastName;
        this.password = password;
        this.email = email;
    }

    public Users(String userName,
                 String firstName,
                 String lastName,
                 @Size(min = 4, message = "Minimum password length: 4 characters") String password,
                 int accountType,
                 String email) {
        this.username = userName;
        this.firstname = firstName;
        this.lastname = lastName;
        this.password = password;
        this.accountType = accountType;
        this.email = email;
    }

    public Users() {
    }
}

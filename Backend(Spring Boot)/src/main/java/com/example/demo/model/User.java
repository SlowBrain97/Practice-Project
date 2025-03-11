package com.example.demo.model;

import com.example.demo.repository.ProfileRepository;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

@Entity
@Setter
@Table(name = "_user")
public class User implements UserDetails, Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String email;
  private String password;
  @Enumerated(EnumType.STRING)
  private Role role;
  @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
  @JsonManagedReference
  private Profile profile;
  public User( String email, String password, Role role) {
    this.email = email;
    this.password = password;
    this.role = (role == null)? Role.STUDENT:role;
  }

  public User() {
  }
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority(this.role.name()));
  }

  @Override
  public String getUsername() {
    return this.email;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  public  Long getId(){return this.id;}
  public String getEmail() {
    return this.email;
  }

  public String getPassword() {
    return this.password;
  }

  public Profile getProfile() {
    return profile;
  }

  public void setProfile(Profile profile) {
    this.profile = profile;
  }

  public Role getRole() {
    return this.role;
  }
    
}

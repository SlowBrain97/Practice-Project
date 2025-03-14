package com.example.demo.service;

import com.example.demo.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

public interface iUserService extends UserDetailsService{
  @Override
  UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
  Optional<User> findByEmail(String email);
}

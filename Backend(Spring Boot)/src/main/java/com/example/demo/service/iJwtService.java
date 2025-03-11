package com.example.demo.service;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;

public interface iJwtService {
  String generateToken(UserDetails userDetails);
  String extractUsername(String token);
  Date extractExpiration(String token);
  String generateRefreshToken(UserDetails userDetails);
  Boolean isValid(String token, UserDetails userDetails);
}

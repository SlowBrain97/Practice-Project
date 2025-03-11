package com.example.demo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CookieService {
  private final JwtService jwtService;
  public ResponseCookie getRefreshToken(UserDetails userDetails){
      return ResponseCookie.from("refreshToken", jwtService.generateRefreshToken(userDetails))
              .httpOnly(true)
              .secure(true)
              .path("/")
              .maxAge(1000*60*60*24*7)
              .sameSite("None")
              .build();
  }
}

package com.example.demo.controller;

import com.example.demo.ApiResponse.JwtReponse;
import com.example.demo.request.RefreshToken;
import com.example.demo.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/jwt")
@RequiredArgsConstructor
public class JWTController {
  private final JwtService jwtService;

  @PostMapping("/refreshAccessToken")
  public ResponseEntity<JwtReponse> refreshAccessToken (@RequestBody RefreshToken refreshToken){
    return null;
  }
}

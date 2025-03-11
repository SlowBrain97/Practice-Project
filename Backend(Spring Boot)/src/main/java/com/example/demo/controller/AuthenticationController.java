package com.example.demo.controller;

import com.example.demo.ApiResponse.LoginResponse;
import com.example.demo.request.LoginRequest;
import com.example.demo.service.AuthenticationService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/auth")
@Slf4j
public class AuthenticationController {
  private final AuthenticationService authenticationService;
  @PostMapping("/access")
  public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response){
      LoginResponse tokenResponse = authenticationService.authenticate(loginRequest, response);
      return ResponseEntity.status(HttpStatus.OK).body(tokenResponse);
  }

}

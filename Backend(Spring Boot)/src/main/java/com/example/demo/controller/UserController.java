package com.example.demo.controller;

import com.example.demo.CustomException.CustomException;
import com.example.demo.dto.UserDTO;
import com.example.demo.request.CreateUserRequest;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
  private final UserService userService;

  @PostMapping("/createUser")
  public ResponseEntity<?> createUser (@RequestBody CreateUserRequest createUserRequest){
      UserDTO userDTO = userService.createUser(createUserRequest);
      return ResponseEntity.status(HttpStatus.CREATED).body(userDTO);
  }
}

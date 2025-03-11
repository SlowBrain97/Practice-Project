package com.example.demo.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
@Data
public class LoginRequest{
  @JsonProperty("email")
  String email;
  @JsonProperty("password")
  String password;
}

package com.example.demo.request;

import com.example.demo.model.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
@Data
@Builder
public class CreateUserRequest {
  private String email;
  private String password;
  private Role role;
}

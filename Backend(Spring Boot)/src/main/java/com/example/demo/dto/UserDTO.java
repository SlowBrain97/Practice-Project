package com.example.demo.dto;

import com.example.demo.model.Profile;
import com.example.demo.model.Role;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
  private Long id;
  private String email;
  private String password;
  private Role role;
  private Profile profile;
}

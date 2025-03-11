package com.example.demo.ApiResponse;

import com.example.demo.model.Role;
import com.example.demo.model.Staff;
import com.example.demo.model.Student;
import com.example.demo.model.Teacher;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@AllArgsConstructor
@Builder
public class LoginResponse<T> {
  private String token;
  private Long userId;

  @JsonTypeInfo(use = JsonTypeInfo.Id.NAME , property = "type")
  @JsonSubTypes({
          @JsonSubTypes.Type(value = Student.class, name = "Student"),
          @JsonSubTypes.Type(value = Teacher.class, name = "Teacher"),
          @JsonSubTypes.Type(value = Staff.class, name = "Staff")
  }
  )
  private T profile;

}

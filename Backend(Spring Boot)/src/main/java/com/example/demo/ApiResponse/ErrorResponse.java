package com.example.demo.ApiResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;


@AllArgsConstructor
@Getter
@Setter
public class ErrorResponse{
  private int code;
  private String message;
  private LocalDateTime timestamp;
  private String path;
}

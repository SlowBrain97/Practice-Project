package com.example.demo.CustomException;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Setter

public class CustomException extends RuntimeException{
  private final HttpStatus httpStatus;
  public CustomException(String message,HttpStatus httpStatus){
    super(message);
    this.httpStatus = httpStatus;
  }

  public HttpStatus getHttpStatus() {
    return httpStatus;
  }
}

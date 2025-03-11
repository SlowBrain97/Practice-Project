package com.example.demo.CustomException;

import com.example.demo.ApiResponse.ErrorResponse;
import org.apache.tomcat.websocket.AuthenticationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {
  @ExceptionHandler(CustomException.class)
  public ResponseEntity<ErrorResponse> handleCustomException (CustomException ex, WebRequest request){
    ErrorResponse errorResponse = new ErrorResponse(ex.getHttpStatus().value(),ex.getMessage(),LocalDateTime.now(),request.getContextPath());
    return ResponseEntity.status(ex.getHttpStatus()).body(errorResponse);
  }

}

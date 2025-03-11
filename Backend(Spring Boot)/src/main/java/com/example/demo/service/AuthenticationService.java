package com.example.demo.service;

import com.example.demo.ApiResponse.LoginResponse;
import com.example.demo.CustomException.CustomException;
import com.example.demo.model.Student;
import com.example.demo.repository.UserRepository;
import com.example.demo.request.LoginRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.*;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthenticationService implements iAuthenticationService{
  private final AuthenticationProvider authenticationProvider;
  private final JwtService jwtService;
  private final iUserService iuserService;
  private final CookieService cookieService;
  public LoginResponse authenticate(LoginRequest loginRequest, HttpServletResponse response){
    try {
      authenticationProvider.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),loginRequest.getPassword()));

    }catch(BadCredentialsException exception){
      log.info("Credentials is not correct : {}" ,loginRequest.getEmail());
      throw new CustomException("Username or password is not correct", HttpStatus.UNAUTHORIZED);
    }
    catch (LockedException exception){
      log.info("Account : {} was locked" ,loginRequest.getEmail());
      throw new CustomException("This account was locked", HttpStatus.LOCKED);
    }
    catch (AuthenticationException exception){
      log.info("weird error");
      throw new CustomException("Authorization is failed", HttpStatus.UNAUTHORIZED);
    }
    var user = iuserService.findByEmail(loginRequest.getEmail()).orElseThrow(()-> new CustomException("Username not found", HttpStatus.BAD_REQUEST));

    String token = jwtService.generateToken(user);
    response.setHeader("Set-Cookie", cookieService.getRefreshToken(user).toString());
    return LoginResponse.builder()
            .token(token)
            .profile(user.getProfile())
            .userId(user.getId())
            .build();
  }
}

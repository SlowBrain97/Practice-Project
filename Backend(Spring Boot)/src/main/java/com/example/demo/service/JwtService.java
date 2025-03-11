package com.example.demo.service;

import com.example.demo.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.*;
import java.util.function.Function;

@Service
@Slf4j
public class JwtService implements iJwtService{
  final String secretKey = "2aa176d119d8fec8b998f89a89265d1a083ace3957949b5f9841770a0613a75f";
  @Override
  public String generateToken(UserDetails userDetails) {
    return generateJwt(new HashMap<>(), userDetails);
  }

  @Override
  public String extractUsername(String token) {
    return extractClaims(token,Claims::getSubject);
  }

  @Override
  public Date extractExpiration(String token) {
    return extractClaims(token,Claims::getExpiration);
  }

  @Override
  public String generateRefreshToken(UserDetails userDetails) {
    return generateRefeshJwt(new HashMap<>(),userDetails);
  }

  @Override
  public Boolean isValid(String token, UserDetails userDetails) {
    String username = extractClaims(token,Claims::getSubject);
    return username.equals(userDetails.getUsername());
  }

  private String generateRefeshJwt(Map<String,Object> claims, UserDetails userDetails){
    try{
      return Jwts.builder().claims(claims).subject(userDetails.getUsername()).issuedAt(new Date(System.currentTimeMillis()))
              .expiration(new Date(System.currentTimeMillis()+1000*60*60*24*7)).signWith(getKey()).compact();
    }
    catch (Exception e){
      log.error("Error generating Jwt", e);
      return null;
    }
  }
  private String generateJwt(Map<String, Object> claims, UserDetails userDetails) {

    try {
      User user = (User) userDetails;
      return Jwts.builder()
              .claim("role", user.getRole())
              .subject(userDetails.getUsername())
              .issuedAt(new Date(System.currentTimeMillis()))
              .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
              .signWith(getKey())
              .compact();
    } catch (Exception e) {
      log.error("Error generating JWT", e);
      return null; // hoặc xử lý lỗi theo cách phù hợp
    }
  }
  private <T>T extractClaims(String token, Function<Claims,T> claimsResolver){
    final Claims claims = extractAllClaims(token);
    return claimsResolver.apply(claims);
  }

  private Claims extractAllClaims(String token) {
    return Jwts.parser().decryptWith(getKey()).build().parseSignedClaims(token).getPayload();
  }

  private SecretKey getKey() {
    try {
      byte[] bytes = Decoders.BASE64.decode(secretKey);
      return Keys.hmacShaKeyFor(bytes);
    } catch (Exception e) {
      log.error("Error in getKey()", e);
      throw e;
    }
  }
}

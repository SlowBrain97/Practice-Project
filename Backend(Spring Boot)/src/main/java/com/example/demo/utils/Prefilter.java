package com.example.demo.utils;


import com.example.demo.service.iJwtService;
import com.example.demo.service.iUserService;
import io.micrometer.common.util.StringUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.Arrays;

import static com.example.demo.config.WebConfig.whiteList;

@Component
@Slf4j
@RequiredArgsConstructor
public class Prefilter extends OncePerRequestFilter {
  private final iJwtService jwtService;
  private final iUserService iUserService;
  @Override
  protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain) throws ServletException, IOException {
    String path = request.getRequestURI();
    if (Arrays.asList(whiteList).contains(path)){
      filterChain.doFilter(request, response);
      return;
    }
    String authorization = request.getHeader("Authorization");

    if (authorization != null || authorization.startsWith("Bearer ")){
      filterChain.doFilter(request,response);
      return;
    }
    final String token = authorization.substring(7);

    final String username = jwtService.extractUsername(token);
    if (StringUtils.isNotEmpty(username) && SecurityContextHolder.getContext().getAuthentication() == null){
      SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
      UserDetails userDetails = iUserService.loadUserByUsername(username);
      if (jwtService.isValid(token,userDetails)){
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails.getUsername(), null, userDetails.getAuthorities());
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        securityContext.setAuthentication(authentication);
        SecurityContextHolder.setContext(securityContext);
      }

    }

    filterChain.doFilter(request,response);

  }
}

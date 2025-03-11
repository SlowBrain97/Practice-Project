package com.example.demo.config;

import com.example.demo.service.UserService;
import com.example.demo.service.iUserService;
import com.example.demo.utils.Prefilter;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;

import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@RequiredArgsConstructor
@EnableAspectJAutoProxy(proxyTargetClass = true)
@EnableWebSecurity
public class WebConfig implements WebMvcConfigurer {
  private final iUserService iuserService;
  private final Prefilter prefilter;
  public static String[] whiteList = {"/login", "/api/**", "/auth/access","/swagger-ui/**",
          "/v3/api-docs/**",
          "/swagger-resources/**",
          "/swagger-ui.html", "/user/createUser"};
  @Bean
  public static BCryptPasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**").allowedOrigins("http://localhost:5173", "http://localhost:8080")
            .allowedMethods("GET","POST","PUT","DELETE","PATCH").allowedHeaders("*").allowCredentials(true);
  }
  @Bean
  public SecurityFilterChain filterChain (@NotNull HttpSecurity httpSecurity) throws Exception {
    httpSecurity.csrf(AbstractHttpConfigurer::disable).authorizeHttpRequests(req->{
              req.requestMatchers(whiteList).permitAll().anyRequest().authenticated();
            })
            .sessionManagement(manager-> manager.sessionCreationPolicy(STATELESS))
            .authenticationProvider(provider())
            .addFilterBefore(prefilter,UsernamePasswordAuthenticationFilter.class);
    return httpSecurity.build();
  }
  @Bean
  public AuthenticationProvider provider() {
    DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
    daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
    daoAuthenticationProvider.setUserDetailsService(iuserService);
    return daoAuthenticationProvider;
  }

 @Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }
}

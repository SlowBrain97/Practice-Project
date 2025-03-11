package com.example.demo.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("dev")
public class SwaggerConfig {
  @Bean
  public OpenAPI custom(){
    return new OpenAPI().info(new Info().title("Testing").version("1.0").description("API for testing"));
  }
}

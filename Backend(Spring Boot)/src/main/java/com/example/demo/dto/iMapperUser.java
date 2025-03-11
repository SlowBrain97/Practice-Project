package com.example.demo.dto;

import com.example.demo.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface iMapperUser {

  @Mapping(target = "password", ignore = true)
  UserDTO createUserMapToDTO(User user);

  
}

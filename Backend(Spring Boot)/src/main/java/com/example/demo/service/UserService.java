package com.example.demo.service;

import com.example.demo.CustomException.CustomException;
import com.example.demo.config.WebConfig;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.iMapperUser;
import com.example.demo.model.Profile;
import com.example.demo.model.Role;
import com.example.demo.model.Student;
import com.example.demo.model.User;
import com.example.demo.repository.ProfileRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.request.CreateUserRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static com.example.demo.config.WebConfig.passwordEncoder;

@Service
@RequiredArgsConstructor
public class UserService implements  iUserService{
  private final UserRepository userRepository;


  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
    return userRepository.findByEmail(username).orElseThrow(()->new UsernameNotFoundException("Username not found"));
  }

  public UserDTO createUser(CreateUserRequest createUserRequest){
    if (userRepository.findByEmail(createUserRequest.getEmail()).isPresent())
      throw new CustomException("Usename has exist", HttpStatus.BAD_REQUEST);

    User user = new User(createUserRequest.getEmail(), passwordEncoder().encode(createUserRequest.getPassword()), createUserRequest.getRole());
    Profile profile = new Student();
    user.setProfile(profile);
    profile.setUser(user);
    user = userRepository.save(user);
    return iMapperUser.INSTANCE.createUserMapToDTO(user);
  }

  @Override
  public Optional<User> findByEmail(String email) {
    return userRepository.findByEmail(email);
  }
}
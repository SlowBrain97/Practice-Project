package com.example.demo.repository;

import com.example.demo.model.User;
import com.example.demo.request.CreateUserRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Objects;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
  Optional<User> findByEmail(String email);
}

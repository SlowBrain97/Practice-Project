package com.example.demo.repository;

import com.example.demo.model.Student;
import jakarta.persistence.EntityNotFoundException;
import lombok.NonNull;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends ProfileRepository<Student>{
  @Override
  void deleteById(Long id);
  @NonNull
  default Student getStudentById(Long id){
    return findById(id).orElseThrow(()-> new EntityNotFoundException("not found student by id:" + id));
  }
}

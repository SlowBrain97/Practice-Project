package com.example.demo.service;

import com.example.demo.dto.StudentDTO;
import com.example.demo.model.Student;
import com.example.demo.request.CreatePeopleRequest;
import org.springframework.web.multipart.MultipartFile;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public interface iStudentService {
  Student createStudent (String createPeopleRequest, MultipartFile file);
  void deleteStudentById(Long id);
  Student updateStudent(String updateRequest, Optional<MultipartFile> file) throws SQLException;
}

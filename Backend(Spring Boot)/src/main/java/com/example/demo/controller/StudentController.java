package com.example.demo.controller;

import com.example.demo.ApiResponse.ApiResponse;
import com.example.demo.dto.StudentDTO;
import com.example.demo.model.Student;
import com.example.demo.request.CreatePeopleRequest;
import com.example.demo.service.StudentService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.lang.reflect.Field;
import java.sql.Blob;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class StudentController {
  private final StudentService studentService;

  @PostMapping(value = "/createStudent" ,produces = {MediaType.APPLICATION_JSON_VALUE})
  public ResponseEntity<ApiResponse> createStudent(@RequestPart("newStudent") String createRequest, @RequestParam("avatar") MultipartFile file){
      try{
        Student newStudent = studentService.createStudent(createRequest, file);
        return ResponseEntity.ok(new ApiResponse("create successfully", studentService.mapToDTO(newStudent)));
      }catch(Exception e){
        return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("create failed",null));
      }
  }
  @PutMapping(value = "/updateStudent" ,produces = {MediaType.APPLICATION_JSON_VALUE})
  public ResponseEntity<ApiResponse> updateStudent(@RequestPart("newStudent") String updateRequest, @RequestParam("avatar") Optional<MultipartFile> file){
    try{
      Student newStudent = studentService.updateStudent(updateRequest, file);
      return ResponseEntity.ok(new ApiResponse("create successfully", studentService.mapToDTO(newStudent)));
    }catch(Exception e){
      return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("update failed",null));
    }
  }
  @GetMapping(value = "/allStudents" , produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<ApiResponse> getAllStudent(){
    try{
      List<StudentDTO> studentDTOList = studentService.getAllStudent().stream().map(studentService::mapToDTO)
              .collect(Collectors.toList());
      return ResponseEntity.ok(new ApiResponse("successfully",studentDTOList));
    }catch (Exception e){
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("loi mapping thi phai",null));
    }
  }
  @DeleteMapping("/{id}/deleteStudent")
  public ResponseEntity<ApiResponse> deleteStudent(@PathVariable Long id){
    try{
      studentService.deleteStudentById(id);
      return ResponseEntity.ok(new ApiResponse("delete successfully", null));
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.CONFLICT).body(new ApiResponse("failes",null));
    }
  }
}

package com.example.demo.service;

import com.example.demo.dto.StudentDTO;
import com.example.demo.model.Addresss;
import com.example.demo.model.Student;
import com.example.demo.repository.ProfileRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.request.CreatePeopleRequest;
import com.example.demo.request.UpdatePeopleRequest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.*;

@Service
@RequiredArgsConstructor
public class StudentService implements iStudentService{
  private final StudentRepository studentRepository;
  final ObjectMapper objectMapper = new ObjectMapper();
  @Override
  public Student createStudent(String createRequest, MultipartFile file) {

    CreatePeopleRequest createPeopleRequest = null;
    try {
       createPeopleRequest = objectMapper.readValue(createRequest, CreatePeopleRequest.class);
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
    byte[] bytes = new byte[0];
    try {
      bytes = file.getBytes();
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
    Blob imageFile = null;
    try {
      imageFile = new SerialBlob(bytes);
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
    Addresss addresss = new Addresss(createPeopleRequest.getPostCode(),createPeopleRequest.getStreet());
    Student student = new Student(createPeopleRequest.getFirstName(),
                                  createPeopleRequest.getLastName(),
                                  createPeopleRequest.getDateOfBirth(),
                                  addresss,
                                  createPeopleRequest.getPhoneNumber(),
                                  imageFile,
                                  null,
                                  createPeopleRequest.getGender(),
                                  createNumberCard()
                                  );

      return studentRepository.save(student);
    }

  @Override
  public Student updateStudent(String updateRequest, Optional<MultipartFile> file) throws SQLException {
    UpdatePeopleRequest updatePeopleRequest = null;
    try {
      updatePeopleRequest = objectMapper.readValue(updateRequest, UpdatePeopleRequest.class);
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
    byte[] bytes = new byte[0];
    try {
      if (file.isPresent()) {
        MultipartFile files = file.get();
        bytes = files.getBytes();
      }
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
    Blob imageFile = new SerialBlob(bytes);
    final Addresss addresss = new Addresss(updatePeopleRequest.getPostCode(),updatePeopleRequest.getStreet());
    Student student = studentRepository.getStudentById(updatePeopleRequest.getId());
      student.setAddresss(addresss);
      student.setDateOfBirth(updatePeopleRequest.getDateOfBirth());
      if (imageFile.length()>0) student.setAvatar(imageFile);
      student.setFirstName(updatePeopleRequest.getFirstName());
      student.setLastName(updatePeopleRequest.getLastName());
      student.setPhoneNumber(updatePeopleRequest.getPhoneNumber());

    return studentRepository.save(student);
  }

  public List<Student> getAllStudent() {
    return studentRepository.findAll();
  }

  @Override
  public void deleteStudentById(Long id) {
    studentRepository.deleteById(id);
  }

  private String createNumberCard(){
      String result = "SV";
      for (int i = 1; i<= 9; i++){
        Random random = new Random();
        int rand = random.nextInt(9);
        result = result + Integer.toString(rand);
      }
      return result;
    }
    public StudentDTO mapToDTO (Student student){
    StudentDTO studentDTO = new StudentDTO();
        studentDTO.setId(student.getId());
        studentDTO.setClasses(student.getClasses());
        studentDTO.setFirstName(student.getFirstName());
        studentDTO.setLastName(student.getLastName());
        studentDTO.setDateOfBirth(student.getDateOfBirth());
        studentDTO.setAddresss(student.getAddresss());
      if (student.getAvatar() != null){
        Blob bLob = student.getAvatar();
        try {
          byte[] bytes = bLob.getBytes(1,(int) bLob.length());
          studentDTO.setAvatar("data:image/png;base64," + Base64.getEncoder().encodeToString(bytes));
        } catch (SQLException e) {
          throw new RuntimeException(e);
        }
      }
      studentDTO.setPhoneNumber(student.getPhoneNumber());
        studentDTO.setJoinedSchoolDay(student.getEntryDay());
        studentDTO.setNumberCard(student.getCardNumber());
        studentDTO.setRetireDay(student.getRetiredDay());
        studentDTO.setGender(student.getGender());
        return studentDTO;
    }
}

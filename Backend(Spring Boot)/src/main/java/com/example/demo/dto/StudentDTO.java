package com.example.demo.dto;

import com.example.demo.model.Addresss;
import com.example.demo.model.Classes;
import lombok.Data;
import org.springframework.lang.Nullable;

import java.sql.Blob;
import java.time.LocalDate;
import java.util.Date;

@Data
public class StudentDTO {
  private Long id;
  private String firstName;
  private String lastName;
  private Date dateOfBirth;
  private String phoneNumber;
  private Date joinedSchoolDay;
  private Date retireDay;
  private Addresss addresss;
  @Nullable
  private String avatar;
  private Classes classes;
  private String numberCard;
  private String gender;
}

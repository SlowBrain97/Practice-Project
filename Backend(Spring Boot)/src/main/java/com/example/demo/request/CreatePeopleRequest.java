package com.example.demo.request;

import lombok.Data;

import java.sql.Blob;
import java.time.LocalDate;
import java.util.Date;
@Data
public class CreatePeopleRequest {
  private String firstName;
  private String lastName;
  private Date dateOfBirth;
  private String phoneNumber;
  private String postCode;
  private String street;
  private String gender;
}

package com.example.demo.request;

import lombok.Data;

import java.util.Date;
@Data
public class UpdatePeopleRequest {
  private Long id;
  private String firstName;
  private String lastName;
  private Date dateOfBirth;
  private String phoneNumber;
  private String postCode;
  private String street;
  private String gender;
}

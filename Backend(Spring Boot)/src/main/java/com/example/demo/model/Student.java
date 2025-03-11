package com.example.demo.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Blob;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Student extends Profile {
  @ManyToOne
  @JoinColumn(name = "classes")
  @Nullable
  private Classes classes;
  private String cardNumber;

  public Student(String firstName, String lastName, Date dateOfBirth, Addresss addresss, String phoneNumber, Blob avatar, Date entryDay,
                 String gender, String cardNumber) {
    super(firstName, lastName, dateOfBirth, addresss, phoneNumber, avatar, entryDay , gender);
    this.cardNumber = cardNumber;
  }
}

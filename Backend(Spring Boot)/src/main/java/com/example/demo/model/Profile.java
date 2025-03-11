package com.example.demo.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Blob;
import java.util.Date;

@Setter
@Getter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)

public abstract class Profile {
    @Id
    protected Long id;
    protected String firstName;
    protected String lastName;
    @Temporal(TemporalType.DATE)
    protected Date dateOfBirth;
    @Embedded
    protected Addresss addresss;
    protected String phoneNumber;
    @Lob
    protected Blob avatar;
    @Temporal(TemporalType.DATE)
    protected Date entryDay;
    @Nullable
    @Temporal(TemporalType.DATE)
    protected Date retiredDay;
    protected String gender;
    @MapsId
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    @JsonBackReference
    protected User user;
    public Profile(String firstName, String lastName, Date dateOfBirth, Addresss addresss, String phoneNumber, Blob avatar, Date entryDay, String gender) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.addresss = addresss;
        this.phoneNumber = phoneNumber;
        this.avatar = avatar;
        this.entryDay = entryDay;
        this.gender = gender;
    }

    public Profile() {
    }
}

package com.example.demo.service;

import com.example.demo.repository.ClassesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClassesService {
  private final ClassesRepository classesRepository;
  

}

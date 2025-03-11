package com.example.demo.service;

import com.example.demo.model.Classes;
import com.example.demo.request.CreateClassRequest;

public interface iClassesService {
  Classes createClass(CreateClassRequest createClassRequest);
}

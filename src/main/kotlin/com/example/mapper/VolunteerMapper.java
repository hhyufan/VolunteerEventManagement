package com.example.mapper;

import com.example.domain.Volunteer;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface VolunteerMapper {
    List<Volunteer> findAll();
    Volunteer findById(Long id);
    Volunteer findByName(String name);
    void insert(Volunteer volunteer);
    void update(Volunteer volunteer);
    void delete(Long id);
}

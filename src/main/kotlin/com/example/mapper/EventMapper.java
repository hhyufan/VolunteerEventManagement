package com.example.mapper;

import com.example.domain.Event;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface EventMapper {
    List<Event> findAll();
    Event findById(Long id);
    void insert(Event event);
    void update(Event event);
    void delete(Long id);
}

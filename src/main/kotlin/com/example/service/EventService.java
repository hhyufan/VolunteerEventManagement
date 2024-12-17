package com.example.service;

import com.example.domain.Event;
import com.example.mapper.EventMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    private final EventMapper eventMapper;

    public EventService(EventMapper eventMapper) {
        this.eventMapper = eventMapper;
    }

    public List<Event> getAllEvents() {
        return eventMapper.findAll();
    }

    public Event getEventById(Long id) {
        return eventMapper.findById(id);
    }
    public Event getEventByName(String name) {
        return eventMapper.findByName(name);
    }

    public void createEvent(Event event) {
        eventMapper.insert(event);
    }

    public void updateEvent(Event event) {
        eventMapper.update(event);
    }

    public void deleteEvent(Long id) {
        eventMapper.delete(id);
    }

}

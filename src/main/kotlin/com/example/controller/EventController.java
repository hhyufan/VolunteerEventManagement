package com.example.controller;

import com.example.domain.Event;
import com.example.dto.EventDTO;
import com.example.service.EventService;
import com.example.util.DurationToStringConverter;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/events")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<EventDTO> getAllEvents() {
        return eventService.getAllEvents().stream()
                .map(EventDTO::new)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public EventDTO getEventById(@PathVariable Long id) {

        return new EventDTO(eventService.getEventById(id));
    }

    @PostMapping
    public void createEvent(@RequestBody Event event) {
        eventService.createEvent(event);
    }

    @PutMapping("/{id}")
    public void updateEvent(@PathVariable Long id, @RequestBody Event event) {
        event.setId(id);
        eventService.updateEvent(event);
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
    }

    @GetMapping("/grade")
    public String getGrades() {
        return DurationToStringConverter.convertToString(
                Duration.ofSeconds(eventService.getAllEventsGrade())
        );
    }
}

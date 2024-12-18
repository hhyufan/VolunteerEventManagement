package com.example.controller;
import com.example.domain.EventRecord;
import com.example.dto.CreateEventRecordDTO;
import com.example.dto.EventDTO;
import com.example.service.EventRecordService;
import com.example.service.EventService;
import com.example.service.VolunteerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/event-records")
public class EventRecordController {
    private final EventRecordService eventRecordService;
    private final EventService eventService;
    private final VolunteerService volunteerService;
    public EventRecordController(EventRecordService eventRecordService, EventService eventService, VolunteerService volunteerService) {
        this.eventRecordService = eventRecordService;
        this.eventService = eventService;
        this.volunteerService = volunteerService;

    }
    @GetMapping("/volunteer/{volunteerName}")
    public List<EventDTO> getAllEventsByVolunteerName(@PathVariable String volunteerName) {
        return eventRecordService.getAllEventRecordsByVolunteerName(volunteerName).stream()
                .map(eventRecord -> eventService.getEventById(eventRecord.getEventId())) // 获取 Event 对象
                .map(EventDTO::new)
                .collect(Collectors.toList());
    }
    // 获取当前志愿者的所有已完成活动
    @GetMapping("/completed/volunteer/{volunteerName}")
    public List<EventDTO> getCompletedEventsByVolunteerName(@PathVariable  String volunteerName) {
        return eventRecordService.getCompletedEventRecordsByVolunteerName(volunteerName).
                stream()
                .map(eventRecord -> eventService.getEventById(eventRecord.getEventId()))
                .map(EventDTO::new)
                .collect(Collectors.toList());
    }
    // 创建新的活动记录
    @PostMapping
    public void createEventRecord(@RequestBody CreateEventRecordDTO request) {

        Long eventId = eventService.getEventByName(request.getEventName()).getId();
        Long volunteerId = volunteerService.getVolunteerByName(request.getVolunteerName()).getId(); // 假设有这个方法

        EventRecord eventRecord = new EventRecord(null,  volunteerId, eventId, false);

        eventRecordService.createEventRecord(eventRecord);
    }
    // 设置活动完成状态
    @PutMapping("/volunteer/{volunteerName}/event/{eventName}")
    public void setEventCompletionStatus(@PathVariable String volunteerName,
                                         @PathVariable String eventName,
                                         @RequestParam boolean completed) {
        Long eventId = eventService.getEventByName(eventName).getId();
        Long volunteerId = volunteerService.getVolunteerByName(volunteerName).getId();
        eventRecordService.setEventCompletionStatus(volunteerId, eventId, completed);
    }

    @DeleteMapping("/{volunteerName}/{eventName}")
    public void deleteEvent(@PathVariable String volunteerName, @PathVariable String eventName) {
        System.out.println(volunteerName);
        System.out.println(eventName);
        Long eventId = eventService.getEventByName(eventName).getId();
        Long volunteerId = volunteerService.getVolunteerByName(volunteerName).getId();
        System.out.println(eventId);
        System.out.println(volunteerId);
        eventRecordService.deleteEvent(volunteerId, eventId);
    }

}

package com.example.controller;
import com.example.domain.EventRecord;
import com.example.service.EventRecordService;
import com.example.service.VolunteerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/event-records")
public class EventRecordController {
    private final EventRecordService eventRecordService;
    public EventRecordController(EventRecordService eventRecordService) {
        this.eventRecordService = eventRecordService;
    }
    // 获取当前志愿者的所有活动记录
    @GetMapping("/volunteer/{volunteerName}")
    public List<EventRecord> getAllEventRecordsByVolunteerName(@PathVariable String volunteerName) {
        return eventRecordService.getAllEventRecordsByVolunteerName(volunteerName);
    }
    // 获取当前志愿者的所有已完成活动
    @GetMapping("/completed/volunteer/{volunteerName}")
    public List<EventRecord> getCompletedEventRecordsByVolunteerName(@PathVariable  String volunteerName) {
        return eventRecordService.getCompletedEventRecordsByVolunteerName(volunteerName);
    }
    // 创建新的活动记录
    @PostMapping
    public void createEventRecord(@RequestBody EventRecord eventRecord) {
        eventRecordService.createEventRecord(eventRecord);
    }
    // 设置活动完成状态
    @PutMapping("/volunteer/{volunteerId}/event/{eventId}")
    public void setEventCompletionStatus(@PathVariable Long volunteerId,
                                         @PathVariable Long eventId,
                                         @RequestParam boolean completed) {
        eventRecordService.setEventCompletionStatus(volunteerId, eventId, completed);
    }
}

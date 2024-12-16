package com.example.controller;
import com.example.domain.EventRecord;
import com.example.service.EventRecordService;
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
    @GetMapping("/volunteer/{volunteerId}")
    public List<EventRecord> getAllEventRecordsByVolunteerId(@PathVariable Long volunteerId) {
        return eventRecordService.getAllEventRecordsByVolunteerId(volunteerId);
    }

    // 获取当前志愿者的所有已完成活动
    @GetMapping("/completed/volunteer/{volunteerId}")
    public List<EventRecord> getCompletedEventRecordsByVolunteerId(@PathVariable Long volunteerId) {
        return eventRecordService.getCompletedEventRecordsByVolunteerId(volunteerId);
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

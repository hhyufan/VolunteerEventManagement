package com.example.service;

import com.example.domain.EventRecord;
import com.example.mapper.EventRecordMapper;
import com.example.mapper.VolunteerMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EventRecordService {
    private final EventRecordMapper eventRecordMapper;
    private final VolunteerMapper volunteerMapper;
    public EventRecordService(EventRecordMapper eventRecordMapper, VolunteerMapper volunteerMapper) {
        this.eventRecordMapper = eventRecordMapper;
        this.volunteerMapper = volunteerMapper;
    }

    // 获取当前志愿者的所有活动记录
    public List<EventRecord> getAllEventRecordsByVolunteerName(String volunteerName) {
        Long volunteerId = volunteerMapper.findByName(volunteerName).getId();
        return eventRecordMapper.findAllByVolunteerId(volunteerId);
    }

    // 获取当前志愿者的所有已完成活动
    public List<EventRecord> getCompletedEventRecordsByVolunteerName(String volunteerName) {
        Long volunteerId = volunteerMapper.findByName(volunteerName).getId();
        return eventRecordMapper.findCompletedByVolunteerId(volunteerId);
    }

    // 创建新的活动记录
    @Transactional
    public void createEventRecord(EventRecord eventRecord) {
        eventRecordMapper.insert(eventRecord);
    }

    // 设置活动完成状态
    @Transactional
    public void setEventCompletionStatus(Long volunteerId, Long eventId, boolean completed) {
        eventRecordMapper.updateCompletionStatus(volunteerId, eventId, completed);
    }
}

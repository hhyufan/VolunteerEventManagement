package com.example.service;

import com.example.domain.Event;
import com.example.domain.EventRecord;
import com.example.domain.Volunteer;
import com.example.mapper.EventMapper;
import com.example.mapper.EventRecordMapper;
import com.example.mapper.VolunteerMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolunteerService {
    private final VolunteerMapper volunteerMapper;
    private final EventRecordMapper eventRecordMapper;
    private final EventMapper eventMapper;

    public VolunteerService(VolunteerMapper volunteerMapper, EventRecordMapper eventRecordMapper, EventMapper eventMapper) {
        this.volunteerMapper = volunteerMapper;
        this.eventRecordMapper = eventRecordMapper;
        this.eventMapper = eventMapper;
    }

    public List<Volunteer> getAllVolunteers() {
        return volunteerMapper.findAll();
    }

    public Volunteer getVolunteerById(Long id) {
        return volunteerMapper.findById(id);
    }
    public Volunteer getVolunteerByName(String name) {
        return volunteerMapper.findByName(name);
    }
    public void createVolunteer(Volunteer volunteer) {
        volunteerMapper.insert(volunteer);
    }

    public void updateVolunteer(Volunteer volunteer) {
        volunteerMapper.update(volunteer);
    }

    public void deleteVolunteer(Long id) {
        volunteerMapper.delete(id);
    }

    public Volunteer login(String username, String password) {
        Volunteer volunteer = volunteerMapper.findByName(username);
        if (volunteer != null && volunteer.getPassword().equals(password)) {
            return volunteer; // 登录成功，返回用户信息
        }
        return null; // 登录失败
    }

    public Long getVolunteerGrade(Long volunteerId) {

        List<EventRecord> completedRecords = eventRecordMapper.findCompletedByVolunteerId(volunteerId);
        Long durations = 0L;
        for (EventRecord record : completedRecords) {
            Event event = eventMapper.findById(record.getEventId());
            durations += event.getDuration();
        }

        return durations;
    }
    public String getVolunteerName(Long volunteerId) {
        return volunteerMapper.findById(volunteerId).getName();
    }
}

package com.example.mapper;

import com.example.domain.EventRecord;

import java.util.List;

public interface EventRecordMapper {
    List<EventRecord> findAllByVolunteerId(Long volunteerId);
    List<EventRecord> findCompletedByVolunteerId(Long volunteerId);
    void insert(EventRecord eventRecord);
    void updateCompletionStatus(Long volunteerId, Long eventId, boolean completed);
}

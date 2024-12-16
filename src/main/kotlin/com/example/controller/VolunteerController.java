package com.example.controller;

import com.example.domain.ApiResponse;
import com.example.domain.Volunteer;
import com.example.service.VolunteerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/volunteer")
public class VolunteerController {
    private final VolunteerService volunteerService;

    public VolunteerController(VolunteerService volunteerService) {
        this.volunteerService = volunteerService;
    }

    @GetMapping
    public List<Volunteer> getAllVolunteers() {
        return volunteerService.getAllVolunteers();
    }

    @GetMapping("/{id}")
    public Volunteer getVolunteerById(@PathVariable Long id) {
        return volunteerService.getVolunteerById(id);
    }

    @GetMapping("/findByName")
    public Volunteer getVolunteerByName(@RequestParam String name) {
        return volunteerService.getVolunteerByName(name);
    }

    @PostMapping
    public void createVolunteer(@RequestBody Volunteer volunteer) {
        volunteerService.createVolunteer(volunteer);
    }

    @PutMapping("/{id}")
    public void updateVolunteer(@PathVariable Long id, @RequestBody Volunteer volunteer) {
        volunteer.setId(id);
        volunteerService.updateVolunteer(volunteer);
    }

    @DeleteMapping("/{id}")
    public void deleteVolunteer(@PathVariable Long id) {
        volunteerService.deleteVolunteer(id);
    }

    @GetMapping("/login")
    public ApiResponse loginAdmin(@RequestParam String username, @RequestParam String password) {
        Volunteer volunteer = volunteerService.login(username, password);
        if (volunteer == null) {
            return new ApiResponse("登录失败：用户名或密码错误");
        }
        return new ApiResponse("登录成功");
    }

    // 注册
    @PostMapping("/register")
    public ApiResponse registerAdmin(@RequestBody Volunteer volunteer) {
        System.out.println(volunteer.getName());
        if (volunteerService.getVolunteerByName(volunteer.getName()) != null) {
            return new ApiResponse("用户已存在！");
        }
        volunteerService.createVolunteer(volunteer);
        return new ApiResponse("注册成功");
    }
}

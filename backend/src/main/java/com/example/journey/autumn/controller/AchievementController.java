package com.example.journey.autumn.controller;

import com.example.journey.autumn.data.AchievementByUser;
import com.example.journey.autumn.model.Achievement;
import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.AchievementRepository;
import com.example.journey.autumn.repository.UserRepository;
import com.example.journey.autumn.service.AchievementService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/achievements")
public class AchievementController {
    AchievementRepository achievementRepository;
    UserRepository userRepository;
    AchievementService achievementService;

    public AchievementController(AchievementRepository achievementRepository, UserRepository userRepository, AchievementService achievementService) {
        this.achievementRepository = achievementRepository;
        this.userRepository = userRepository;
        this.achievementService = achievementService;
    }

    @GetMapping(value = "/{id}", produces = "application/json")
    public List<Integer> getAchievementsByUser(@PathVariable("id") Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.isPresent() ? achievementService.getListOfAchievementsByUser(user.get()) : null;
    }
    @PostMapping
    public HttpStatus addAchievementByUser(@RequestBody AchievementByUser achievementByUser) {
        long userId = achievementByUser.id();
        System.out.println(userId);
        Optional<User> user = userRepository.findById(userId);
        if(user.isEmpty()) {
            return HttpStatus.NOT_FOUND;
        }
        for (Integer achievementId : achievementByUser.doneAchievements()) {
            achievementRepository.save(new Achievement(user.get(), achievementId));
        }
        return HttpStatus.OK;
    }
}

package com.example.journey.autumn.service;

import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.AchievementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AchievementService {
    AchievementRepository achievementRepository;

    public AchievementService(AchievementRepository achievementRepository) {
        this.achievementRepository = achievementRepository;
    }

    public List<Integer> getListOfAchievementsByUser(User user) {
        return achievementRepository.findAllByUser(user)
                .stream()
                .map(data -> data.getAchievementId())
                .collect(Collectors.toList());
    }
}

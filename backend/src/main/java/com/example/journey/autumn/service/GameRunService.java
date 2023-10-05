package com.example.journey.autumn.service;

import com.example.journey.autumn.model.GameRun;
import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.GameRunRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameRunService {
    @Autowired
    GameRunRepository gameRunRepository;

    public long getAverageScore(User user) {
        List<GameRun> allRunsByUser = gameRunRepository.findAllByUser(user);
        if (allRunsByUser.size() == 0) {
            return 0;
        }
        Long totalScore = allRunsByUser.stream()
                .map(gameRun -> gameRun.getScore())
                .reduce(0L, (subTotal, runScore) -> subTotal + runScore);
        return totalScore / allRunsByUser.size();
    }
}

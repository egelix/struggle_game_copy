package com.example.journey.autumn.repository;

import com.example.journey.autumn.model.Achievement;
import com.example.journey.autumn.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AchievementRepository extends JpaRepository<Achievement, Long> {
    List<Achievement> findAllByUser(User user);
}

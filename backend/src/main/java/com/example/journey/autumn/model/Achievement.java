package com.example.journey.autumn.model;

import com.fasterxml.jackson.databind.DatabindException;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "achievements")
public class Achievement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "achievement_id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "achieved")
    private int achieved;
    @Column(name = "date_of_achievement")
    private Date date;

    public Achievement(User user, int achievementId) {
        this.user = user;
        this.achieved = achievementId;
        this.date = new Date();
    }

    public Achievement() {
    }

    public long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getAchievementId() {
        return achieved;
    }

    public void setAchievementId(int achievementId) {
        this.achieved = achievementId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}

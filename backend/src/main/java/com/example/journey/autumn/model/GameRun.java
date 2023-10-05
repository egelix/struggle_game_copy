package com.example.journey.autumn.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "game_runs")
public class GameRun {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "run_id")
    private int id;
    @Column
    private long score;
    @Column
    private String character;
    @Column
    private Date date;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public GameRun(long score, String character, User user) {
        this.score = score;
        this.character = character;
        this.user = user;
        this.date = new Date();
    }

    public GameRun() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getScore() {
        return score;
    }

    public void setScore(long score) {
        this.score = score;
    }

    public String getCharacter() {
        return character;
    }

    public void setCharacter(String character) {
        this.character = character;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

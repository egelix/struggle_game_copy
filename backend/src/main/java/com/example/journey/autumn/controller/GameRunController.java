package com.example.journey.autumn.controller;

import com.example.journey.autumn.data.GameRunEntry;
import com.example.journey.autumn.model.GameRun;
import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.GameRunRepository;
import com.example.journey.autumn.repository.UserRepository;
import com.example.journey.autumn.service.GameRunService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/game-runs")
public class GameRunController {
    @Autowired
    GameRunRepository runRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    GameRunService gameRunService;
    @GetMapping(produces = "application/json")
    public List<GameRun> getAllRuns() {
        return runRepository.findAll();
    }
    @PostMapping(produces = "application/json")
    public HttpStatus createRun(@RequestBody GameRunEntry gameRunEntry) {
        long userId = gameRunEntry.id();
        System.out.println(userId);
        Optional<User> user = userRepository.findById(userId);
        if(user.isEmpty()) {
            return HttpStatus.NOT_FOUND;
        }
        runRepository.save(new GameRun(gameRunEntry.score(), gameRunEntry.character(), user.get()));
        return HttpStatus.OK;
    }
    @DeleteMapping(value = "/{id}")
    public HttpStatus deleteRunById(@PathVariable("id") Long id) {
        runRepository.deleteById(id);
        return HttpStatus.OK;
    }
    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<GameRun> getRunById(@PathVariable("id") Long id) {
        Optional<GameRun> run = runRepository.findById(id);
        return run.isPresent()? new ResponseEntity<>(run.get(), HttpStatus.OK): new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
    @GetMapping(value = "/user/{id}", produces = "application/json")
    public ResponseEntity<List<GameRun>> getRunByUserId(@PathVariable("id") Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.isPresent()? new ResponseEntity<>(runRepository.findAllByUser(user.get()), HttpStatus.OK): new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/average/{id}")
    public ResponseEntity<Long> getAverageScoreAllRuns(@PathVariable("id") long id) {
        Optional<User> user = userRepository.findById(id);
        if(user.isEmpty()) {
            new ResponseEntity<>(0, HttpStatus.NOT_FOUND);
        }
        long averageScore = gameRunService.getAverageScore(user.get());
        return new ResponseEntity<>(averageScore, HttpStatus.OK);
    }
    @GetMapping(value = "/highscore", produces = "application/json")
    public List<Object[]> getHighscores() {
        return runRepository.findGeneralHighscores();
    }
    @GetMapping(value = "/highscore/{character}")
    public List<Object[]> getHighscoresFromCharacter(@PathVariable("character") String character) {
        return runRepository.findHighscoresByCharacter(character);
    }
}

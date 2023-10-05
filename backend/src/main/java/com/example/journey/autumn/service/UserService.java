package com.example.journey.autumn.service;

import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void updateHighscoreById (long id, long highscore) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User userToUpdate = user.get();
            user.get().setHighscore(highscore);
            userRepository.save(userToUpdate);
        }
    }
}

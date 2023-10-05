package com.example.journey.autumn.controller;

import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.UserRepository;
import com.example.journey.autumn.security.UserPrincipal;
import com.example.journey.autumn.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserService userService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @GetMapping(produces = "application/json")
    public List<User> getAllUsers() {
        List<User> allUsers = userRepository.findAll();
        System.out.println(allUsers.get(0).getAuthorities());
        return allUsers;
    }
    @PostMapping(produces = "application/json")
    public HttpStatus createUser(@RequestBody Map<String, String> requestBody) {
        String password = passwordEncoder.encode(requestBody.get("password"));
        userRepository.save(new User(requestBody.get("username"), password, 0));
        return HttpStatus.OK;
    }

    @PatchMapping(value = "/newhighscore/{id}")
    public HttpStatus updateHighscoreById (@RequestBody Map<String, Long> requestBody, @PathVariable("id") long id) {
        userService.updateHighscoreById(id, requestBody.get("highscore"));
        return HttpStatus.OK;
    }

    @DeleteMapping(value = "/{id}")
    public HttpStatus deleteUserById(@PathVariable("id") Long id) {
        userRepository.deleteById(id);
        return HttpStatus.OK;
    }
    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
        Optional<User> requestedUser = userRepository.findById(id);

        return requestedUser.isPresent() ? new ResponseEntity<>(requestedUser.get(), HttpStatus.OK) : new ResponseEntity<>(null, NOT_FOUND);
    }
}

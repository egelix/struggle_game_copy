package com.example.journey.autumn.repository;

import com.example.journey.autumn.model.GameRun;
import com.example.journey.autumn.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GameRunRepository extends JpaRepository<GameRun, Long> {
    List<GameRun> findAllByUser(User user);
    @Query(value = "SELECT\n" +
            "  u.username,\n" +
            "  max_score.highest_score,\n" +
            "  gr.character,\n" +
            "  gr.date\n" +
            "FROM\n" +
            "  _user u\n" +
            "LEFT JOIN (\n" +
            "  SELECT user_id, MAX(score) AS highest_score\n" +
            "  FROM game_runs\n" +
            "  WHERE character = :character\n" +
            "  GROUP BY user_id\n" +
            ") max_score ON u.user_id = max_score.user_id\n" +
            "LEFT JOIN game_runs gr ON max_score.user_id = gr.user_id AND max_score.highest_score = gr.score\n" +
            "ORDER BY max_score.highest_score DESC;\n", nativeQuery = true)
    List<Object[]> findHighscoresByCharacter(@Param("character") String character);
    @Query(value = "SELECT\n" +
            "  u.username,\n" +
            "  max_score.highest_score,\n" +
            "  gr.character,\n" +
            "  gr.date\n" +
            "FROM\n" +
            "  _user u\n" +
            "INNER JOIN (\n" +
            "  SELECT user_id, MAX(score) AS highest_score\n" +
            "  FROM game_runs\n" +
            "  GROUP BY user_id\n" +
            ") max_score ON u.user_id = max_score.user_id\n" +
            "LEFT JOIN game_runs gr ON max_score.user_id = gr.user_id AND max_score.highest_score = gr.score\n" +
            "ORDER BY max_score.highest_score DESC;\n", nativeQuery = true)
    List<Object[]> findGeneralHighscores();
}

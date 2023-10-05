CREATE TABLE game_runs (
    run_id SERIAL PRIMARY KEY ,
    score INT NOT NULL ,
    character VARCHAR(255) NOT NULL ,
    date TIMESTAMP NOT NULL ,
    user_id INT NOT NULL ,
    FOREIGN KEY (user_id) REFERENCES _user(user_id)
);
INSERT INTO game_runs (score, "character", "date", user_id)
VALUES
    (14, 'Martin', '2023-09-18 14:30:00', 4),
    (24, 'Martin', '2023-09-18 14:30:00', 5),
    (3, 'Martin', '2023-09-18 14:30:00', 4),
    (5, 'Martin', '2023-09-18 14:30:00', 5),
    (70, 'Martin', '2023-09-18 14:30:00', 5),
    (16, 'Martin', '2023-09-18 14:30:00', 4),
    (55, 'Martin', '2023-09-18 14:30:00', 4),
    (24, 'Martin', '2023-09-18 14:30:00', 6),
    (35, 'Martin', '2023-09-18 14:30:00', 4),
    (16, 'Martin', '2023-09-18 14:30:00', 6),
(14, 'Kris', '2023-09-18 14:30:00', 4),
    (24, 'Kris', '2023-09-18 14:30:00', 5),
    (3, 'Kris', '2023-09-18 14:30:00', 4),
    (5, 'Kris', '2023-09-18 14:30:00', 5),
    (70, 'Kris', '2023-09-18 14:30:00', 5),
    (16, 'Kris', '2023-09-18 14:30:00', 4),
    (55, 'Kris', '2023-09-18 14:30:00', 4),
    (24, 'Kris', '2023-09-18 14:30:00', 6),
    (35, 'Kris', '2023-09-18 14:30:00', 4),
    (16, 'Kris', '2023-09-18 14:30:00', 6);

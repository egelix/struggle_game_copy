import AchievementList from "./AchievementList";
import "./GameOverDisplay.css";
const GameOverDisplay = ({gameOverText, restartGame, gameContext}) => {
    return(
    <div className="game-over-wrapper">
        <div className="game-over-container">
            <p>{gameOverText}</p>
            {gameContext.isNewHighScore? "You got a new Highscore! Keep struggling!":null}
            {gameContext.newAchievements === null? null
            :<div>
                <p className="text">You have earned new achievements:</p>
                <AchievementList achievements={gameContext.newAchievements} />
            </div>}
            <button onClick={restartGame}>RESTART</button>
        </div>
    </div>
    )
}
export default GameOverDisplay;
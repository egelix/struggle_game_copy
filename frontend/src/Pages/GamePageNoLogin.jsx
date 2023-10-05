import { useState } from "react";
import GameApp from "../game/GameApp";
import CharacterSelect from "../components/CharacterSelect/CharacterSelect";
import GameOverDisplay from "../components/GameOverDisplay/GameOverDisplay";
import RunContext from "../game/classes/RunContext";
const GamePageNoLogin = () => {
    const [playerCharacter, setPlayerCharacter] = useState(null);
    const [gameOverText, setGameOverText] = useState(null);
    const restartGame = () => {
        setGameOverText(null);
        setPlayerCharacter(null);
    }
    return (
    <div className="page-root">
        {playerCharacter === null?<CharacterSelect setPlayerCharacter={setPlayerCharacter} />:
        gameOverText === null?<GameApp playerCharacter={playerCharacter} isLoggedIn={false} setGameOverText={setGameOverText} setGameContext={()=>{}}/>: null} 
        {gameOverText === null? null: <GameOverDisplay gameOverText={gameOverText} restartGame={restartGame} gameContext={new RunContext()}/>}  
    </div>
        )
}
export default GamePageNoLogin;
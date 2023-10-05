import { useState } from "react";
import GameApp from "../game/GameApp";
import CharacterSelect from "../components/CharacterSelect/CharacterSelect";
import GameOverDisplay from "../components/GameOverDisplay/GameOverDisplay";
const GamePage = () => {
    const [playerCharacter, setPlayerCharacter] = useState(null);
    const [gameOverText, setGameOverText] = useState(null);
    const [gameContext, setGameContext] = useState(null);
    const restartGame = () => {
        setGameOverText(null);
        setPlayerCharacter(null);
    }
    return (<div className="page-root">
        {playerCharacter === null?<CharacterSelect setPlayerCharacter={setPlayerCharacter} />:
        gameOverText === null?<GameApp playerCharacter={playerCharacter} isLoggedIn={true} setGameOverText={setGameOverText} setGameContext={setGameContext}/>: null} 
        {gameOverText === null? null: <GameOverDisplay gameOverText={gameOverText} restartGame={restartGame} gameContext={gameContext}/>}       
    </div>)
}
export default GamePage;
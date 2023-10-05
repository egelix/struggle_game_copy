import GAME_SETTINGS from "../../game/constants/GameSettings";
import { useRef, useEffect } from "react";

const LevelPreview = ({level}) => {
    const SCALE = 1/2;
    const canvasRef = useRef(null);
    const drawLevelPreview = (level, c) => {
        c.canvas.width = GAME_SETTINGS.WIDTH * SCALE;
        c.canvas.height = GAME_SETTINGS.HEIGHT * SCALE;
        c.fillStyle = 'white';
        c.fillRect(0, 0, c.canvas.width, c.canvas.height);
        c.fillStyle = 'rgb(0, 0, 255)';
        level.platforms.forEach((platform) => {
            c.fillRect(platform.position.x * SCALE, platform.position.y * SCALE, platform.width * SCALE, platform.height * SCALE);
        })
        drawBlocks(level.coinPositions, 'rgb(0, 255, 0)', c);
        drawBlocks(level.powerUpPositions, 'rgb(255, 0, 255)', c);
    }
    const drawBlocks = (positions, color, c) => {
        c.fillStyle = color;
        positions.forEach((position) => {
            c.fillRect(position.x * SCALE, position.y * SCALE, GAME_SETTINGS.BLOCK_SIZE * SCALE, GAME_SETTINGS.BLOCK_SIZE * SCALE);
        })
    }
    useEffect(() => {
        const canvas = canvasRef.current;
        const c = canvas.getContext('2d');
        drawLevelPreview(level, c);
      }, [])
    return(
        <div className="level-preview">
            <h2>{level.name}</h2>
            <canvas ref={canvasRef} />
            <p>Max coins: {level.maxCoins}</p>
        </div>
    )
}
export default LevelPreview;
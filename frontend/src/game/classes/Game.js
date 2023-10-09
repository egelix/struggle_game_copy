import GAME_SETTINGS from "../constants/GameSettings";
import Player from "./Player";
import CollisionBlock from "./CollisionBlock";
import InputHandler from "./InputHandler";
import ScoreBlock from "./ScoreBlock";
import PlayerGUI from "./PlayerGUI";
import LEVELS from "../constants/LevelData";
import RunContext from "./RunContext";
import AnimationHandler from "./AnimationHandler";

class Game {
    constructor(canvas, playerCharacter) {
        this.context = new RunContext();
        this.canvas = canvas;
        this.c = canvas.getContext('2d');
        this.playerCharacter = playerCharacter;
        this.platforms = [];
        this.scoreBlocks = [];
        this.state = "starting";
        this.currentLevel = LEVELS[0];
        this.currentLevel.currentCoins = this.currentLevel.maxCoins;
        this.lastScoreBlock = {
            position: {
                x: 0,
                y: 0,
            }
        }
        this.powerUp = {
            position: {
                x: 0,
                y: 0,
            }
        };
    }
    initialize() {
        this.c.canvas.width = GAME_SETTINGS.WIDTH;
        this.c.canvas.height = GAME_SETTINGS.HEIGHT;
       
        this.player = new Player({
            position: GAME_SETTINGS.STARTING_POSITION, 
            context: this.c,
            game: this,
            playerCharacter: this.playerCharacter,
        });
        this.player.loadAnimations();
         this.loadPlatforms();
        this.spawnPowerUp();
        this.loadScoreBlocks();
        this.playerGUI = new PlayerGUI ({
            player: this.player,
            context: this.c,
            game: this,
        })
        this.inputHandler = new InputHandler(this.player);
        window.addEventListener('keydown', (event) => {
            this.inputHandler.handleKeyDown(event);
        })
        window.addEventListener('keyup', (event) => {
            this.inputHandler.handleKeyUp(event);
        })
        this.animationHandler = new AnimationHandler(this);
        }
    draw() {
        this.c.fillStyle = 'black';
        this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    update() {
        if(this.state === "starting") {
            this.playerGUI.displayStartTimer();
            return;
        }
        this.draw();
        this.platforms.forEach((platform) => {
            platform.update();
        })
        this.scoreBlocks.forEach((scoreBlock) => {
            scoreBlock.update();
        });
        this.powerUp.update();
        this.player.update();
        this.playerGUI.update();
        this.animationHandler.update();
        this.checkScoreBlocks();
    }
    loadPlatforms() {
        this.platforms = this.currentLevel.platforms.map((platform) => {
            return new CollisionBlock({...platform, c: this.c});
        })
    }
    loadScoreBlocks() {
        
        const randomPositions = [...this.currentLevel.coinPositions]
            .filter((position) => {
                if(this.lastScoreBlock.position.x === position.x) {
                    return this.lastScoreBlock.position.y !== position.y;
                }
                else {
                    return true;
                }
            })
            .sort(() => 0.5 - Math.random())
            .slice(0, this.currentLevel.currentCoins);
        this.scoreBlocks = randomPositions.map((position) => {
            return new ScoreBlock({
                position: {
                    x: position.x,
                    y: position.y,
                },
                c: this.c,
            })
        })
        this.scoreBlocks.forEach((scoreBlock) => {
            scoreBlock.initializeImage();
        })
        if(this.currentLevel.currentCoins > 1) {
            this.currentLevel.currentCoins--;
        }
    }
    checkScoreBlocks() {
        if(this.scoreBlocks.length === 1) {
            this.lastScoreBlock = this.scoreBlocks[0];
        }
        if(this.scoreBlocks.length === 0) {
            this.loadScoreBlocks();
        }
    }
    pickRandomLevel() {
        const randomLevels = [...LEVELS]
        .filter((level) => level.name !== this.currentLevel.name)
        .sort(() => 0.5 - Math.random());
        this.currentLevel = randomLevels[0];
        this.currentLevel.currentCoins = this.currentLevel.maxCoins;
        this.scoreBlocks = [];
        this.platforms = [];
        this.loadPlatforms();
        this.loadScoreBlocks();
        this.spawnPowerUp();
    }
    spawnPowerUp() {
        const randomPositions = [...this.currentLevel.powerUpPositions]
            .filter((position) => {
                if(this.powerUp.position.x === position.x) {
                    return this.powerUp.position.y !== position.y;
                }
                else {
                    return true;
                }
            })
            .sort(() => 0.5 - Math.random());
        const newPosition = randomPositions[0];
        this.powerUp = new CollisionBlock({
            position: {
                x: newPosition.x,
                y: newPosition.y,
            },
            height: GAME_SETTINGS.BLOCK_SIZE,
            width: GAME_SETTINGS.BLOCK_SIZE,
            c: this.c,
        })
        const typeIndex = Math.floor(Math.random() * GAME_SETTINGS.POWERUP_TYPES.length);
        const randomType = GAME_SETTINGS.POWERUP_TYPES[typeIndex];
        Object.setPrototypeOf(this.powerUp, randomType);
        this.powerUp.initializeImage();
    }
    spawnAllCoins() {
        this.scoreBlocks = this.currentLevel.coinPositions.map((position) => {
            return new ScoreBlock({
                position: {
                    x: position.x,
                    y: position.y,
                },
                width: GAME_SETTINGS.BLOCK_SIZE,
                height: GAME_SETTINGS.BLOCK_SIZE,
                c: this.c,
            })
        })
        this.scoreBlocks.forEach((scoreBlock) => {
            scoreBlock.initializeImage();
        })
    }
}
export default Game;
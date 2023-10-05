import GAME_SETTINGS from "../constants/GameSettings";

class PlayerGUI {
    constructor({player, context, game}) {
        this.player = player;
        this.c = context;
        this.game = game;
        this.startingTime = Date.now();
        this.timeElapsed = 0;
        this.startupMaxTime = 3;
        this.timeLimit = 20 + this.startupMaxTime;
        this.displayedTime = this.timeLimit;
        this.startupTimeDisplayed = 1;
        this.fontSize = GAME_SETTINGS.BLOCK_SIZE;
    }
    draw() {
        this.c.font = this.fontSize + "px Arial";
        this.c.fillStyle = 'rgb(255, 0, 0)';
        this.c.fillText("SCORE: " + this.game.context.score, GAME_SETTINGS.BLOCK_SIZE * 26, GAME_SETTINGS.BLOCK_SIZE);
        this.c.fillText("TIME: " + this.displayedTime, GAME_SETTINGS.BLOCK_SIZE, GAME_SETTINGS.BLOCK_SIZE);
    }
    update() {
        this.draw();
        this.timeElapsed = this.startingTime - Date.now();
        this.displayedTime = Math.ceil(this.timeLimit + (this.timeElapsed / 1000));
        if(this.displayedTime <= 0) {
            this.game.state = "finished";
        }
    }
    displayGameOver() {
        this.c.clearRect(0, 0, GAME_SETTINGS.WIDTH, GAME_SETTINGS.HEIGHT);
        this.c.font = "100px Arial";
        this.c.fillText("GAME OVER", 30, 300);
        this.c.fillText("YOUR SCORE: " + this.player.score, 20, 500);
    }
    displayStartTimer() {
        this.timeElapsed = this.startingTime - Date.now();
        this.startupTimeDisplayed = Math.ceil(this.startupMaxTime + (this.timeElapsed / 1000))
        this.c.clearRect(0, 0, GAME_SETTINGS.WIDTH, GAME_SETTINGS.HEIGHT);
        this.c.font = (this.fontSize * 3) + "px Arial";
        this.c.fillText(this.startupTimeDisplayed, GAME_SETTINGS.WIDTH / 2 - GAME_SETTINGS.BLOCK_SIZE, GAME_SETTINGS.HEIGHT / 2);
        if(this.startupTimeDisplayed === 0) {
            this.game.state = "running";
        }
    }
}
export default PlayerGUI;
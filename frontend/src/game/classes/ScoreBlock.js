import GAME_SETTINGS from "../constants/GameSettings";
import CollisionBlock from "./CollisionBlock";

class ScoreBlock extends CollisionBlock {
    constructor({ position, c }) {

        super({ c });
        this.position = {
            x: position.x - GAME_SETTINGS.BLOCK_SIZE / 2,
            y: position.y - GAME_SETTINGS.BLOCK_SIZE / 2,
        }
        this.width = GAME_SETTINGS.BLOCK_SIZE * 2;
        this.height = GAME_SETTINGS.BLOCK_SIZE * 2;
        this.score = 1;
        this.currentImage = new Image()
        this.hitBox = {
            width: GAME_SETTINGS.BLOCK_SIZE,
            height: GAME_SETTINGS.BLOCK_SIZE,
            position: {
                x: position.x,
                y: position.y,
            }
        }
    }
    draw() {
        if (!this.currentImage) {
            return
        } 

    const cropbox = {
      position: {
        x: this.currentFrame * (this.currentImage.width / this.frameRate),
        y: 0,
      },
      width: this.currentImage.width / this.frameRate,
      height: this.currentImage.height,
    }

    this.c.drawImage(
      this.currentImage,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
    /* this.c.fillStyle = 'rgba(255, 0, 0, 0.5)';
    this.c.fillRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height); */
    }
    update() {
        this.draw();
    }
    initializeImage() {
        this.currentImage.src = "/src/game/assets/sprites/items/lightbulb/bulb_animation.png";
        this.frameRate = 15;
        this.frameBuffer = 4;
        this.currentFrame = 0;
        this.elapsedFrames = 0;
    }
}
export default ScoreBlock;
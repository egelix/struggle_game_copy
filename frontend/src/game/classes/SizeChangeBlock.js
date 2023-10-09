import GAME_SETTINGS from "../constants/GameSettings";
import CollisionBlock from "./CollisionBlock";

class SizeChangeBlock extends CollisionBlock {
    constructor({ position, height, width, c }) {
        super({ position, height, width, c });
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
    activate(game) {
        const growth = GAME_SETTINGS.BLOCK_SIZE / 2;
        game.scoreBlocks.forEach(block => {
            block.height += growth;
            block.width += growth;
            block.score++;
            block.hitBox.x += growth / 2;
            block.hitBox.y += growth / 2;
            block.position.x -= growth / 2;
            block.position.y -= growth / 2;
            block.hitBox.position.x -= growth / 2;
            block.hitBox.position.y -= growth / 2;
        });
        game.spawnPowerUp();
    }
    initializeImage() {
        this.currentImage = new Image();
        this.currentImage.src = "/src/game/assets/sprites/items/sizechangeblock/js_logo_animation.png";
        this.frameRate = 4;
        this.frameBuffer = 10;
        this.currentFrame = 0;
        this.elapsedFrames = 0;
    }
}
export default SizeChangeBlock;
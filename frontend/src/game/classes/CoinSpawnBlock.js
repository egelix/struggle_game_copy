import CollisionBlock from "./CollisionBlock";

class CoinSpawnBlock extends CollisionBlock {
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
        game.spawnAllCoins();
        game.playerGUI.timeLimit -= 5;
        game.spawnPowerUp();
    }
    initializeImage() {
        this.currentImage = new Image();
        this.currentImage.src = "/src/game/assets/sprites/items/coinspawnblock/react_logo_animation.png";
        this.frameRate = 4;
        this.frameBuffer = 10;
        this.currentFrame = 0;
        this.elapsedFrames = 0;
    }
}
export default CoinSpawnBlock;
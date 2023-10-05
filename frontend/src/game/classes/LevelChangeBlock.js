import CollisionBlock from "./CollisionBlock";

class LevelChangeBlock extends CollisionBlock {
    constructor({ position, height, width, c }) {
        super({ position, height, width, c });
    }
    draw() {
        this.c.drawImage(this.currentImage, this.position.x, this.position.y, this.width, this.height);
      }
    activate(game) {
        game.pickRandomLevel();
        game.playerGUI.timeLimit -= 2;
    }
    initializeImage() {
        const img = new Image()
        img.src = "/src/game/assets/sprites/items/levelchangeblock/level_change1.png";
        this.currentImage = img;
    }
}
export default LevelChangeBlock;
class AnimationHandler {
    constructor(game) {
        this.game = game;
    }
    update() {
        this.updateFrames(this.game.player);
        this.game.scoreBlocks.forEach(scoreBlock => {
            this.updateFrames(scoreBlock);
        });
        this.updateFrames(this.game.powerUp);
    }
    updateFrames(sprite) {
        sprite.elapsedFrames++
    
        if (sprite.elapsedFrames % sprite.frameBuffer === 0) {
          if (sprite.currentFrame < sprite.frameRate - 1) {
              sprite.currentFrame++
          }
          else {
              sprite.currentFrame = 0
          }
        }
      }
}
export default AnimationHandler;
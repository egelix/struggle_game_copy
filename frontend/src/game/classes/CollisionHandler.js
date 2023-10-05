class CollisionHandler {
    constructor({player, game}) {
        this.player = player;
        this.game = game;
    }
    collision({ object1, object2 }) {
        return (
          object1.position.y + object1.height >= object2.position.y &&
          object1.position.y <= object2.position.y + object2.height &&
          object1.position.x <= object2.position.x + object2.width &&
          object1.position.x + object1.width >= object2.position.x
        )
    }
    platformCollision({ object1, object2 }) {
        return (
          object1.position.y + object1.height >= object2.position.y &&
          object1.position.y + object1.height <=
            object2.position.y + object2.height &&
          object1.position.x <= object2.position.x + object2.width &&
          object1.position.x + object1.width >= object2.position.x
        )
    }
    checkForVerticalCollisions() {
        /* for (let i = 0; i < this.collisionBlocks.length; i++) {
          const collisionBlock = this.collisionBlocks[i]
    
          if (
            collision({
              object1: this.hitbox,
              object2: collisionBlock,
            })
          ) {
            if (this.player.velocity.y > 0) {
              this.player.velocity.y = 0
    
              const offset =
                this.hitbox.position.y - this.position.y + this.hitbox.height
    
              this.position.y = collisionBlock.position.y - offset - 0.01
              break
            }
    
            if (this.player.velocity.y < 0) {
              this.player.velocity.y = 0
    
              const offset = this.hitbox.position.y - this.position.y
    
              this.position.y =
                collisionBlock.position.y + collisionBlock.height - offset + 0.01
              break
            }
          }
        } */
        // platform collision blocks
    for (let i = 0; i < this.game.platforms.length; i++) {
        const platformCollisionBlock = this.game.platforms[i];
  
        if (
          this.platformCollision({
            object1: this.player,
            object2: platformCollisionBlock,
          })
        ) {
          if (this.player.velocity.y > 0) {
            this.player.velocity.y = 0;
  
            /* const offset =
              this.player.position.y - this.position.y + this.player.height */
  
            this.player.position.y = platformCollisionBlock.position.y - this.player.height; // add "- offset" if using offset
            this.player.state.isGrounded = true;
            if(!this.player.hasPressedJump) {
              this.player.canJump = true;
            }
            break;
          }
        }
      }
      if(this.player.velocity.y !== 0) {
        this.player.state.isGrounded = false;
      }
    }
    checkScoreBlockCollision() {
      for(let i = 0; i < this.game.scoreBlocks.length; i++){
        const scoreBlock = this.game.scoreBlocks[i];
        if(
            this.collision({
                object1: this.player,
                object2: scoreBlock,
            })
        ) {
            this.game.context.score += scoreBlock.score;
            this.game.context.coins++;
            this.game.playerGUI.timeLimit++;
            this.game.scoreBlocks.splice(i, 1);
            return;
        }
      }
    }
    checkPowerUpCollision() {
      if(
        this.collision({
          object1: this.player,
          object2: this.game.powerUp,
        })
      )
      {
        this.game.currentLevel.currentCoins = this.game.currentLevel.maxCoins;
        this.game.powerUp.activate(this.game);
      }
    }
}
export default CollisionHandler;
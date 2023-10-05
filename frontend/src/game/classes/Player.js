import GAME_SETTINGS from "../constants/GameSettings";
import CollisionHandler from "./CollisionHandler";

class Player {
    constructor({position, context, playerCharacter, game}) {
        this.name = playerCharacter.name;
        this.position = position;
        this.context = context;
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.width= GAME_SETTINGS.BLOCK_SIZE * 1.5;
        this.height = GAME_SETTINGS.BLOCK_SIZE * 1.5;
        this.speed = 15 * GAME_SETTINGS.SPEED_UNIT;
        this.maxFallSpeed = GAME_SETTINGS.MAX_FALL_SPEED;
        this.jumpSpeed = {
            acceleration: 2 * GAME_SETTINGS.SPEED_UNIT,
            max: 40 * GAME_SETTINGS.SPEED_UNIT,
            initial: 8 * GAME_SETTINGS.SPEED_UNIT,
        };
        this.gravity = GAME_SETTINGS.GRAVITY;
        this.collisionHandler = new CollisionHandler({
            player: this,
            game: game,
        })
        this.state = {
            isMovingRight: false,
            isMovingLeft: false,
            isGrounded: false,
        }
        this.score = 0;
        this.hasPressedJump = false;
        this.canJump = false;
        this.jumpFrames = {
            current: 0,
            max: 10,
        }
        this.spriteSrc = playerCharacter.spriteSrc;
        this.currentImg = new Image();
    }
    loadImg() {
        this.currentImg.src = this.spriteSrc;
    }
    draw() {
        this.context.drawImage(this.currentImg, this.position.x, this.position.y, this.width, this.height);
    }
    update() {
        this.draw();
        this.applyHorizontalMovement();
        this.applyGravity();
        this.collisionHandler.checkScoreBlockCollision();
        this.collisionHandler.checkForVerticalCollisions();
        this.collisionHandler.checkPowerUpCollision();
    }
    applyGravity() {
        this.position.y += this.velocity.y;
        if(this.canJump && this.hasPressedJump) {
            this.jump();
            return;
        }
        if(this.velocity.y <= this.maxFallSpeed) {
            this.velocity.y += this.gravity;
        }
    }
    applyHorizontalMovement() {
        if(
            this.state.isMovingRight && 
            ((this.position.x + this.width + this.velocity.x) < GAME_SETTINGS.WIDTH) 
            ) {
            this.velocity.x = this.speed;
        }
        else if(
            this.state.isMovingLeft &&
            ((this.position.x + this.velocity.x) > 0)
            ) {
            this.velocity.x = -this.speed;
        }
        else {
            this.velocity.x = 0;
        }
        this.position.x += this.velocity.x;
        }
    jump() {
        if(this.state.isGrounded) {
            this.jumpFrames.current = 0;
            this.state.isGrounded = false;
            this.velocity.y = -this.jumpSpeed.initial;
            return;
        }
        if(this.velocity.y < this.jumpSpeed.max) {
            this.velocity.y -= this.jumpSpeed.acceleration;
        }
        this.jumpFrames.current++;
        if(this.jumpFrames.current >= this.jumpFrames.max) {
            this.canJump = false;
        }
    }
    
}
export default Player;
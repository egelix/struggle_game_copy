class InputHandler {
    constructor(player) {
        this.player = player;
    }
    handleKeyDown(event) {
      event.preventDefault();
        switch (event.key) {
            case 'd':
              this.player.state.isMovingRight = true;
              break;
            case 'a':
              this.player.state.isMovingLeft = true;
              break;
            case ' ':
              this.player.hasPressedJump = true;
              break;
          }
    }
    handleKeyUp(event) {
      event.preventDefault();
        switch (event.key) {
            case 'd':
              this.player.state.isMovingRight = false;
              break;
            case 'a':
              this.player.state.isMovingLeft = false;
              break;
            case ' ':
              this.player.hasPressedJump = false;
          }
    }
}
export default InputHandler;
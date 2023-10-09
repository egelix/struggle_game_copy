class CollisionBlock {
  constructor({ position, height, width, c }) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.c = c;
  }

  draw() {
    this.c.fillStyle = 'white';
    this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
  }
}
export default CollisionBlock;

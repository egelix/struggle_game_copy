import CoinSpawnBlock from "../classes/CoinSpawnBlock";
import LevelChangeBlock from "../classes/LevelChangeBlock";
import SizeChangeBlock from "../classes/SizeChangeBlock";

const GAME_SETTINGS = {
    WIDTH: window.visualViewport.width * 0.8,
    get HEIGHT() {return this.WIDTH * (9/16)},
    get BLOCK_SIZE() {return this.WIDTH/32},
    get SPEED_UNIT() {return this.BLOCK_SIZE/60},
    get GRAVITY() {return 4 * this.SPEED_UNIT},
    get MAX_FALL_SPEED() {return 30 * this.SPEED_UNIT},
    POWERUP_TYPES: [
        LevelChangeBlock.prototype,
        CoinSpawnBlock.prototype,
        SizeChangeBlock.prototype,
    ],
    get STARTING_POSITION() {
        return {
            x: 1 * this.BLOCK_SIZE,
            y: 7 * this.BLOCK_SIZE,
        }
    } ,
}
export default GAME_SETTINGS;
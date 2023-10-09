const characterData = [
    {
        key: 1,
        name: "Martin",
        headShotSrc: "/src/gifs/martin_headshot.gif",
        spriteSrc: "/src/game/assets/sprites/characters/martin/martin.png",
        animations: {
            idle: {
                src: "/src/game/assets/sprites/characters/martin/martin_idle.png",
                frameBuffer: 10,
                frameRate: 4,
            },
            idleLeft: {
                src: "/src/game/assets/sprites/characters/martin/martin_idle_left.png",
                frameBuffer: 10,
                frameRate: 4,
            },
            run: {
                src: "/src/game/assets/sprites/characters/martin/martin_run_right.png",
                frameBuffer: 10,
                frameRate: 6,
            },
            runLeft: {
                src: "/src/game/assets/sprites/characters/martin/martin_run_left.png",
                frameBuffer: 10,
                frameRate: 6,
            },
        },
        hitBox: {
            width: 1,
            height: 2,
        },
        width: 2,
        height: 2,
        jumpSpeed: {
            acceleration: 3,
            max: 40,
            initial: 8,
        },
        speed: 15,
    },
    {
        key: 2,
        name:"Kris",
        headShotSrc: "/src/gifs/kris_headshot.gif",
        spriteSrc: "/src/game/assets/sprites/characters/kris/kris_jobs.png",
        animations: {
            idle: {
                src: "/src/game/assets/sprites/characters/kris/kris_idle.png",
                frameBuffer: 10,
                frameRate: 4,
            },
            idleLeft: {
                src: "/src/game/assets/sprites/characters/kris/kris_idle_left.png",
                frameBuffer: 10,
                frameRate: 4,
            },
            run: {
                src: "/src/game/assets/sprites/characters/kris/kris_run_right.png",
                frameBuffer: 10,
                frameRate: 6,
            },
            runLeft: {
                src: "/src/game/assets/sprites/characters/kris/kris_run_left.png",
                frameBuffer: 10,
                frameRate: 6,
            },
        },
        hitBox: {
            width: 1,
            height: 2,
        },
        width: 2,
        height: 2,
        jumpSpeed: {
            acceleration: 2,
            max: 40,
            initial: 8,
        },
        speed: 20,
    }
]
export default characterData;
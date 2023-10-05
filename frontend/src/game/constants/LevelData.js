import GAME_SETTINGS from "./GameSettings";
const UNIT = GAME_SETTINGS.BLOCK_SIZE;
const GROUND_PLATFORM =  {
    position: {
        x: 0,
        y: GAME_SETTINGS.HEIGHT - UNIT,
},
    height: UNIT,
    width: GAME_SETTINGS.WIDTH,
}

const LEVELS = [
    {
        name: "level1",
        maxCoins: 4,
        platforms: [
            GROUND_PLATFORM,
            {
                position: {
                    x: UNIT * 3,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 5),
            },
                height: UNIT/2,
                width: UNIT * 6,
            },
            {
                position: {
                    x: UNIT * 13,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
                },
                height: UNIT/2,
                width: UNIT * 6,
            },
            {
                position: {
                    x: UNIT * 23,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 5),
                },
                height: UNIT/2,
                width: UNIT * 6,
            }

        ],
    coinPositions: [
            {
                x: UNIT * 3,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
            {
                x: UNIT * 8,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
            {
                x: UNIT * 23,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
            {
                x: UNIT * 28,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
            {
                x: UNIT * 15.5,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 10),
            },
            {
                x: UNIT * 15.5,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 14),
            },
            {
                x: UNIT * 15.5,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 4),
            },
            {
                x: UNIT * 21,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 5),
            },
            {
                x: UNIT * 10,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 5),
            },
        ],
    powerUpPositions: [
        {
            x: UNIT * 15.5,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 7),
        },
        {
            x: UNIT * 12,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 14),
        },
        {
            x: UNIT * 19,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 14),
        },
        {
            x: UNIT * 5.5,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 4.5),
        },
        {
            x: UNIT * 25.5,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 4.5),
        },
    ]
    },
    {
        name: "level2",
        maxCoins: 3,
        platforms: [
            GROUND_PLATFORM,
            {
                position: {
                    x: UNIT * 8,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 6),
            },
                height: UNIT/2,
                width: UNIT * 15,
            },
            

        ],
    coinPositions: [
            {
                x: UNIT * 9,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 11),
            },
            {
                x: UNIT * 12,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 9),
            },
            {
                x: UNIT * 22,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 11),
            },
            {
                x: UNIT * 19,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 9),
            },
            {
                x: UNIT * 6,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 4),
            },
            {
                x: UNIT * 24,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 4),
            },
            {
                x: UNIT * 28,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 5),
            },
            {
                x: UNIT * 2,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 5),
            },
        ],
    powerUpPositions: [
        {
            x: UNIT * 15.5,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 11),
        },
        {
            x: UNIT * 2,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 10),
        },
        {
            x: UNIT * 29,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 10),
        },
    ]
    },
    {
        name: "level3",
        maxCoins: 4,
        platforms: [
            GROUND_PLATFORM,
            {
                position: {
                    x: UNIT * 4,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 4),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: 0,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 8,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 4,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 12),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 25,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 4),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 29,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 21,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 25,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 12),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 13,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 11),
                },
                height: UNIT/2,
                width: UNIT * 6,
            },
        ],
    coinPositions: [
            {
                x: UNIT,
                y: GAME_SETTINGS.HEIGHT - UNIT * 10,
            },
            {
                x: UNIT * 9,
                y: GAME_SETTINGS.HEIGHT - UNIT * 10,
            },
            {
                x: UNIT * 22,
                y: GAME_SETTINGS.HEIGHT - UNIT * 10,
            },
            {
                x: UNIT * 30,
                y: GAME_SETTINGS.HEIGHT - UNIT * 10,
            },
            {
                x: UNIT * 12,
                y: GAME_SETTINGS.HEIGHT - UNIT * 5,
            },
            {
                x: UNIT * 15.5,
                y: GAME_SETTINGS.HEIGHT - UNIT * 5,
            },
            {
                x: UNIT * 19,
                y: GAME_SETTINGS.HEIGHT - UNIT * 5,
            },
            {
                x: UNIT * 15.5,
                y: GAME_SETTINGS.HEIGHT - UNIT * 14,
            },
            {
                x: UNIT * 5,
                y: GAME_SETTINGS.HEIGHT - UNIT * 14,
            },
            {
                x: UNIT * 26,
                y: GAME_SETTINGS.HEIGHT - UNIT * 14,
            },
        ],
    powerUpPositions: [
        {
            x: UNIT,
            y: GAME_SETTINGS.HEIGHT - UNIT * 16,
        },
        {
            x: UNIT * 12,
            y: GAME_SETTINGS.HEIGHT - UNIT * 16,
        },
        {
            x: UNIT * 20,
            y: GAME_SETTINGS.HEIGHT - UNIT * 16,
        },
        {
            x: UNIT * 30,
            y: GAME_SETTINGS.HEIGHT - UNIT * 16,
        },
    ]
    },
]
export default LEVELS;
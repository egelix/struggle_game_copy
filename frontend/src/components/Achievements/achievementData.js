const ACHIEVEMENT_DATA = [
    {
        index: 0,
        title: "Fast Fifty",
        imgSrcEmpty: "/src/pixel/achievements/50coins_empty.png",
        imgSrcDone: "/src/pixel/achievements/50coins_done.png",
        text: "Collect at least 50 coins in one run",
        done: false,
        date: null,
        check: function(context) {
            return context.coins >= 50;
        },
    },
    {
        index: 1,
        title: "Hot Hundred",
        imgSrcEmpty: "/src/pixel/achievements/100coins_empty.png",
        imgSrcDone: "/src/pixel/achievements/100coins_done.png",
        text: "Collect at least 100 coins in one run",
        done: false,
        date: null,
        check: function(context) {
            return context.coins >= 100;
        },
    },
    {
        index: 2,
        title: "Almost a million!",
        imgSrcEmpty: "/src/pixel/achievements/150coins_empty.png",
        imgSrcDone: "/src/pixel/achievements/150coins_done.png",
        text: "Get rich by collection at least 150 coins in one run",
        done: false,
        date: null,
        check: function(context) {
            return context.coins >= 150;
        },
    },
]
export default ACHIEVEMENT_DATA;
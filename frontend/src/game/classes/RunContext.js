import ACHIEVEMENT_DATA from "../../components/Achievements/achievementData";

class RunContext {
    constructor() {
        this.coins = 0;
        this.score = 0;
        this.isNewHighScore = false;
        this.newAchievements = null;
    }
}

export default RunContext;
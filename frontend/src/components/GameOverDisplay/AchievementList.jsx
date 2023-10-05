import ACHIEVEMENT_DATA from "../Achievements/achievementData";
import "./GameOverDisplay.css";
const AchievementList = ({achievements}) => {
    return(
        <ul>
            {achievements.map((achievement) => {
                const achievementData = ACHIEVEMENT_DATA[achievement];
                return(
                    <li key={achievementData.index}>
                        <div className="achievement-item">
                            <p>{achievementData.title}</p>
                            <img src={achievementData.imgSrcDone} alt="" />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
export default AchievementList;
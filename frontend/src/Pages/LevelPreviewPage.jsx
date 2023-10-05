import { useState } from "react";
import LEVELS from "../game/constants/LevelData";
import LevelPreview from "../components/LevelPreview/LevelPreview";

const LevelPreviewPage = () => {
    const [levels, setLevels] = useState(LEVELS);
    return(
        <div className="page-root">
        <h1>LEVELS</h1>
        {levels === null? <p>Loading...</p>
        :<div className="level-preview-container">
            {levels.map((level) => {
            return <LevelPreview level={level} key={level.name}/>
        })}
        </div>}
        </div>
    )
}
export default LevelPreviewPage;
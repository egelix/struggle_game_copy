import { useEffect, useState } from "react";
import TUTORIAL_DATA from "./tutorialData";
import TutorialElement from "./TutorialElement";

const TutorialCarousel = () => {
    const [index, setIndex] = useState(0);
    const [currentInfoElement, setCurrentInfoElement] = useState(TUTORIAL_DATA[index]);
    const length = TUTORIAL_DATA.length;
    useEffect(() => {
        setCurrentInfoElement(TUTORIAL_DATA[index]);
    }, [index])
    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
      };
    
      const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
      };
    return (
            <div className="tutorial-field">                   
                    <TutorialElement title={currentInfoElement.title} text={currentInfoElement.text} imgSrc={currentInfoElement.imgSrc} />
                    <div className="tutorial-nav-box">
                        <div className="info-arrow">
                            <img src="src/pixel/arrow_white_left.png" alt="next button" onClick={handlePrevious} 
                            onMouseOver={e => (e.currentTarget.src = "src/pixel/arrow_full_left.png")}
                            onMouseOut={e => (e.currentTarget.src = "src/pixel/arrow_white_left.png")}
                            />
                        </div>
                        <div className="info-title">
                            <h2>{currentInfoElement.title}</h2>
                        </div>
                        <div className="info-arrow">
                            <img src="src/pixel/arrow_white_right.png" alt="next button" onClick={handleNext} 
                            onMouseOver={e => (e.currentTarget.src = "src/pixel/arrow_full_right.png")}
                            onMouseOut={e => (e.currentTarget.src = "src/pixel/arrow_white_right.png")}
                            /> 
                        </div>
                    </div>
            </div>
        )
}
export default TutorialCarousel;
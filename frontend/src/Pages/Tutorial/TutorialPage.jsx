import TutorialCarousel from "../../components/TutorialCarousel/TutorialCarousel";
import "./Tutorial.css";

const TutorialPage = () => {
    return(<div className="page-root">
        <div className="tutorial-container">
            <div className="tutorial-head">
                <h1>HOW TO STRUGGLE</h1>
            </div>
            <div className="tutorial-body">
                <TutorialCarousel />
            </div>
        </div>
    </div>
    )
}
export default TutorialPage;
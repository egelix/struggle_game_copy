const TutorialElement = ({title, text, imgSrc}) => {
    return(
        <div className="tutorial-element-container">
            <p className="tutorial-text">{text}</p>
            <img className="tutorial-img" src={imgSrc}></img>
        </div>
    )
}
export default TutorialElement;
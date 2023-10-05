import "./CharacterCard.css";
export default function CharacterCard({character, setPlayerCharacter}) {
    return(
        <div className="wrapper">
            <h1>{character.name}</h1>
            <img src={character.headShotSrc} alt="HEADSHOT"></img>
            <button onClick={() => {setPlayerCharacter(character)}}>Select</button>
        </div>
    )
}
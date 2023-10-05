import { useState } from "react";
import "./CharacterSelect.css";
import characterData from "./characterData";
import CharacterCard from "../CharacterCard/CharacterCard";

export default function CharacterSelect({setPlayerCharacter}) {
    const [characters, setCharacters] = useState(characterData);
    return (
        <div className="char-container">
            {characters === null? <p>Loading Characters...</p>:
            characters.map((character) => {
                return <CharacterCard character={character} setPlayerCharacter={setPlayerCharacter} key={character.key}/>
            })}
        </div>
    )
}
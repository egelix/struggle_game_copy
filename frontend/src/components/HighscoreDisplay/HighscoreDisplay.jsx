import { useEffect, useState } from "react";
import fetchHighscores from "../../api/fetchHighscores";
import fetchHighscoresFromCharacter from "../../api/fetchHighscoresFromCharacter";
import characterData from "../CharacterSelect/characterData";
import "./HighscoreDisplay.css";

const HighscoreDisplay = () => {
    const[currentCharacter, setCurrentCharacter] = useState(null);
    const[highscoreData, setHighscoreData] = useState(null);
    const[loading, setLoading] = useState(true);
    useEffect(() => {
        async function getHighscores() {
            let data;
            try {
                if(currentCharacter === null) {
                    data = await fetchHighscores()
                    setHighscoreData(data);
                }
                else {
                    data = await fetchHighscoresFromCharacter(currentCharacter);
                    setHighscoreData(data);
                }
            }
            catch(error){
                console.log(error);
            }
            finally {
                console.log(highscoreData);
                setLoading(false);
            }
        }
        setLoading(true);
        getHighscores();
    }, [currentCharacter])
    const formatDate = (date) => {
        const segments = date.split("T")[0].split("-").reverse();
        return segments.join("-");

    }
    return(<div className="hs-display-container">
        <div className="hs-button-container">
            <button onClick={() => setCurrentCharacter(null)}>ALL</button>
            {characterData.map((character) => {
                return <button key={character.key} onClick={() => setCurrentCharacter(character.name)}>{character.name}</button>
            })}
            </div>
            {loading?"loading..."
            :<table className="hs-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Character</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {highscoreData.map((run) => {
                    return(run[1] === null?null
                        :<tr key={run[0]}>
                        <td>{run[0]}</td>
                        <td>{run[1]}</td>
                        <td>{run[2]}</td>
                        <td>{formatDate(run[3])}</td>
                    </tr>)
                })}
                </tbody>
            </table>
            }
    </div>)
}
export default HighscoreDisplay;
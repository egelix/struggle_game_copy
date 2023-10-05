import BASE_URL from "../constants";

const fetchHighscoresFromCharacter = (character) => {
    return fetch(BASE_URL + "/game-runs/highscore/" + character,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("Authorization"),
          }
    })
    .then((res) => res.json())
    .then((data) => {
        return data;
    })
}
export default fetchHighscoresFromCharacter;
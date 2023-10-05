import BASE_URL from "../constants";

const createRun = (score, characterName) => {
    const id = parseInt(localStorage.getItem("userId"));
    return fetch(BASE_URL + "/game-runs",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("Authorization"),
          },
       body: JSON.stringify({ 
        id: id, 
        score: score,
        character: characterName, 
    }),        
    })
    .then((response) => response.json())
}
export default createRun;
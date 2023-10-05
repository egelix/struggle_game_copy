import BASE_URL from "../constants";

const fetchHighscores = () => {
    return fetch(BASE_URL + "/game-runs/highscore",
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
export default fetchHighscores;
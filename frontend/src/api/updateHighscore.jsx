import BASE_URL from "../constants";

const updateHighscore = (highscore) => {
    const id = localStorage.getItem("userId");
    return fetch(BASE_URL + `/users/newhighscore/${id}`,
    {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("Authorization"),
          },
       body: JSON.stringify({ 
        highscore: highscore 
    }),        
    })
    .then((response) => response.json())
}
export default updateHighscore;
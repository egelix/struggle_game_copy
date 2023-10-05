import BASE_URL from "../constants";
const fetchAchievementsByUser = () => {
    const id = parseInt(localStorage.getItem("userId"));
    return fetch(BASE_URL + `/achievements/${id}`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("Authorization"),
          },
    })
    .then((response) => response.json())
    .then(data => {
        return data;
    })
}
export default fetchAchievementsByUser;
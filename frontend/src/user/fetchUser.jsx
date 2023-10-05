import BASE_URL from "../constants";

const fetchUser = () => {
    const id = localStorage.getItem("userId");
    return fetch(BASE_URL + "/users/" + id,
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
export default fetchUser;
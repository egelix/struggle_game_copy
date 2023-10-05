import React, { useState, useContext } from "react";
import LoginField from "../../components/LoginPage/LoginField";
import CreateField from "../../components/LoginPage/CreateField";
import "./LoginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [logInActive, setLogInActive] = useState(false);
  const [createActive, setCreateActive] = useState(false);
  const [newUser, setNewUser] = useState("")

  /*const handleFetchBasicAuth = () => {
    fetch(BASE_URL + "/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from("martin:12345").toString("base64"),
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleFetch = () => {
    fetch(BASE_URL + "/users");
  };

  const handleFetchToken = () => {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    fetch(BASE_URL + "/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };*/

  const handleNewUser = (name) => {
    setNewUser(name);
    setCreateActive(false);
    setLogInActive(true);
  }

  /*let login = !logInActive ? (
    
  ) : (
    <LoginField newUser={newUser}/>
  );*/
  
  /*let create = !createActive ? (
    
  ) : (
    <CreateField handleNewUser={handleNewUser} />
  );*/

  return (
    <div className="page-root">
      <div className="login-container">
        <div className="login-container-2">
          <img className="welcome-pic" src="src/pixel/Welcome.png" alt="welcome logo" />
        </div>
        <div className="login-container-3">
          {
            logInActive ? <LoginField newUser={newUser} setLoginActive={setLogInActive}/> :
            createActive ? <CreateField handleNewUser={handleNewUser} setCreateActive={setCreateActive}/> :
            <>
              <div className="login-opt">
                <Link className="option-btn" to={"/game"}>QUICK PLAY</Link> 
              </div>
              <div className="login-opt">
                <button className="login-btn" onClick={() => {setLogInActive(true);}}>
                  LOGIN
                </button>
              </div>
              <div className="login-opt">
                <button className="option-btn" onClick={() => {setCreateActive(true);}}>
                  REGISTER
                </button>
              </div>
              <div className="login-opt">
                <Link className="option-btn" to={"/how-to-play"}>TUTORIAL</Link> 
              </div>
            </>
          }
        </div>
      </div>
      {/*<button onClick={handleFetchBasicAuth}>basicAuth</button>
      <button onClick={handleFetch}>fetchWithoutAuth</button>
  <button onClick={handleFetchToken}>fetchWithToken</button>{" "}*/}
    </div>
  );
}

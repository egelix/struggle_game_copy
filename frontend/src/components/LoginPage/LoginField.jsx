import React, {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import fetchUser from '../../user/fetchUser';
import UserContext from '../../user/UserContext';
import { Buffer } from 'buffer';
import BASE_URL from '../../constants';

export default function LoginField({newUser, setLoginActive}) {
  const navigate = useNavigate();
  const [name, setName] = useState(newUser);
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [error, setError] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    try {
      fetch(BASE_URL + "/auth/login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + Buffer.from(name + ":" + password).toString("base64")
        }
        // body: JSON.stringify({ name: name, password: password }),
      })
      .then(response => {
        if(!response?.ok) {
          switch(response?.status) {
            case(401):
              setError("Wrong username or password.");
              break;
            default:
              setError("An error occured. Error code: " + response?.status);
              break;
          }
          return;
        }
        localStorage.setItem("Authorization", response.headers.get("Authorization"));
        return response.json();
                        })
        .then(user => {
          localStorage.setItem("userId", user.id);
        })
        .then(async () => {
          const userData = await fetchUser();
          setCurrentUser(userData);
        })
        .then(() => navigate("/account/home"));
    }
    catch(error) {
      setError(error.message);
    }
  };

  return (
    <div className='data-input'>
      <div className='close-btn-container'>
        <img src='src/pixel/x.png' onClick={() => setLoginActive(false)} />
      </div>
      <form className='input-form' onSubmit={handleLogin}>
        <label htmlFor='name'>Name:</label>
        <input value={name} autoFocus type="text" name="name" onChange={handleNameChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handlePasswordChange} />
        <button type='submit' className='submit-btn'>Login</button>
      </form>
      {error===null?null
        :<p className='error-text'>{error}</p>}
    </div>
  )
}

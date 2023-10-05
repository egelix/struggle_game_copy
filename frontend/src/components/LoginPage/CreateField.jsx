import React, {useState} from 'react'
import BASE_URL from '../../constants';

export default function CreateField({handleNewUser, setCreateActive}) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const checkCredentials = () => {
      if(name.length < 5 || name.length > 15) {
        setError("Username must be between 5 and 15 characters long.");
        return true;
      }
      else if(password.length < 8 || password.length > 20) {
        setError("Password must be between 8 and 20 characters long.");
        return true;
      }
      return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkCredentials()) {
          return;
        }
        try {
          fetch(BASE_URL + "/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username: name, password: password }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .then(() => handleNewUser(name));
        }
        catch(error) {
          setError(error.message);
        }
    }

  return (
    <div className='data-input'>
      <div className='close-btn-container'>
        <img src='src/pixel/x.png' onClick={() => setCreateActive(false)} />
      </div>
        <form className='input-form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input autoFocus type='text' name='name' onChange={handleNameChange}/>
          <label htmlFor="password">Password:</label>
          <input type='password' name='password'onChange={handlePasswordChange}/>
          <button className='submit-btn'>CREATE!</button>
        </form>
        {error===null?null
        :<p className='error-text'>{error}</p>}
    </div>
  )
}

import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import { Outlet } from "react-router-dom";
import fetchUser from "./fetchUser";

const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    
    return(
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;
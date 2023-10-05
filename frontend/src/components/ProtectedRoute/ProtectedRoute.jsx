import { useContext, useEffect, useState } from "react";
import UserContext from "../../user/UserContext";
import { Navigate, Route } from "react-router-dom";
import fetchUser from "../../user/fetchUser";


const ProtectedRoute = ({component: Component, ...restOfProps}) => {
    const [currentUser, setCurrentUser] = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function updateUser() {
            let user
            try{
                user = await fetchUser(); 
                setCurrentUser(user);
            }
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        }
        if(currentUser === null && localStorage.getItem("userId") === null) {
            setLoading(false);
        }
        else if(currentUser === null){
            updateUser();
        }
        else {
            setLoading(false);
        }
    }, [currentUser])
    return(
    !loading?
    <>
        {currentUser !== null? <Component />
        :<Navigate to="/" />}
        </>:null
    )
}
export default ProtectedRoute;
import { useContext } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import UserContext from "../../user/UserContext";

export default function Navbar() {
	const [currentUser, setCurrentUser] = useContext(UserContext);
	const logout = () => {
		localStorage.removeItem("Authorization");
		localStorage.removeItem("userId");
		setCurrentUser(null);
	}
    return (
        <div className="container">
            <nav className="navbar">
					<div className="navbar-div">
						<Link className="link-button" to="/account/home">Home</Link>
					</div>
						{currentUser!==null?<p className="navbar-text">Hello {currentUser.username}</p>:<p>text</p>}
					<div className="navbar-div">
						<Link className="link-button" to="/account/game">Game</Link>
						<Link className="link-button" to="/account/highscore">Highscore</Link>
						<button className="link-button" onClick={logout}>Logout</button>
					</div>
				</nav>
        </div>
    )
}
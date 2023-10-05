import { useContext, useState } from "react";
import UserContext from "../../user/UserContext";
import Achievements from "../../components/Achievements/Achievements";
import "./HomePage.css"

const HomePage = () => {

    return (
        <div className="page-root">
            <div className="home-page-container">
                <div>

                </div>
                <Achievements />
            </div>
        </div>
    )
}
export default HomePage;
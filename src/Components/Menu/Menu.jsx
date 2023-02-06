import React from "react";
import st from "./Menu.module.css"
import home from "./src/home.svg"
import workouts from "./src/workouts.svg"
import avatar from "./src/avatar.png"
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return(
        <div className={st.menu}>

            <div className={st.avatarArea}>
                <img src={avatar} className={st.avatar} alt={"avatar"}/>
            </div>

            <div className={st.menuItems}>
                <NavLink to={"/"} className={st.menuItem}>
                    <img className={st.itemImage} src={home} alt={"home button"}/>
                </NavLink>

                <NavLink to={"/workouts"} className={st.menuItem}>
                    <img className={st.itemImage} src={workouts} alt={"workouts button"}/>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;
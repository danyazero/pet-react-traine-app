import React from "react";
import st from "./Menu.module.css"
import home from "./src/home.svg"
import workouts from "./src/workouts.svg"
import avatar from "./src/avatar.png"

const Menu = (props) => {
    return(
        <div className={st.menu}>

            <div className={st.avatarArea}>
                <img src={avatar} className={st.avatar} alt={"avatar"}/>
            </div>

            <div className={st.menuItems}>
                <div className={st.menuItem + " " + st.selected}>
                    <img className={st.itemImage} src={home} alt={"home button"}/>
                </div>

                <div className={st.menuItem}>
                    <img className={st.itemImage} src={workouts} alt={"workouts button"}/>
                </div>
            </div>
        </div>
    )
}

export default Menu;
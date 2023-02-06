import React from 'react';
import st from "./Workouts.module.css"

const Workouts = (props) => {
    return(
        <div className={st.content}>
            <div>
                <h1 className={st.headText}>Overview</h1>
            </div>
            <div className={st.addButton}>Add workout</div>
        </div>
    )
};

export default Workouts;
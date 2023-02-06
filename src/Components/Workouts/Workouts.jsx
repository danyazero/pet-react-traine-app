import React from 'react';
import st from "./Workouts.module.css"
import WorkoutCard from "../WorkoutCard/WorkoutCard";

const Workouts = ({workouts, ...props}) => {

    const workoutsArray = workouts.map((el, id) => <WorkoutCard name={el.name} exercises={el.exercises}/>)

    return(
        <div className={st.content}>
            <div>
                <h1 className={st.headText}>Overview</h1>
            </div>
            <div className={st.addButton}>Add workout</div>

            {workoutsArray}
        </div>
    )
};

export default Workouts;
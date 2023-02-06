import React from 'react';
import st from "./Workout.module.css"
import Exercises from "./Exercises/Exercises";

const WorkoutCard = ({name, ...props}) => {
    const exercises = props.exercises.map((el, id) => <Exercises name={el.name} weight={el.weight} count={el.count} sets={el.sets}/>)
    return(
        <div className={st.workoutCard}>
            <h3 className={st.workoutName}>{name}</h3>
            {exercises}
        </div>
    )
};

export default WorkoutCard;
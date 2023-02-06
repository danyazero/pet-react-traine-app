import React from 'react';
import st from "./Exercises.module.css"

const Exercises = ({name, weight, count, sets, ...props}) => {
    return(
    <div className={st.exercisesItem}>
        <p className={st.setsText}>{sets}</p>
        <p className={st.nameText}>{name}</p>
        <p className={st.weightAndRepstext}>{weight}kg x {count} reps</p>
    </div>
    )
};

export default Exercises;
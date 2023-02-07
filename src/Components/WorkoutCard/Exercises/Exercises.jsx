import React from 'react';
import st from "./Exercises.module.css"
import add from "../src/add.svg";
import close from "./../src/close.svg"

const Exercises = ({name, weight, count, sets, ...props}) => {

    function onDeleteButtonClick(){

        props.deleteExercise(props.workoutId, props.id)
    }

    function isEdit(){
        if (props.isEdit){
            return <img className={st.addImage} onClick={onDeleteButtonClick} src={close} alt={"add button"}/>;
        }
    }

    return(
        <div className={st.exercisesItem}>
            <p className={st.setsText}>{sets}</p>
            <p className={st.nameText}>{name}</p>
            <p className={st.weightAndRepstext}>{weight}kg x {count} reps</p>
            {isEdit()}
        </div>
    )
};

export default Exercises;
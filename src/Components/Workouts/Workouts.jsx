import React from 'react';
import st from "./Workouts.module.css"
import WorkoutCard from "../WorkoutCard/WorkoutCard";

const Workouts = ({workouts, ...props}) => {

    const workoutsArray = workouts.map((el, id) => <WorkoutCard id={id} deleteExercise={props.deleteExercise} editWorkout={props.editWorkout} addExercise={props.addExercise} name={el.name} isEdit={el.isEdit} key={id} exercises={el.exercises}/>)

    return(
        <div className={st.content}>
            <div>
                <h1 className={st.headText}>Workouts</h1>
            </div>
            <div onClick={props.addNewWorkout} className={st.addButton}>Add workout</div>

            {workoutsArray}
        </div>
    )
};

export default Workouts;
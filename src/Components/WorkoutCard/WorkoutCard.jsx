import React, {useState} from 'react';
import st from "./Workout.module.css"
import Exercises from "./Exercises/Exercises";
import edit from "./src/edit.svg"
import {Field, reduxForm} from "redux-form";
import {required} from "../../Helper/Validator";
import add from "./src/add.svg"

const WorkoutCard = ({name, ...props}) => {

    const [setsField, setSetsField] = useState("")
    const [nameField, setNameField] = useState("")
    const [weightField, setWeightField] = useState("")
    const [repsField, setRepsField] = useState("")

    const onSubmit = () =>{
        let data = {
            name: nameField,
            weight: weightField,
            count: repsField,
            sets: setsField
        }
        props.addExercise(props.id, data)
        setSetsField("")
        setRepsField("")
        setWeightField("")
        setNameField("")
    }

    function editMode() {
        if (props.isEdit) {
            return (
                    <div className={st.editArea}>
                        <input className={st.setsInput} placeholder="Sets" value={setsField} onChange={(event)=>{
                            setSetsField(event.target.value)
                        }}/>

                        <input className={st.nameInput} value={nameField} onChange={(e) => setNameField(e.target.value)} placeholder="Name"/>
                        <div className={st.repsAndWeightArea}>
                            <input className={st.setsInput} value={weightField} onChange={e => setWeightField(e.target.value)} placeholder="Weight"/>
                            <input className={st.setsInput} value={repsField} onChange={e => setRepsField(e.target.value)} placeholder="Reps"/>
                            <button onClick={onSubmit} className={st.addButton}><img className={st.addImage} src={add} alt={"add button"}/>
                            </button>
                        </div>
                    </div>
            )
        }
    }

    const exercises = props.exercises.map((el, id) => <Exercises key={id} name={el.name} weight={el.weight}
                                                                 count={el.count} sets={el.sets}/>)
    return (
        <div className={st.workoutCard}>
            <div className={st.headerArea}>
                <h3 className={st.workoutName}>{name}</h3>
                <div className={st.editButton}>
                    <p className={st.editButtonText}>Edit</p>
                    <img className={st.editImage} src={edit} alt={"edit workout"}/>
                </div>
            </div>
            {exercises}


            {editMode()}

        </div>
    )
};
let WorkoutCardHOC = reduxForm({form: "workoutEditForm"})(WorkoutCard)
export default WorkoutCardHOC;
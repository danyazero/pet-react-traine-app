import {connect} from "react-redux";
import Workouts from "./Workouts";
import {addExerciseToWorkout, editWorkout, editWorkoutReducer} from "../../Redux/workoutsPageReducer";

function mapStateToProps(state){
    return{
        workouts: state.workoutsReducers.workouts
    }
}

function mapDispatchToProps(dispatch){
    return{
        addExercise(id, array){
            dispatch(addExerciseToWorkout({id, array}))
        },
        editWorkout(id, status){
            dispatch(editWorkoutReducer({id, status}))
        }
    }
}

export const WorkoutsContainer = connect(mapStateToProps, mapDispatchToProps)(Workouts)
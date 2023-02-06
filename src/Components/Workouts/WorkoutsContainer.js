import {connect} from "react-redux";
import Workouts from "./Workouts";
import {addExerciseToWorkout} from "../../Redux/workoutsPageReducer";

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

    }
}

export const WorkoutsContainer = connect(mapStateToProps, mapDispatchToProps)(Workouts)
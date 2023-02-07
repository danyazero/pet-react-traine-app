import {connect} from "react-redux";
import Workouts from "./Workouts";
import {
    addExerciseToWorkout,
    deleteExerciseToWorkout,
    editWorkout,
    editWorkoutReducer
} from "../../Redux/workoutsPageReducer";

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
        },
        deleteExercise(workoutId, exerciseId){
            dispatch(deleteExerciseToWorkout({workoutId, exerciseId}))
        }
    }
}

export const WorkoutsContainer = connect(mapStateToProps, mapDispatchToProps)(Workouts)
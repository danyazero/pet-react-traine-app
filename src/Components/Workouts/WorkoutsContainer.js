import {connect} from "react-redux";
import Workouts from "./Workouts";
import {
    addExerciseToWorkout, addNewWorkoutReducer,
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
        editWorkout(id, status, workoutName){
            dispatch(editWorkoutReducer({id, status, workoutName}))
        },
        deleteExercise(workoutId, exerciseId){
            dispatch(deleteExerciseToWorkout({workoutId, exerciseId}))
        },
        addNewWorkout(){
            dispatch(addNewWorkoutReducer())
        }
    }
}

export const WorkoutsContainer = connect(mapStateToProps, mapDispatchToProps)(Workouts)
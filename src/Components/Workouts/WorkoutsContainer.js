import {connect} from "react-redux";
import Workouts from "./Workouts";

function mapStateToProps(state){
    return{
        workouts: state.workoutsReducers.workouts
    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}

export const WorkoutsContainer = connect(mapStateToProps, mapDispatchToProps)(Workouts)
import {createSlice} from "@reduxjs/toolkit";

const workoutsPageReducer = createSlice({
    name: "workoutsPageReducer",
    initialState: {
        isLoading: false,
        addWorkoutButtonClicked: false,
        workouts: [
            {
                name: "My usual",
                isEdit: true,
                exercises: [
                    {name: "Push up", weight: 0, count: 12, sets: 4},
                    {name: "Bicep Curl", weight: 8, count: 6, sets: 4},
                ]
            },
            {
                name: "Second workout",
                isEdit: false,
                exercises: [
                    {name: "Push up", weight: 0, count: 12, sets: 4},
                    {name: "Bicep Curl", weight: 12, count: 6, sets: 4},
                    {name: "Floor press", weight: 12, count: 12, sets: 4},
                    {name: "Triceps Extension", weight: 12, count: 8, sets: 4},
                ]
            }
        ]
    },
    reducers: {
        addExerciseToWorkout(state, action){
            state.workouts[action.payload.id].exercises.push(action.payload.array)

            return state;
        },
        editWorkoutReducer(state, action){
            state.workouts[action.payload.id].isEdit = action.payload.status;

            return state;
        }
    }
})

export default workoutsPageReducer.reducer;
export const {addExerciseToWorkout, editWorkoutReducer} = workoutsPageReducer.actions;
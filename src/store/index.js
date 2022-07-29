import { configureStore} from '@reduxjs/toolkit'
import counter from "./counterSlice"
import authReduser from './authSlice'








// const counterReducer = (state = initState ,action ) => {
//     if (action.type === "increase"){
//         return {...state ,value: state.value + action.paylode}
//     }
//     if (action.type === "decrease"){
//         return {...state ,value: state.value - action.paylode}
//     }
    
//     if (action.type === "toggelCounter"){
//         console.log(!state.showCounter);
//         return { ...state, showCounter: !state.showCounter}
//     }
//     return state
// }


const store = configureStore({
    reducer: {
        counter, 
        auth: authReduser
    } 
})
export default store
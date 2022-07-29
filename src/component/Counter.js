import React, {Fragment, useEffect, useCallback} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { increase, decrease } from '../store/counterSlice';
import {logIn, logout} from '../store/authSlice';


const Counter = () => {

  const globalState = useSelector( (state) => {
    return state
  } );
  const dispatch = useDispatch();
  // const {increase, decrease} = counterAction;
  const counterHandler = useCallback (
    (type, value) => {
    if(type === "increase"){
      dispatch(increase(value))
    }else{
      dispatch(decrease(value))
      
    }
  },[dispatch])
  
  // useEffect( () =>{
  //   dispatch(increase(10))


  // },[dispatch] )
  
 
  


  // const {logIn, logout} = authSlice.actions
  const isLoged = globalState.auth.isLogedIn;
  const loginHandler = (status) => {
      if(isLoged){
        dispatch(logout())
      }else{
        dispatch(logIn())
      }
  }

    // const dispatch = useDispatch()

    // // useEffect ( () => {
    // //   return dispatch({type: "increase", paylode:4})},)
  
  
    
    // const counterState = useSelector( ( state ) => {
    //   return (
    //     {
    //       value: state.value,
    //       showCounter: state.showCounter
    //     }
    //   )
   
    // })
    // // const counterState = useSelector( ( state ) => {
   
    // //   return state.value
    // // })
    // // const toggelHandler = useSelector( ( state ) => {
   
    // //   return state.showCounter
    // // })
    // const increase = () => {
    //   dispatch({type: "increase", paylode:4})
  
    // }
    // const decrease = () => {
      
      
    //   dispatch({type: "decrease", paylode: 2})
  
    // }
    // const toggelCounter = () => {
    //   dispatch({type: "toggelCounter" })
    // }
  
    
    return (
      <div className='App'>
        <h1>Hello Redux Basic</h1>
        {
          isLoged &&
(          <Fragment>
          <div className='counter'>Counter: {globalState.counter.value} </div>
     <div>
       <button className='btn' onClick={() => counterHandler("increase", 1)}>increase + </button>
       <button className='btn' onClick={() => counterHandler("decrease", 1)}>decrease -</button>
     </div>
     
     </Fragment>)
        }

  
      <div>
        <button className='btn' 
        onClick={() => loginHandler(isLoged) }>{isLoged ? "logout" : "login" }
         </button>
      </div>
    </div> 
    )
}

export default Counter
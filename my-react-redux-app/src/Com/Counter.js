import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrementCounter, incrementCounter, ResetCounter } from './Services/Actions_Folder/CounterActions';
export const Counter= () => {
 const count=useSelector(state=>state.count);
 const dispatch=useDispatch();
 const handleIncrement=()=>dispatch(incrementCounter());
 const handleDecrement=()=>dispatch(decrementCounter());
 const handleReset=()=>dispatch(ResetCounter());
 console.log(count);
  return (
    <div>
     <h2>Counter Application</h2>
     <h3>Count:{count}</h3>
     <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleReset}>Reset</button>
     <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

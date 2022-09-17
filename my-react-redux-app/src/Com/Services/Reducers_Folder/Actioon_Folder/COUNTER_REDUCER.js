import React from 'react'
import { DECREMENT, INCREMENT, RESET } from '../../Conts_Folder/Counter_conts'
const initialCounter={
    count:0
}
export const COUNTER_REDUCER = (state=initialCounter,action) => {
 switch(action.type){
    case INCREMENT:
        return{
        ...state,
         count:state.count+1
        }
    break;
    case DECREMENT:
         return{
            ...state,
            count:state.count-1
         }
    break;
    case RESET:
        return{
        ...state,
         count:0
        }
    break;
    default:return state;
 }
}

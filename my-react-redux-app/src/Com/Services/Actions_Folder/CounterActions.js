import React from 'react'
import { DECREMENT, INCREMENT, RESET } from '../Conts_Folder/Counter_conts'

export const incrementCounter = () => {
  return{
    type:INCREMENT
  }
}


export const decrementCounter = () => {
    return{
      type:DECREMENT
    }
  }

  export const ResetCounter = () => {
    return{
      type:RESET
    }
  }
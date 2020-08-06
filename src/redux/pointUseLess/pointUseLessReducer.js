import { ADD_DIED_POINT,ADD_WHITE_POINT } from './pointUserLessTypes';

const initialState = {
  diedPoint: 0,
  whitePoint: 0
}


export const pointUserLessReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADD_DIED_POINT: 
      return{
        ...state,
        diedPoint: action.payload
      }
    case ADD_WHITE_POINT: 
      return{
        ...state,
        whitePoint: action.payload
      }
    default: 
      return state
  }
}
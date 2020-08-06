import { ADD_DIED_POINT,ADD_WHITE_POINT} from './pointUserLessTypes';


export const addDiedPoint = point=>{
  return{
    type: ADD_DIED_POINT,
    payload: point
  }
}

export const addWhitePoint = point=>{
  return{
    type: ADD_WHITE_POINT,
    payload: point
  }
}


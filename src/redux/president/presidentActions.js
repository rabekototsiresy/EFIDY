import { ADD_PRESIDENT,ADD_POINT,SET_WINNER,SET_VALIDATE } from './presidentTypes';

export const addPresident = (fullName)=>{
  return{
    type: ADD_PRESIDENT,
    payload: fullName
  }
}

export const addPoint = (point,index)=>{
  return{
    type: ADD_POINT,
    payload: {
      index: index,
      point: point
    }

  }
}

export const setWinner = globalPoint=>{
  return{
    type: SET_WINNER,
    payload: globalPoint
  }
}

export const setValidate = (id)=>{
  return{
    type: SET_VALIDATE,
    payload:id
  }
}
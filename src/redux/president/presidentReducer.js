import { ADD_PRESIDENT,ADD_POINT,SET_WINNER,SET_VALIDATE } from './presidentTypes';

const initialState = {
  listPresident: [],
}
let lastId = 0;
export const presidentReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADD_PRESIDENT:
      return{
        ...state,
        listPresident: [...state.listPresident,{
          id: ++lastId,
          fullName: action.payload,
          point: 0,
          winner: false,
          validate: false
        }]
      }
    case ADD_POINT: 
      return{
        ...state,
        listPresident: state.listPresident.map( (val,index)=> index == action.payload.index ? {
          id: val.id,
          fullName: val.fullName,
          point: action.payload.point,
          winner: val.winner,
          validate: false
        }: val)
      }
    case SET_WINNER: 
      return{
        ...state,
        listPresident: state.listPresident.map( (val)=> val.point >= action.payload ? {
          id: val.id,
          fullName: val.fullName,
          point: action.payload.point,
          winner: true,
          validate: false
        }: val)

      }
    case SET_VALIDATE: 
      return{
        ...state,
        listPresident: state.listPresident.map( (val)=> val.id == action.payload ? {
          id: val.id,
          fullName: val.fullName,
          point:val.point,
          winner: true,
          validate: true
        }: val)

      }
    default: 
      return state
  }
}
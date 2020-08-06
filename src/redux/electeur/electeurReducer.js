import { ADD_NUMBER_ELECTEUR } from './electeurTypes';

const initalState = {
  numberOfElecteur: 0
}
export const electeurReducer = (state=initalState, action)=>{
  switch(action.type){
    case ADD_NUMBER_ELECTEUR: 
      return{
        ...state,
        numberOfElecteur: action.payload
      }
    default: 
      return state;
  }
}
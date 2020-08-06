import { ADD_NUMBER_ELECTEUR } from './electeurTypes';


export const addNumberElecteur = numberEl =>{
  return{
    type: ADD_NUMBER_ELECTEUR,
    payload: numberEl
  }
}
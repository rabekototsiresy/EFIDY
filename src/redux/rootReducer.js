import { combineReducers } from 'redux';
import { electeurReducer } from './electeur/electeurReducer';
import { presidentReducer } from './president/presidentReducer';
import { pointUserLessReducer  } from './pointUseLess/pointUseLessReducer';

export const rootReducer = combineReducers({
  president: presidentReducer,
  electeur: electeurReducer,
  pointUseLess: pointUserLessReducer
});
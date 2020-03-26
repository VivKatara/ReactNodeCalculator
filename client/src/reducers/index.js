import { combineReducers } from 'redux';
import calculatorReducer from './calculatorReducer.js';

export default combineReducers({
  calculatorState: calculatorReducer,
});

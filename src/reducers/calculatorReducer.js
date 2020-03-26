import {
  CLEAR_CALCULATOR,
  HANDLE_NUMBER,
  HANDLE_OPERATION,
  HANDLE_EQUAL,
} from '../actions/types';

const initialState = {
  previousNumber: 0,
  currentNumber: 0,
  operation: null,
  needNew: true,
};

export default function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_CALCULATOR:
      return {
        previousNumber: action.payload.previousNumber,
        currentNumber: action.payload.currentNumber,
        operation: action.payload.operation,
        needNew: action.payload.needNew,
      };
    case HANDLE_NUMBER:
      return {
        ...state,
        currentNumber: action.payload.currentNumber,
        operation: state.operation,
        needNew: action.payload.hasOwnProperty('needNew')
          ? action.payload.needNew
          : state.needNew,
      };
    case HANDLE_OPERATION:
      return {
        ...state,
        previousNumber: action.payload.previousNumber,
        operation: action.payload.operation,
        needNew: action.payload.needNew,
      };
    case HANDLE_EQUAL:
      return {
        ...state,
        currentNumber: action.payload.currentNumber,
        operation: action.payload.operation,
      };
    default:
      return state;
  }
}

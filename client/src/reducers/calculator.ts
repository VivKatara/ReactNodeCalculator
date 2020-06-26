import {
  CLEAR_CALCULATOR,
  HANDLE_NUMBER,
  HANDLE_OPERATION,
  HANDLE_EQUAL,
} from "../types/actions";
import { Calculator } from "../types/Calculator";
import { CalculatorActionTypes } from "../types/actions";

const initialState: Calculator = {
  numbers: [],
  operations: [],
  currentNumber: 0,
};

export default function calculatorReducer(
  state = initialState,
  action: CalculatorActionTypes
): Calculator {
  switch (action.type) {
    case CLEAR_CALCULATOR:
      return {
        ...state,
        numbers: action.payload.numbers,
        operations: action.payload.operations,
        currentNumber: action.payload.currentNumber,
      };
    case HANDLE_NUMBER:
      return {
        ...state,
        numbers: action.payload.numbers,
        currentNumber: action.payload.currentNumber,
      };
    case HANDLE_OPERATION:
      return {
        ...state,
        operations: action.payload.operations,
      };
    case HANDLE_EQUAL:
      return {
        ...state,
        numbers: action.payload.numbers,
        operations: action.payload.operations,
        currentNumber: action.payload.currentNumber,
      };
    default:
      return state;
  }
}

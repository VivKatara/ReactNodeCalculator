import {
  CLEAR_CALCULATOR,
  HANDLE_NUMBER,
  HANDLE_OPERATION,
  HANDLE_EQUAL,
} from './types';

export const clearCalculator = () => dispatch => {
  const action = {
    type: CLEAR_CALCULATOR,
    payload: {
      previousNumber: 0,
      currentNumber: 0,
      operation: null,
      needNew: true,
    },
  };
  dispatch(action);
};

export const handleCalculatorNumber = data => dispatch => {
  const action = {
    type: HANDLE_NUMBER,
    payload: {
      currentNumber: data.currentNumber,
    },
  };
  if (data.hasOwnProperty('needNew')) {
    action.payload.needNew = data.needNew;
  }
  dispatch(action);
};

export const handleCalculatorOperation = data => dispatch => {
  const action = {
    type: HANDLE_OPERATION,
    payload: {
      previousNumber: data.previousNumber,
      operation: data.operation,
      needNew: data.needNew,
    },
  };
  dispatch(action);
};

export const handleCalculatorEqual = data => dispatch => {
  const action = {
    type: HANDLE_EQUAL,
    payload: {
      currentNumber: data.currentNumber,
      operation: data.operation,
    },
  };
  dispatch(action);
};

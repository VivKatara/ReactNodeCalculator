import axios from 'axios';
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
      numbers: [],
      operations: [],
      currentNumber: 0,
    },
  };
  dispatch(action);
};

export const handleCalculatorNumber = data => dispatch => {
  const action = {
    type: HANDLE_NUMBER,
    payload: {
      numbers: data.numbers,
      currentNumber: data.currentNumber,
    },
  };
  dispatch(action);
};

export const handleCalculatorOperation = data => dispatch => {
  const action = {
    type: HANDLE_OPERATION,
    payload: {
      operations: data.operations,
    },
  };
  dispatch(action);
};

export const handleCalculatorEqual = data => dispatch => {
  axios
    .post('/equal', {
      numbers: data.numbers,
      operations: data.operations,
    })
    .then(res => {
      const action = {
        type: HANDLE_EQUAL,
        payload: {
          numbers: [res.data.value],
          operations: [],
          currentNumber: res.data.value,
        },
      };
      dispatch(action);
    });
};

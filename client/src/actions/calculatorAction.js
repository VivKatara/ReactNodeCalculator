import axios from 'axios';
import {
  CLEAR_CALCULATOR,
  HANDLE_NUMBER,
  HANDLE_OPERATION,
  HANDLE_EQUAL,
} from './types';

export const clearCalculator = () => ({
  type: CLEAR_CALCULATOR,
  payload: {
    numbers: [],
    operations: [],
    currentNumber: 0,
  },
});

export const calculatorNumber = (data) => ({
  type: HANDLE_NUMBER,
  payload: {
    numbers: data.numbers,
    currentNumber: data.currentNumber,
  },
});

export const calculatorOperation = (data) => ({
  type: HANDLE_OPERATION,
  payload: {
    operations: data.operations,
  },
});

export const calculatorEqual = (data) => ({
  type: HANDLE_EQUAL,
  payload: {
    numbers: [data.value],
    operations: [],
    currentNumber: data.value,
  },
});

export const startClearCalculator = () => (dispatch) => {
  dispatch(clearCalculator());
};

export const handleCalculatorNumber = (data) => (dispatch) => {
  dispatch(calculatorNumber(data));
};

export const handleCalculatorOperation = (data) => (dispatch) => {
  dispatch(calculatorOperation(data));
};

export const handleCalculatorEqual = (data) => (dispatch) => {
  axios
    .post('/equal', {
      numbers: data.numbers,
      operations: data.operations,
    })
    .then((res) => {
      dispatch(calculatorEqual(res.data));
    });
};

import axios from 'axios';
import {
  CLEAR_CALCULATOR,
  HANDLE_NUMBER,
  HANDLE_OPERATION,
  HANDLE_EQUAL,
} from '../types/actions';
import { AppActions } from '../types/actions';
import { Calculator } from '../types/Calculator';
import { Dispatch } from 'redux';

export const clearCalculator = (): AppActions => ({
  type: CLEAR_CALCULATOR,
  payload: {
    numbers: [],
    operations: [],
    currentNumber: 0,
  },
});

export const calculatorNumber = (data: {
  numbers: Array<number>;
  currentNumber: number;
}): AppActions => ({
  type: HANDLE_NUMBER,
  payload: {
    numbers: data.numbers,
    currentNumber: data.currentNumber,
  },
});

export const calculatorOperation = (data: {
  operations: Array<string>;
}): AppActions => ({
  type: HANDLE_OPERATION,
  payload: {
    operations: data.operations,
  },
});

export const calculatorEqual = (data: Calculator): AppActions => ({
  type: HANDLE_EQUAL,
  payload: {
    numbers: data.numbers,
    operations: data.operations,
    currentNumber: data.currentNumber,
  },
});

export const startClearCalculator = () => (dispatch: Dispatch<AppActions>) => {
  dispatch(clearCalculator());
};

export const handleCalculatorNumber = (data: {
  numbers: Array<number>;
  currentNumber: number;
}) => (dispatch: Dispatch<AppActions>) => {
  dispatch(calculatorNumber(data));
};

export const handleCalculatorOperation = (data: {
  operations: Array<string>;
}) => (dispatch: Dispatch<AppActions>) => {
  dispatch(calculatorOperation(data));
};

export const handleCalculatorEqual = (data: Calculator) => (
  dispatch: Dispatch<AppActions>
) => {
  axios
    .post('/equal', {
      numbers: data.numbers,
      operations: data.operations,
    })
    .then((res) => {
      const numbers: Array<number> = [res.data.value];
      const operations: Array<string> = [];
      const currentNumber: number = res.data.value;
      const actionData = { numbers, operations, currentNumber };
      dispatch(calculatorEqual(actionData));
    });
};

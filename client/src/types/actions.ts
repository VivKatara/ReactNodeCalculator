import { Calculator } from './Calculator';

export const CLEAR_CALCULATOR = 'CLEAR_CALCULATOR';
export const HANDLE_NUMBER = 'HANDLE_NUMBER';
export const HANDLE_OPERATION = 'HANDLE_OPERATION';
export const HANDLE_EQUAL = 'HANDLE_EQUAL';

export interface ClearCalculatorAction {
  type: typeof CLEAR_CALCULATOR;
  payload: Calculator;
}

export interface HandleNumberAction {
  type: typeof HANDLE_NUMBER;
  payload: {
    numbers: Array<number>;
    currentNumber: number;
  };
}

export interface HandleOperationAction {
  type: typeof HANDLE_OPERATION;
  payload: {
    operations: Array<string>;
  };
}

export interface HandleEqualAction {
  type: typeof HANDLE_EQUAL;
  payload: Calculator;
}

// This is an aggregation of Calculator Action Types
export type CalculatorActionTypes =
  | ClearCalculatorAction
  | HandleNumberAction
  | HandleOperationAction
  | HandleEqualAction;

// This is an aggregation of aggregated action types
export type AppActions = CalculatorActionTypes;

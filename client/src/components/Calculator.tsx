import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import {
  startClearCalculator,
  handleCalculatorNumber,
  handleCalculatorOperation,
  handleCalculatorEqual,
} from '../actions/calculator';
import { AppState } from '../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/actions';
import { bindActionCreators } from 'redux';

interface CalculatorProps {}

interface CalculatorState {}

type Props = CalculatorProps & LinkStateProps & LinkDispatchProps;

class Calculator extends React.Component<Props, CalculatorState> {
  constructor(props: Props) {
    super(props);
    this.handleClear = this.handleClear.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }

  getOperations() {
    const operations: Array<string> = ['+', '-', '*', '/'];
    return operations.map((op, index) => {
      return (
        <Operation key={index} value={op} onClick={this.handleOperation}>
          {op}
        </Operation>
      );
    });
  }

  getNumbers() {
    const numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return numbers.map((num, index) => {
      return (
        <Number key={index} onClick={() => this.handleNumber(num)}>
          {num}
        </Number>
      );
    });
  }

  handleClear() {
    this.props.startClearCalculator();
  }

  handleNumber(num: number) {
    const newData: any = {};
    if (this.props.numbers.length === this.props.operations.length) {
      newData.currentNumber = num;
      newData.numbers = [...this.props.numbers, num];
    } else {
      newData.currentNumber = this.props.currentNumber * 10 + num;
      newData.numbers = [
        ...this.props.numbers.splice(0, this.props.numbers.length - 1),
        newData.currentNumber,
      ];
    }
    this.props.handleCalculatorNumber(newData);
  }

  handleOperation(event: any) {
    if (this.props.numbers.length > this.props.operations.length) {
      const newData = {
        operations: [...this.props.operations, event.target.value],
      };
      this.props.handleCalculatorOperation(newData);
    }
  }

  handleEqual() {
    if (
      this.props.numbers.length > this.props.operations.length &&
      this.props.operations.length > 0
    ) {
      const newData = {
        numbers: this.props.numbers,
        operations: this.props.operations,
      };
      this.props.handleCalculatorEqual(newData);
    }
  }

  render() {
    return (
      <CalculatorDisplay>
        <NumberDisplay>{this.props.currentNumber}</NumberDisplay>
        <Clear onClick={this.handleClear}>Clear</Clear>
        <NumbersAndOperations>
          <NumberRow>{this.getNumbers()}</NumberRow>
          <OperationRow>{this.getOperations()}</OperationRow>
        </NumbersAndOperations>
        <Equal onClick={this.handleEqual}>=</Equal>
      </CalculatorDisplay>
    );
  }
}

interface LinkStateProps {
  numbers: Array<number>;
  operations: Array<string>;
  currentNumber: number;
}

interface LinkDispatchProps {
  startClearCalculator: () => void;
  handleCalculatorNumber: (data: {
    numbers: Array<number>;
    currentNumber: number;
  }) => void;
  handleCalculatorOperation: (data: { operations: Array<string> }) => void;
  handleCalculatorEqual: (data: {
    numbers: Array<number>;
    operations: Array<string>;
  }) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: CalculatorProps
): LinkStateProps => ({
  numbers: state.calculatorState.numbers,
  operations: state.calculatorState.operations,
  currentNumber: state.calculatorState.currentNumber,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: CalculatorProps
): LinkDispatchProps => ({
  startClearCalculator: bindActionCreators(startClearCalculator, dispatch),
  handleCalculatorNumber: bindActionCreators(handleCalculatorNumber, dispatch),
  handleCalculatorOperation: bindActionCreators(
    handleCalculatorOperation,
    dispatch
  ),
  handleCalculatorEqual: bindActionCreators(handleCalculatorEqual, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

const CalculatorDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  margin-left: 20px;
  margin-top: 20px;
`;

const Clear = styled.button`
  width: 200px;
`;
const NumberDisplay = styled.div`
  height: 20px;
  background-color: #4a1b18;
  text-align: right;
  padding-right: 10px;
  color: white;
`;

const NumbersAndOperations = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
`;
const NumberRow = styled.div`
  width: 125px;
  height: 50px;
  margin-right: 25px;
`;

const Number = styled.button`
  width: 25px;
  height: 20px;
`;

const OperationRow = styled.div`
  width: 50px;
`;

const Operation = styled.button`
  width: 25px;
  height: 20px;
  background-color: #d90d4b;
  color: white;
`;

const Equal = styled.button`
  width: 200px;
`;

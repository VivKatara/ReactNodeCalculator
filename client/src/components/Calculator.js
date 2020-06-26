import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import {
  startClearCalculator,
  handleCalculatorNumber,
  handleCalculatorOperation,
  handleCalculatorEqual,
} from '../actions/calculatorAction';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClear = this.handleClear.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }

  getOperations() {
    const operations = ['+', '-', '*', '/'];
    return operations.map((op, index) => {
      return (
        <Operation key={index} value={op} onClick={this.handleOperation}>
          {op}
        </Operation>
      );
    });
  }

  getNumbers() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  handleNumber(num) {
    const newData = {};
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

  handleOperation(event) {
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

Calculator.propTypes = {
  startClearCalculator: PropTypes.func.isRequired,
  handleCalculatorNumber: PropTypes.func.isRequired,
  handleCalculatorOperation: PropTypes.func.isRequired,
  handleCalculatorEqual: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operations: PropTypes.array.isRequired,
  currentNumber: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  numbers: state.calculatorState.numbers,
  operations: state.calculatorState.operations,
  currentNumber: state.calculatorState.currentNumber,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  startClearCalculator: () => dispatch(startClearCalculator()),
  handleCalculatorNumber: (data) => dispatch(handleCalculatorNumber(data)),
  handleCalculatorOperation: (data) =>
    dispatch(handleCalculatorOperation(data)),
  handleCalculatorEqual: (data) => dispatch(handleCalculatorEqual(data)),
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

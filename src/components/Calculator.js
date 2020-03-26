import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import {
  clearCalculator,
  handleCalculatorNumber,
} from '../actions/calculatorAction';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     previousNumber: 0,
    //     currentNumber: 0,
    //     operation: null,
    //     needNew: true,
    //   };

    this.handleClear = this.handleClear.bind(this);
    // this.handleOperation = this.handleOperation.bind(this);
    // this.handleNumber = this.handleNumber.bind(this);
    // this.handleEqual = this.handleEqual.bind(this);
  }

  // getOperations() {
  //   const operations = ['+', '-', '*', '/'];
  //   return operations.map((op, index) => {
  //     return (
  //       <Operation key={index} value={op} onClick={this.handleOperation}>
  //         {op}
  //       </Operation>
  //     );
  //   });
  // }

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
    // this.setState({
    //   previousNumber: 0,
    //   currentNumber: 0,
    //   operation: null,
    //   needNew: true,
    // });
    this.props.clearCalculator();
    console.log(this.props);
  }

  // handleOperation(event) {
  //   if (!this.state.needNew) {
  //     this.setState({
  //       previousNumber: this.state.currentNumber,
  //       operation: event.target.value,
  //       needNew: true,
  //     });
  //   }
  // }

  handleNumber(num) {
    const newData = {};
    if (this.props.needNew) {
      newData.currentNumber = num;
      newData.needNew = false;
    } else {
      newData.currentNumber = this.props.currentNumber * 10 + num;
    }
    this.props.handleCalculatorNumber(newData);

    // if (this.state.needNew) {
    //   this.setState({ currentNumber: num, needNew: false });
    // } else {
    //   this.setState({
    //     currentNumber: this.state.currentNumber * 10 + num,
    //   });
    // }
  }

  // handleEqual() {
  //   if (this.state.operation === '+') {
  //     this.setState({
  //       currentNumber: this.state.previousNumber + this.state.currentNumber,
  //       operation: null,
  //     });
  //   } else if (this.state.operation === '-') {
  //     this.setState({
  //       currentNumber: this.state.previousNumber - this.state.currentNumber,
  //       operation: null,
  //     });
  //   } else if (this.state.operation === '*') {
  //     this.setState({
  //       currentNumber: this.state.previousNumber * this.state.currentNumber,
  //       operation: null,
  //     });
  //   } else if (this.state.operation === '/') {
  //     this.setState({
  //       currentNumber: this.state.previousNumber / this.state.currentNumber,
  //       operation: null,
  //     });
  //   } else {
  //     // Here, this.state.operation must be null
  //   }
  // }

  render() {
    console.log('HERE');
    console.log(this.props);

    return (
      <CalculatorDisplay>
        <NumberDisplay>{this.props.currentNumber}</NumberDisplay>
        <Clear onClick={this.handleClear}>Clear</Clear>
        <NumbersAndOperations>
          <NumberRow>{this.getNumbers()}</NumberRow>
          {/* <OperationRow>{this.getOperations()}</OperationRow> */}
        </NumbersAndOperations>
        {/* <Equal onClick={this.handleEqual}>=</Equal> */}
      </CalculatorDisplay>
    );
  }
}

Calculator.propTypes = {
  clearCalculator: PropTypes.func.isRequired,
  previousNumber: PropTypes.number.isRequired,
  currentNumber: PropTypes.number.isRequired,
  operation: PropTypes.string,
  needNew: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  previousNumber: state.calculatorState.previousNumber,
  currentNumber: state.calculatorState.currentNumber,
  operation: state.calculatorState.operation,
  needNew: state.calculatorState.needNew,
});

export default connect(mapStateToProps, {
  clearCalculator,
  handleCalculatorNumber,
})(Calculator);

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

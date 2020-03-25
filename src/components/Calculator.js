import React from 'react'
import Display from "./Display"
import Button from "react-bootstrap/Button"

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            previousNumber: 0,
            currentNumber: 0,
            operation: null,
            needNew: true
        }

        this.handleClear = this.handleClear.bind(this)
        this.handleOperation = this.handleOperation.bind(this)
        this.handleNumber = this.handleNumber.bind(this)
        this.handleEqual = this.handleEqual.bind(this)
    }

    handleClear() {
        this.setState({
            previousNumber: 0,
            currentNumber: 0,
            operation: null,
            needNew: true
        })
    }

    handleOperation(event) {
        if (!this.state.needNew) {
            this.setState({
                previousNumber: this.state.currentNumber,
                operation: event.target.value,
                needNew: true
            })
        }
    }

    handleNumber(num) {
        if (this.state.needNew) {
            this.setState({currentNumber: num, needNew: false})
        } else {
            this.setState({currentNumber: (this.state.currentNumber * 10) + num})
        }
    }

    handleEqual() {
        if (this.state.operation === "+") {
            this.setState({currentNumber: this.state.previousNumber + this.state.currentNumber, operation: null})
        } else if (this.state.operation === "-") {
            this.setState({currentNumber: this.state.previousNumber - this.state.currentNumber, operation: null})
        } else if (this.state.operation === "*") {
            this.setState({currentNumber: this.state.previousNumber * this.state.currentNumber, operation: null})
        } else if (this.state.operation === "/") {
            this.setState({currentNumber: this.state.previousNumber / this.state.currentNumber, operation: null})
        } else {
            // Here, this.state.operation must be null
        }
    }

    getOperations() {
        const operations = ["+", "-", "*", "/"]
        return operations.map((op, index) => {
            return <Button key={index} value={op} onClick={this.handleOperation}>{op}</Button>
        })
    }

    getNumbers() {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        return numbers.map((num, index) => {
            return <Button key={index} onClick={() => this.handleNumber(num)}>{num}</Button>
        })
    }


    render() {

        console.log(this.state)

        return (
            <div className="Calculator">
                <div className="numberDisplay">
                    <Display total={this.state.currentNumber}/>
                </div>
                <div className="clearButton">
                    <Button onClick={this.handleClear}>Clear</Button>
                </div>
                <div className="numbersAndOperations">
                    <div className="Operations">
                        {this.getOperations()}
                    </div>
                    <div className="Numbers">
                        {this.getNumbers()}
                    </div>
                </div>
                <div className="equals">
                    <Button onClick={this.handleEqual}>=</Button>
                </div>
            </div>
        )
    }

}

export default Calculator
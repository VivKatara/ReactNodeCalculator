import React from 'react'
import Display from "./Display"

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            runningSum: 0
        }
    }
    render() {
        return (
            <div className="Calculator">
                <div className="NumberDisplay">
                    <Display total={this.state.runningSum}/>
                </div>
            </div>
        )
    }

}

export default Calculator
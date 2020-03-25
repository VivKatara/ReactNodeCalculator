import React from 'react'

class Display extends React.Component {
    render () {
        console.log(this.props)
        return (
            <h1>{this.props.total}</h1>
        )
    }
}

export default Display
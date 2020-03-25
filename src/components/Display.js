import React from 'react'
import styled from '@emotion/styled'

export default class Display extends React.Component {
    render () {
        return (
            <Header>{this.props.total}</Header>
        )
    }
}

const Header = styled.h1`
    color: black
`
import React from 'react';
import styled from '@emotion/styled';

interface Props {
  total: number;
}

interface State {}

export default class Display extends React.Component<Props, State> {
  render() {
    return <Header>{this.props.total}</Header>;
  }
}

const Header = styled.h1`
  color: black;
`;

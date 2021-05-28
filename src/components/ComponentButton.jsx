import React from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  margin-left: 2em;
  position: relative;
`;
const Paragraph = styled.p`
  color: orange;
  padding-left: 2.5rem;
`;
const Button = styled.button`
  margin: 0 0 0.5em 0.5em;
  padding: 1.125em;
  border: none;
  background-color: #ebadad;
`;

export default class ComponentButton extends React.Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    );
  }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Logo from '../Logo';

const Wrapper = styled.header`
  display: flex;
  max-width: 800px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: sans-serif;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo />
          <Title>Code For Dallas</Title>
      </Wrapper>
    );
  }
}

export default Header;

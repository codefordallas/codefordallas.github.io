import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: block;
  background-color: #6FACD5;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-family: sans-serif;
  color: white;
`;

const Text = styled.p`
  color: white;
`;

class Mission extends Component {
  render() {
    return (
      <Wrapper>
          <Heading>Mission Statement</Heading>
          <Text>We're just trying to make the world a better place and come up with great mission statements!</Text>
      </Wrapper>
    );
  }
}

export default Mission;

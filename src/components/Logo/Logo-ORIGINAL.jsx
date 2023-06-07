import React, { Component } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const Image = styled.img`
  max-width: 200px;
`;

class Logo extends Component {
  render() {
    return <Image src="./static/images/logo.png" />;
  }
}

export default Logo;

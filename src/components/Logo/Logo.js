import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import styled from 'styled-components';
// import temp from '../../temp.png';  // from src main folder
// import logo from './temp.png'  // local folder

const Image = styled.img`
  max-width: 75px;
`;

class Logo extends Component {
  render() {
    return (
      // <Image src="./static/images/logo.png" />
      <div className="header-logo">
        {/* <img 
            className="site-logo" 
            src="/IMGs/white.png" 
            alt="Homepage" 
            onClick={scrollToTop}
        />  */}
        {/* <Image src={logo} /> */}
        <Image src="/logo.png" />
      </div>
    );
  }
};

export default Logo;

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import skyline from 'assets/images/dallas_skyline.jpg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>At the intersection of technology and government.</h1>
        <h4>We're a nonprofit with the mission to unite developers, designers, and city staff for the good of all.</h4>
        {/* <h4>We're volunteer-led civic technology organization that brings together developers, designers, data enthusiasts and city staff.</h4> */}
        <Button as={AnchorLink} href="#about">
          Learn more
        </Button>
      </Details>
      <Thumbnail>
        <img src={skyline} alt="City of Dallas SVG" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);

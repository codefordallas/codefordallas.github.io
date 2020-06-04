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
        <h1>We are Code for Dallas</h1>
        <h4>A volunteer-led civic technology organization that brings together developers, designers, data enthusiasts and city staff.</h4>
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

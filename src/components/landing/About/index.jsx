import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const About = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Details>
        <h1>Who We Are</h1>
        <p>
        Our mission is to harness the digital era to make government work for the people, by the people! Our focus is on making the biggest impact on the needs of our community and advocating for open government and open data.
        </p>
        {/* <Button as={AnchorLink} href="#contact">
          Hire me
        </Button> */}
      </Details>
    </SkillsWrapper>
  </Wrapper>
);

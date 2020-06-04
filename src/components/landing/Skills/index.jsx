import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Join Us!</h1>
        <p>
          Want to get involved with Code for Dallas?
        </p>
        <Button as={AnchorLink} href="#contact">
          Slack
        </Button>
        <Button as={AnchorLink} href="#contact">
          Meetup
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);

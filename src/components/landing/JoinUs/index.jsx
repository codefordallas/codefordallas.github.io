import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, Button } from './styles';
import slack from 'assets/images/slack-logo.png';
import meetup from 'assets/images/meetup-logo.svg';

export const JoinUs = () => (
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
        <a target="_blank" href="https://join.slack.com/t/code-for-dallas/shared_invite/zt-ewhirc6r-rJEECLn318yHDZ0ck5fleA">
          <Button style={{marginRight: "10px"}}>
          <img src={slack} alt="slack logo" style={{height: "100%"}} />
        </Button>
        </a>
        <a target="_blank" href="https://www.meetup.com/Code-for-Dallas/">
          <Button>
            <img src={meetup} alt="meetup logo" style={{height: "100%"}} />
        </Button>
        </a>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);

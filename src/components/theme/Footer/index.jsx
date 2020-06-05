import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Let's put a slogan here.</h2>
        <p style={{marginBottom: "0.5em"}}>
          © {new Date().getFullYear()} Code for Dallas. All rights reserved
        </p>
        <p>
          Code for Dallas is a brigade of <a href="https://www.codeforamerica.org/">Code for America</a>.
        </p>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);

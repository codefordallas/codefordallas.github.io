import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content } from './styles';
import jg from 'assets/images/jgonzales_from_unsplash.jpg';
import { Thumbnail } from '../Intro/styles';

export const Team = () => (
  <Wrapper as={Container} id="team">
    <h1>Team</h1>
    {/* TODO: modify this part to get team info dynamically */}
    <Grid>
      <PersonCard
        thumbnail= {jg}
        name="John Wayne"
        position="Founder"
        description="Marion Michael Morrison, known professionally as John Wayne and nicknamed Duke, was an American actor, director, producer and Presidential Medal of Freedom recipient. He was among the top box office draws for three decades, famous for his roles in Western films." />
      <PersonCard
      thumbnail={jg}
        name="John Wayne"
        position="Founder"
        description="Marion Michael Morrison, known professionally as John Wayne and nicknamed Duke, was an American actor, director, producer and Presidential Medal of Freedom recipient. He was among the top box office draws for three decades, famous for his roles in Western films." />
      <PersonCard
      thumbnail={jg}
        name="John Wayne"
        position="Founder"
        description="Marion Michael Morrison, known professionally as John Wayne and nicknamed Duke, was an American actor, director, producer and Presidential Medal of Freedom recipient. He was among the top box office draws for three decades, famous for his roles in Western films." />
    </Grid>
  </Wrapper>
);

function PersonCard(props) {
  return (
    <Item as="a" target="_blank" rel="noopener noreferrer">

      <Card>
        <img style={{borderRadius: "50%", width: "50%"}} src={props.thumbnail} alt={"Picture of " + props.name} />
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        <p>{props.description}</p>
      </Card>
    </Item>

  )
}
import React from 'react';
import { Container, Card, SectionHeading } from 'components/common';
import { Wrapper, SmallWrapper, Grid, Item, EventsHeader, AttributeItem, EventImage, FillerDiv} from './styles';
import funinthesun from 'assets/images/funinthesun.jpeg'
import opendataday from 'assets/images/opendataday.png'
import codeforthecount from 'assets/images/codeforthecount.jpeg'
import pinMarker from 'assets/icons/pinMarker.svg';
import calendar from 'assets/icons/calendar.svg';


export const Events = () => (
<Wrapper as={Container} id="events">
    <SectionHeading>Events</SectionHeading>
    <SmallWrapper>
    <EventsHeader> 
      <h2>
        Upcoming Events  
      </h2>
      <hr></hr>
    </EventsHeader>
    <Grid>
        <EventCard
        url="#"
        name="Example Event"
        time="Sunday, March 16 2021"
        location="Dallas, TX"
        description="This is example text for a hypothetical fun event hosted by CFD"
        image={funinthesun}
        />
    </Grid>
    </SmallWrapper>

    <SmallWrapper>
    <EventsHeader> 
      <h2>
        Past Events  
      </h2>
      <hr></hr>
    </EventsHeader>
    <Grid>
    <EventCard
    url="https://www.meetup.com/Code-for-Dallas/events/268938364/"
    name="DFW Open Data Day 2020"
    time="Saturday, March 6 2020"
    location="UNT at Frisco"
    description="An event where we coded for city governments, using open and public data to gain valuable insights and do cool things."
    image={opendataday}
    />
    <EventCard
    url="https://www.meetup.com/Code-for-Dallas/events/267278061/"
    name="Creatives for the Count"
    time="Thursday, January 9 2020"
    location="Dallas, TX"
    description="Creatives from around the Dallas area meet up and create cool resources to promote the 2020 census."
    image={codeforthecount}
    />
    </Grid>
    </SmallWrapper>
</Wrapper>
);

function EventCard(props) {
    return (
      <Item as="a" href={props.url} target="_blank" rel="noopener noreferrer">
  
        <Card>
          {/* <img style={{borderRadius: "50%", width: "50%"}} src={props.thumbnail} alt={"Picture of " + props.name} /> */}
          <h3>{props.name}</h3>
          <AttributeItem>
            <img src={calendar} alt="calendar" />
            {props.time}
          </AttributeItem>
          <AttributeItem>
            <img src={pinMarker} alt="pin marker"/>
            {props.location}
          </AttributeItem>
          <p>{props.description}</p>
          <FillerDiv></FillerDiv>
          <EventImage>
          <img src={props.image}></img>
          </EventImage>
        </Card>
      </Item>
  
    )
  }
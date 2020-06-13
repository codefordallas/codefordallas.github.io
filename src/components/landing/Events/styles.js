import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const SmallWrapper = styled.div`
  padding: 1rem 0;
`;

export const EventsHeader = styled.div`
  text-align: center;
  h2 {
    margin: 0;
    margin: 0 auto;
    color:white;
    background-color: #6FACD5;
    padding: 1em;
    margin-bottom: 2rem;
    border-radius: 2rem;
    min-width: 3em;
    display: inline-block;
  }
  
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  align-items: center;
  justify-items: center;
  p {
    margin-top: 2em;
  }

  // @media (max-width: 960px) {
  //   grid-template-columns: repeat(2, 1fr);
  // }

  @media (max-width: 1328px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  color: inherit;
  position: relative;
  width: 520px;
  display: flex;

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;

export const AttributeItem = styled.div`
margin-bottom: 12px;

img {
  width: 14px;
  margin-right: 12px;
  margin-bottom: 0px;
}
`

export const EventImage = styled.div`
height: 368px;
text-align: center;
position: absolute;
bottom: 30px;
right: 50%;

img {
  max-width: none;
  height: 80%;
  transition: height 0.5s ease-in-out, filter 0.5s ease-in-out;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) 
}

img:hover {
  height: 83.5%;
  filter: brightness(70%);
}
}
`

export const FillerDiv = styled.div`
  height:360px;
  width:100%;
  position:relative;
`
import React from "react";
import styled from "styled-components";
import Teams from "../components/Teams";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
  max-width: 1200px;
`;

const TeamContainer = styled.div`

  min-width: 600px;
  display: inline-flex;
  grid-template-columns: 1fr 1.5fr;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: auto;
  grid-gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    max-width: 500px;
    min-width: 0px;
    grid-gap: 0px;
  }
`;

function About(){
    return(
        <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>About US</TextOne>
        <TextTwo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
            an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum</TextTwo>
      </PageHeadingWrapper>

      <TeamContainer>
      <Teams 
      title="Jane Doe" 
      discription="Some text that describes me lorem ipsum ipsum lorem." 
      image="https://www.w3schools.com/w3images/team1.jpg"/>
      <Teams 
      title="Mike Ross" 
      discription="Some text that describes me lorem ipsum ipsum lorem." 
      image="https://www.w3schools.com/w3images/team2.jpg"/>
      <Teams 
      title="John Doe" 
      discription="Some text that describes me lorem ipsum ipsum lorem." 
      image="https://www.w3schools.com/w3images/team3.jpg"/>
      </TeamContainer>
    </PageWrapper>

    )
}

export default About;
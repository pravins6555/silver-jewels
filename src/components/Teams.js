import React from "react";
import styled from "styled-components";


const DetailsBarWrapper = styled.div`
  background-color: rgb(8, 8, 63);
  border-radius: 7px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
    grid-row: 2;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextOne = styled.p`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const TextTwo = styled.p`
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
`;

const ConnectButton = styled.input`
  position: absolute;
  bottom: 20px;
  padding: 10px;
  background-color: rgb(255, 0, 63);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 25px 12px 24px;
  cursor: pointer;
`;

function Teams(props){
    return(
        <DetailsBarWrapper>
        <TextWrapper>
          <img src={props.image} alt={props.title} width="250" />  
          <TextOne>{props.title}</TextOne>
          <TextTwo>{props.discription}</TextTwo>
        </TextWrapper>
        <ConnectButton type="submit" value="Contact"  />
      </DetailsBarWrapper>
    );
}

export default Teams;
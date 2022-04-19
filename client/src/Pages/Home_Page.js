import React from "react";
import styled from "styled-components";
import {Title, Button, Description} from "../Styles/Base_Style";


const Home_Page = (props) => {
  return (
    <Container>
      <Title>Quickly</Title>
      <Description>
      A housing for all Quickly apps. <br/>
      Stop wasting time going into rabbit holes. Do more, quickly.
      </Description>
      <Button onClick={props.ChangeOptionView}>Explore</Button>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  font-family: Arial;
  text-align: center;
`;


export default Home_Page;

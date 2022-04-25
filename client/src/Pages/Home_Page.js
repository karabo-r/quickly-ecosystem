import React from "react";
import styled from "styled-components";
import {Title, Button, Description} from "../Styles/Base_Style";
import { Link } from "react-router-dom";

const Home_Page = () => {
  return (
    <Container>
      <Title>Quickly</Title>
      <Description>
      A housing for all Quickly apps. <br/>
      Stop wasting time going into rabbit holes. Do more, quickly.
      </Description>
      <Link to="/options">
        <Button>Explore</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  font-family: Arial;
  text-align: center;
`;


export default Home_Page;

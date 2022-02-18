import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "@mui/material/Button";

const Landing = () => {
  return (
    <Container>
      <LandingTitle>Qucikly</LandingTitle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  /* margin-bottom: 20px; */
  align-items: center;

  /* transform: translateY(-20%); */
`;
const TitleAnimation = keyframes`
    0%{opacity:0;}
    100%{opacity:1;}
    from{
        transform: translateY(0%);
    }
    to{
        transform: translateY(-200%);
    }
   
`;
const LandingTitle = styled.h1`
  font-size: 6rem;
  animation: ${TitleAnimation} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  /* text-align: center; */
`;

export default Landing;

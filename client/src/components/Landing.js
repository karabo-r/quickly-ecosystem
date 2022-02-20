import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "@mui/material/Button";

const Landing = () => {
  return (
    <Container>
      <LandingTitle>Qucikly</LandingTitle>
      <Description>
        A housing for all quickly applications. <br /> Don't waste time going
        into rabitholes.
      </Description>
      <Button
        variant="contained"
        disableElevation
        sx={{ p: "1rem 2rem", t: "5rem" }}
      >
        Explore
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  /* margin-bottom: 20px; */
  align-items: center;
  flex-direction: column;

  /* transform: translateY(-20%); */
`;
const TitleAnimation = keyframes`
    0%{opacity:0;}
    100%{opacity:1;}
    from{
        transform: translateY(0%);
    }
    to{
        transform: translateY(-70%);
    }
   
`;
const LandingTitle = styled.h1`
  font-size: 6rem;
  animation: ${TitleAnimation} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  /* text-align: center; */
`;

const Description = styled.p`
  font-size: 1.6rem;
  max-width: 50%;
  text-align: center;
  line-height: 2rem;
  margin-bottom: 50px;
`;

export default Landing;

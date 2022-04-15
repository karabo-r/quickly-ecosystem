import React from "react";
import styled from "styled-components";

const Home_Page = (props) => {
  return (
    <Container>
      <Title>Quickly</Title>
      <Description>
      A housing for all Quickly apps. <br/>Stop wasting time going into rabbit holes. Do more, quickly.
      </Description>
      <Button onClick={props.handleClick}>Explore</Button>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: pink; */
  /* height: 80vh; */
  /* padding: 3rem; */
  box-sizing: border-box;
  font-family: Arial;
  text-align: center;
`;
const Title = styled.h1`
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
font-size: 5rem;

span{
  font-size: 3rem;
  letter-spacing: 3px;
  }
  `;
const Description = styled.p`
  font-size: 1.5rem;
  /* width: 60%; */
  margin: auto;
  margin-bottom: 60px;
  /* margin-bottom: 70px; */
  /* font-weight: 500; */
  margin-top:50px ;
  opacity: 70%;
  line-height: 35px;
  /* margin */
  /* background-color: rebeccapurple; */
  /* text-align: center; */
`;
const Button = styled.button`
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border: 1.5px solid black;
  cursor: pointer;
  background-color: #050A30;
  color: white;
  font-size: 1rem;
  /* margin-top: 10px; */
 
 :hover{
    background-color: #242a5c;
    background-color: transparent;
    color: #050A30
 }
`;
export default Home_Page;

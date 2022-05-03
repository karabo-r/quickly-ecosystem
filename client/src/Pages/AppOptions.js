import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const AppOptions = (props) => {


  const prepareAppView = (e) => {
    e.preventDefault();
    const testValue = document.getElementById('testValue')
    console.log(testValue.value);
    props.changeToSelectedApp(testValue.value)
  }

  return (
    <>
    <Heading>Quickly Apps</Heading>
    <Devnotice>*some apps are still in development</Devnotice>

    <Container>
      <Box>
        <Title>QR</Title>
        <Description>Create QR codes</Description>  

          <Link to="quickly-qr">
          <Button type='submit' >Create</Button>
          </Link> 
        
      </Box>

    </Container>
    </>
  )
}

const Container = styled.div`
  height: 65vh;
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rebeccapurple; */
  /* display: grid; */
  /* align-items: center; */
  /* grid-template-columns: 33.3% 33.3% 33.3%; */

  @media screen and (max-width: 800px) {
    /* display: block; */
    overflow: auto;
    
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem;
`
const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: -4rem;
`
const Devnotice = styled.p`
  font-size: -0.2rem;
  font-weight: 600;
`
const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
`
const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
`
const Button = styled.button`
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border: 1.5px solid black;
  cursor: pointer;
  background-color: #050A30;
  color: white;
  font-size: 1rem;
  margin-top: 3rem;
  
  :hover{
    background-color: #242a5c;
    background-color: transparent;
    color: #050A30
 }
`
export default AppOptions
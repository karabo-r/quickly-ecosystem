import React from 'react'
import styled from 'styled-components'
import { Title, Button, Description } from '../../Styles/Base_Style'
// import 


const QR_Introduction = (props) => {

  return (
    <Container>
      <Title style={{"fontSize": "4rem"}}>
        Quickly QR
      </Title>
      <Description> 
        Generate a QR code in just a few seconds by input.
      </Description>

      <Button onClick={props.changeIntroductionView}>
        Create
      </Button>
    </Container>

  )
}

const Container = styled.div`
  font-family: Arial;
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 800px) {
    /* display: block; */
    width: 100%;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default QR_Introduction
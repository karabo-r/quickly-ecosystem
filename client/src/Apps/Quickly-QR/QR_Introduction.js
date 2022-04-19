import React from 'react'
import styled from 'styled-components'
import { Title, Button, Description } from '../../Styles/Base_Style'

const QR_Introduction = (props) => {
  return (
    
    <Container>
    <Title>Quickly QR</Title>
    <Description> Your QR code is a quick and easy way to promote your business, event
    ,blog or simply a way to leave hidden messages. 
    <br/>  You can generate one
    in just a few seconds by input.
    </Description>
    <Button onClick={props.changeIntroductionView}>Create</Button>
    </Container>

  )
}

const Container = styled.div`
/* background-color: rebeccapurple; */
  /* height: 100vh; */
  font-family: Arial;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default QR_Introduction
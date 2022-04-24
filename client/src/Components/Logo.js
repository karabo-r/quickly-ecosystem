import React from 'react'
import styled from 'styled-components'

const Logo = (props) => {
  return (
    <Container onClick={props.ChangeOptionView}>
      <h1 title='View more Quickly apps'>Quickly</h1>
      <span></span>
    </Container>
  )
}

const Container = styled.div`
display: flex;
align-items: center;
  position: absolute;
  bottom: 2.6rem;
  left: 4rem;
  height: 3rem;
  /* background-color: rebeccapurple; */

  h1{
    font-size: 1.4rem;
     font-weight: bold;
     cursor: pointer; 
     text-decoration: none;
    :hover{
      opacity: 100%;
      /* text-decoration: underline; */
          color: black;
          /* text-decoration: underline; */
          text-underline-offset: 10px;
          text-decoration-thickness: 2px;
      }
  }

  

`

export default Logo
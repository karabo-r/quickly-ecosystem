import React from 'react'
import styled from 'styled-components'

const NoteCard = (props) => {
  return (
    <Container>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
    </Container>
  )
}

const Container = styled.div`

    width: 100%;
    height: 6rem;
    border-radius: 8px;
padding-left: 1rem;
    padding-top: 0.5rem;
    border: 1px solid gray;
    margin-top: 9px;
    cursor: pointer;

    h1{
        font-size: 1rem;
    }

    p{
      font: 12px;
    }
`

export default NoteCard
import React from 'react'
import styled from 'styled-components';

const SaveButton = (props) => {
  return (
    <Container onClick={props.createNote}>Save</Container>
  )
}

const Container = styled.button`
    border: 1px solid gray;
    padding: 10px 30px;
`

export default SaveButton
import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../Styles/Base_Style'

const UploadDocument = (props) => {
  return (
      <>
    <DropArea onClick={props.fetchDocument}>
      <h1>Drag and Drop or click</h1>
      <input type='file' id="fileInput" ref={props.DocumentRef}/>
    </DropArea>
     <Button>Upload</Button>
      </>
  )
}

const DropArea = styled.div`
  height: 35vh;
  width: 70%;
  margin-bottom: 3rem;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;


  :hover{

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  }

  input{
    display: none;
  }

`

export default UploadDocument
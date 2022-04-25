import React from 'react'
import styled from 'styled-components'
import { Button, Title2, Description } from '../../Styles/Base_Style'


const QR_Creation = (props) => {
  

  return (
    <>
    <Title2>Quickly QR</Title2>
    {!props.qrcreated && 
      <>
      <TextArea ref={props.textInputRef} onChange={props.handleTextInput}></TextArea>
      <Button onClick={props.generateQrImage}>generate</Button>
      {props.failedToGenerate &&
      <ConnectionError>Connect to the internet or try again later</ConnectionError>
      }
    </>}

    {props.qrcreated && 
    <>
      <div id='imageContainer'>
        <img src={props.imageLink} alt='image of the generated QR code'/>
      </div>
      <Description>
        Thank you! 💚
        <p>Scan feature coming soon</p>
      </Description>
      
      <Button onClick={props.handleImageDownload}>Download</Button>
    </>
    }
    
    </>
  )
}


const TextArea = styled.textarea`
  width: 400px;
  height: 250px;
  outline: none;
  padding: 30px;
  font-size: 20px;
  border-radius: 5px;
  margin-bottom: 3rem;
`
const ConnectionError = styled.h3`
  position: absolute;
  color: red;
  bottom: 10rem;
  /* margin-top: 2rem; */
`
export default QR_Creation
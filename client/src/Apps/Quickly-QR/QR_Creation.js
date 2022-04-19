import React from 'react'
import styled from 'styled-components'
import { Button, Title2, Description } from '../../Styles/Base_Style'


const QR_Creation = (props) => {

  return (
    <>
    <Title2>Quickly QR</Title2>
    {props.qrcreated && 
      <>
      <TextArea ref={props.textRef} onChange={props.handleText}></TextArea>
      <Button onClick={props.generateQr}>generate</Button>
    </>}

    {!props.qrcreated && 
    <>
      <Description>
        Thank you! 💚
        <p>Scan feature coming soon</p>
      </Description>
      
      <Button onClick={props.handleDownload}>Download</Button>
    </>
    }
    
    {props.imageDownloadButton}
    {props.image}
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

export default QR_Creation
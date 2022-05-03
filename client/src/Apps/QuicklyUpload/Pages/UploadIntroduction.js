import React from 'react'
import { Title, Button, Description } from '../../../Styles/Base_Style'
const UploadIntroduction = (props) => {
  return (
    <>
    <Title>Quickly Upload</Title>
      <Description>
      Save files temporary and access them with a link. You can use it to share files and collaborate with your team or clients.
      </Description>
      <Button onClick={props.changeIntroductionView}>Start</Button>
    </>
  )
}

export default UploadIntroduction
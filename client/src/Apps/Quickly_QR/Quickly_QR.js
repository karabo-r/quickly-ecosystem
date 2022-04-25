import React, { useRef, useState } from 'react'
import QR_Introduction from './QR_Introduction'
import QR_Creation from './QR_Creation'
import FetchImage from './API/FetchImage'
import DownloadImage from './API/DownloadImage'


const Quickly_QR = () => {

  const [viewIntroduction, setViewIntroduction] = useState(true)
  const [qrcreated, setqrcreated] = useState(false)
  const [imageLink, setImagelink] = useState('')
  const [text, setText] = useState('')

  const textInputRef = useRef(null)

  const changeIntroductionView = () => {
    setViewIntroduction(false)
  }
  
  const handleTextInput = () => {
    setText(textInputRef.current.value)
  }

  const generateQrImage = () => {
    textInputRef.current.value = ''
    FetchImage(text, setImagelink, setqrcreated)
  }

  const handleImageDownload = () =>{
    DownloadImage(imageLink, 'imageContainer')
  }

  const propsCollection = {
    changeIntroductionView,
    handleImageDownload,
    handleTextInput,
    generateQrImage,
    textInputRef,
    qrcreated,
    imageLink
  }

  return (
    <>
      {viewIntroduction 
      // eslint-disable-next-line react/jsx-pascal-case
      ? <QR_Introduction {...propsCollection}/> 
      // eslint-disable-next-line react/jsx-pascal-case
      : <QR_Creation {...propsCollection}/> }
    </>
  )
}


export default Quickly_QR
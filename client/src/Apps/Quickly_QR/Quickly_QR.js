import React, { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import QR_Introduction from './QR_Introduction'
import QR_Creation from './QR_Creation'
import FetchImage from './API/FetchImage'
import DownloadImage from './API/DownloadImage'
import { Image_URL } from '../../Recoil/Quickly_QR/Image_URL'

const Quickly_QR = () => {

  const [viewIntroduction, setViewIntroduction] = useState(true)
  const [imageLink, setImagelink] = useRecoilState(Image_URL)
  const [qrcreated, setqrcreated] = useState(true)
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
      ? <QR_Introduction {...propsCollection}/> 
      : <QR_Creation {...propsCollection}/> }
    </>
  )
}


export default Quickly_QR
import React, { useRef, useState } from 'react'
import QrIntroduction from './Pages/QrIntroduction'
import QrCreation from './Pages/QrCreation'
import FetchImage from './API/FetchImage'
import DownloadImage from './API/DownloadImage'
import { useSearchParams } from 'react-router-dom'

const QuicklyQr = () => {

  const [searchParams, setSearchParams] = useSearchParams({})
  const [viewIntroduction, setViewIntroduction] = useState(true)
  const [failedToGenerate, setFailedToGenerate] = useState(false)
  const [qrcreated, setqrcreated] = useState(false)
  const [imageLink, setImagelink] = useState('')
  const [text, setText] = useState(
    searchParams.get("text")
  )

  const textInputRef = useRef(null)

  const changeIntroductionView = () => {
    setViewIntroduction(false)
  }
  
  const handleTextInput = () => {
    setSearchParams({text: textInputRef.current.value})
    setText(textInputRef.current.value)
  }

  const generateQrImage = () => {
    setSearchParams("")
    textInputRef.current.value = ''
    FetchImage(text, setImagelink, setqrcreated, setFailedToGenerate)
  }

  const handleImageDownload = () =>{
    DownloadImage(imageLink, 'imageContainer')
  }

  const propsCollection = {
    changeIntroductionView,
    handleImageDownload,
    handleTextInput,
    generateQrImage,
    failedToGenerate,
    textInputRef,
    qrcreated,
    imageLink,
  }

  return (
    <>
      {viewIntroduction 
      // eslint-disable-next-line react/jsx-pascal-case
      ? <QrIntroduction {...propsCollection}/> 
      // eslint-disable-next-line react/jsx-pascal-case
      : <QrCreation {...propsCollection}/> }
    </>
  )
}


export default QuicklyQr
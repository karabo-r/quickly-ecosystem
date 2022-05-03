import React, { useRef, useState } from 'react'
import QrIntroduction from './Pages/QrIntroduction'
import QrCreation from './Pages/QrCreation'
import DownloadImage from './Modules/DownloadImage'
import { useSearchParams } from 'react-router-dom'
import services from './API/services'


const QuicklyQr = () => {

  const [searchParams, setSearchParams] = useSearchParams({})
  const [viewIntroduction, setViewIntroduction] = useState(true)
  const [failedToGenerate, setFailedToGenerate] = useState(false)
  const [isQrcreated, setIsQrcreated] = useState(false)
  const [imageLink, setImagelink] = useState('')
  const [text, setText] = useState(
    searchParams.get("text")
  )

  const textInputRef = useRef(null)

  const changeIntroductionView = () => setViewIntroduction(false)
  
  const handleTextInput = () => {
    setSearchParams({text: textInputRef.current.value})
    setText(textInputRef.current.value)
  }

  const resetStatesToDefault = () => {
    textInputRef.current.value = ""
    setFailedToGenerate("")
    setSearchParams("")
  }

  const generateQrImage = () => {
    if (text) {
      resetStatesToDefault()
      services.fetchImage(text, setImagelink, setIsQrcreated, setFailedToGenerate)
      } else {
        setFailedToGenerate(true)
      }
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
    isQrcreated,
    imageLink,
  }

  return (
    <>
      {viewIntroduction 
      ? <QrIntroduction {...propsCollection}/> 
      : <QrCreation {...propsCollection}/> }
    </>
  )
}


export default QuicklyQr
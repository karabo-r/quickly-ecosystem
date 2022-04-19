import React, { useRef, useState } from 'react'
import QR_Introduction from './QR_Introduction'
import QR_Creation from './QR_Creation'
import fetchQrImage from './API/fetchQrImage'
import DownloadQrImage from './API/DownloadQrImage'

const Quickly_QR = () => {

  const [viewIntroduction, setViewIntroduction] = useState(true)
  const [qrcreated, setqrcreated] = useState(true)
  const [text, setText] = useState('')
  const [link, setlink] = useState('')


  function changeIntroductionView(){
    setViewIntroduction(false)
  }

  const textRef = useRef(null)

  function handleText(){
    console.log(textRef.current.value);
    setText(textRef.current.value)
  }

  function generateQr(){
    textRef.current.value = ''
    fetchQrImage(text, setlink, setqrcreated)
  }



  function handleDownload(){
    const imageHolder = document.getElementById('imageHolder')
    const linkDownload = document.createElement("a");
    linkDownload.download = 'qr-code.jpg';
    linkDownload.style.display = 'none'
    linkDownload.href = link;
    imageHolder.appendChild(linkDownload)
    
    linkDownload.click()

  }

  const propsCollection = {
    changeIntroductionView,
    handleDownload,
    handleText,
    generateQr,
    qrcreated,
    textRef,
    // DownloadQrImage(link, imageHolder),
    link,
  }

  return (
    <>
      <div id='imageHolder'>
        <img src={link}/>
      </div>
      {viewIntroduction 
      ? <QR_Introduction {...propsCollection}/> 
      : <QR_Creation {...propsCollection}/> }
    </>
  )
}


export default Quickly_QR
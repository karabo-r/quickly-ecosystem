import React, { useState } from 'react'
import App_Options from '../Components/App_Options'
import Quickly_QR from '../Apps/Quickly_QR/Quickly_QR'

const AppsDisplay = () => {

  const [selectedApp, setSelectedApp] = useState('none')
  
  let viewSelectedApp;
  
  const changeToSelectedApp = (appName) =>{
    setSelectedApp(appName)
  }

  const propsCollection = {
    changeToSelectedApp
  }

  if (selectedApp === 'qucikly-qr') {
      viewSelectedApp = <Quickly_QR />
  }else{
      viewSelectedApp = <App_Options {...propsCollection} />
  }

  return (
    <>
      {viewSelectedApp}
    </>
  )
}

export default AppsDisplay
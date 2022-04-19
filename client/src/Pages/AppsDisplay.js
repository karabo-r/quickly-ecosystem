import React, { useState } from 'react'
import Quickly_QR from '../Apps/Quickly-QR/Quickly_QR'
// import App_Options from '../Components/App_Options'

const AppsDisplay = () => {

  const [appInView, setAppInView] = useState(true)



  return (
    <Quickly_QR/>
    )
}

export default AppsDisplay
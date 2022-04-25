import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import Home_Page from '../Pages/Home_Page';
import AppsDisplay from '../Pages/AppsDisplay';
import Quickly_QR from '../Apps/Quickly_QR/Quickly_QR';


const GlobalRouting = () => {
  return (
    <>
     <Routes>
            <Route path='/' element={<Home_Page/>}/>
            <Route path='/options' element={<AppsDisplay/>}/>
            <Route path='/options/quickly-qr' element={<Quickly_QR/>}/>
        </Routes>

    </>
  )
}

export default GlobalRouting
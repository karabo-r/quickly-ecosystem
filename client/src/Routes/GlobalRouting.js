import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Home from '../Pages/Home';
import AppOptions from '../Pages/AppOptions';
import QuicklyQr from '../Apps/QuicklyQr/QuicklyQr';
import QuicklyUpload from '../Apps/QuicklyUpload/QuicklyUpload';

const GlobalRouting = () => {
  return (
    <>
     <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/options' element={<AppOptions/>}/>
            <Route path='/quickly-qr' element={<QuicklyQr/>}/>
            <Route path='/quickly-upload' element={<QuicklyUpload/>}/>
        </Routes>

    </>
  )
}

export default GlobalRouting
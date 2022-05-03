import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Home from '../Pages/Home';
import QuicklyQr from '../Apps/QuicklyQr/QuicklyQr';
import AppOptions from '../Pages/AppOptions';


const GlobalRouting = () => {
  return (
    <>
     <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/options' element={<AppOptions/>}/>
            <Route path='/options/quickly-qr' element={<QuicklyQr/>}/>
        </Routes>

    </>
  )
}

export default GlobalRouting
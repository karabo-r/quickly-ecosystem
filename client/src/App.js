import React, { useState } from 'react'
import {RecoilRoot} from 'recoil'
import styled from 'styled-components'
import AppsDisplay from './Pages/AppsDisplay';
import Contacts from './Components/Contacts';
import Home_Page from './Pages/Home_Page';
import Logo from './Components/Logo';
// import StateCleanUp from './Modules/StateCleanUp';


const App = () => {

  const [viewAppOptions, setViewAppOptions] = useState(false)

  
  function ChangeOptionView(){
    setViewAppOptions(prev=>!prev)
    // StateCleanUp()
  }

  const propsCollection = {
    ChangeOptionView,
  }



  return (
    <RecoilRoot>

    <Container>
      <Logo {...propsCollection}/>
      {viewAppOptions 
      ? <AppsDisplay/>
      : <Home_Page {...propsCollection}/> }
      <Contacts/>
    </Container>
      </RecoilRoot>
  )
}

const Container = styled.div`
  height: 100vh;
  font-family: Arial;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App
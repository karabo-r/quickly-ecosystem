import React, { useState } from 'react'
import styled from 'styled-components'
import AppsDisplay from './Pages/AppsDisplay';
import Contacts from './Components/Contacts';
import Home_Page from './Pages/Home_Page';
import Logo from './Components/Logo';


const App = () => {

  const [viewAppOptions, setViewAppOptions] = useState(false)

  function ChangeOptionView(){
    setViewAppOptions(prev=>!prev)
  }

  const propsCollection = {
    ChangeOptionView,
  }



  return (
    <Container>
      <Logo {...propsCollection}/>
      {viewAppOptions 
      ? <AppsDisplay/>
      : <Home_Page {...propsCollection}/> }
      <Contacts/>
    </Container>
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
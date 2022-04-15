import React, { useState } from 'react'
import styled from 'styled-components'
import App_Options from './Components/App_Options';
import Contacts from './Components/Contacts';
import Home_Page from './Components/Home_Page';
import Logo from './Components/Logo';


const App = () => {

  const [viewAppOptions, setViewAppOptions] = useState(false)

  function ChangeOptionView(){
    setViewAppOptions(prev=>!prev)
  }

  return (
    <Container>
      <Logo handleClick={ChangeOptionView}/>
      {viewAppOptions ? <App_Options/>: <Home_Page handleClick={ChangeOptionView}/> }
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
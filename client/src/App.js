import React from 'react'
import styled from 'styled-components'
import Logo from './Components/Logo';
import Contacts from './Components/Contacts';
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalRouting from './Routes/GlobalRouting';
import { RecoilRoot } from 'recoil';


const App = () => {
  return (
    <RecoilRoot>

    <Router>
    <Container>
      <Logo />
        <GlobalRouting/>
      <Contacts/>
    </Container>
    </Router>
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
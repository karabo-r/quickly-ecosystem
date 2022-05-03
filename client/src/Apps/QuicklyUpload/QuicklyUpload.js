import React,{useState} from 'react'
import styled from "styled-components";
import UploadCreation from './Pages/UploadCreation';
import UploadIntroduction from './Pages/UploadIntroduction';




const Quickly_Upload = (props) => {

  const [viewIntroduction, setViewIntroduction] = useState(true)

  function changeIntroductionView(){
    setViewIntroduction(false)
  }
    
  const propsCollection = {
    changeIntroductionView
  }

  return (
    <Container>
      {viewIntroduction 
      ? <UploadIntroduction {...propsCollection}/> 
      : <UploadCreation {...propsCollection}/> }
    </Container>
  )
}



const Container = styled.div`
/* background-color: rebeccapurple; */
  /* height: 100vh;  */
  font-family: Arial;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export default Quickly_Upload
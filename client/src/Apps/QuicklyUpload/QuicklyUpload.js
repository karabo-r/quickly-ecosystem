import React,{useState} from 'react'
import styled from "styled-components";
import UploadFile from './Pages/UploadFile';
import UploadIntroduction from './Pages/UploadIntroduction';

const Quickly_Upload = () => {

  const [viewIntroduction, setViewIntroduction] = useState(true)

  const changeIntroductionView = () => setViewIntroduction(false)
    
  function onFileUpload(file){
    console.log(file);
  }

  const propsCollection = {
    changeIntroductionView,
    onFileUpload
  }


  return (
    <Container>
      {viewIntroduction 
      ? <UploadIntroduction {...propsCollection}/> 
      : <UploadFile {...propsCollection}/> }
    </Container>
  )
}



const Container = styled.div`
  font-family: Arial;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export default Quickly_Upload
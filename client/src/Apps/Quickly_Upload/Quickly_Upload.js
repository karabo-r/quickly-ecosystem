import React,{useState} from 'react'
import styled from "styled-components";
import Upload_Introduction from './Upload_Introduction';
import Upload_Creation from './Upload_Creation';



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
      ? <Upload_Introduction {...propsCollection}/> 
      : <Upload_Creation {...propsCollection}/> }
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
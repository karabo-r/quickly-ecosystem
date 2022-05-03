import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../Styles/Base_Style'


const UploadCreation = () => {

  const [imageUrl, setimage] = useState('')

  let d = false
  
  useEffect(()=>{
    console.log('asdf');
  },d)
  function test(e){
    d = true
    setimage(e.target.result)
    

}

  function processInput(){
    const data = document.getElementById('fileInput')
    if(data.files && data.files[0]){
      const reader = new FileReader()
        reader.onload = function(e){
        
        test(e)
        console.log(e.target);
      }
        reader.readAsDataURL(data.files[0]);    
    }else{
      data.click()
      console.log(data);
    }
  }

  return (
   <>
   <img src={imageUrl}/>
   <DropArea onClick={processInput}>
     <h1>Drag and Drop or click</h1>
     <input type='file' id="fileInput"/>
   </DropArea>
    <Button>Upload</Button>
   </> 
  )
}

const DropArea = styled.div`
  height: 35vh;
  width: 70%;
  margin-bottom: 3rem;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rebeccapurple; */

  :hover{
    /* border-color: black; */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    /* border: 2px solid black; */
  }

  input{
    display: none;
  }

`


export default UploadCreation
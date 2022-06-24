import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const UploadFile = ({onFileUpload}) => {

const drop = useRef(null)


useEffect(() => {
  drop.current.addEventListener('dragover', handleDragOver);
  drop.current.addEventListener('drop', handleDrop);
  drop.current.addEventListener('click', handleClick)
  
  return () => {
    drop.current.removeEventListener('dragover', handleDragOver);
    drop.current.removeEventListener('drop', handleDrop);
    drop.current.addEventListener('click', handleClick);
  };
}, []);

const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  const {files} = e.dataTransfer;
  
  if (files && files.length) {
    onFileUpload(files);
  }
};

const handleClick = (e) =>{
  e.preventDefault();
  e.stopPropagation();

  const {files} = e.dataTransfer;
  
  if (files && files.length) {
    onFileUpload(files);
  }
}

  return (
    <>
        <DropArea ref={drop}>
        <h1>Drag and Drop or click</h1>
        </DropArea>
    </> 
  )
}

UploadFile.propTypes = {
  onFileUpload : PropTypes.func.isRequired
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

  :hover{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`


export default UploadFile
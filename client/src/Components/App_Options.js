import React from 'react'
import styled from 'styled-components'

const App_Options = () => {
  return (
    <>
    <Title>Quickly Apps</Title>
    <Devnotice>*some apps are still in development</Devnotice>
    <Container>
      {/* <h1>Quickly Apps</h1> */}
      <Box><h1>Upload</h1>
      <p>Save files temporary.</p>
      <button>Upload</button>

      </Box>
      <Box><h1>Notes</h1>
      <p>Write and save notes</p>  
      <button>Write</button>
      </Box>
      <Box><h1>QR</h1>
      <p>Create QR codes</p>  
      <button>Create</button>
      </Box>
    </Container>
    </>
  )
}

const Container = styled.div`
  /* background-color: rebeccapurple; */
  height: 65vh;
  width: 96%;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  /* padding: 5rem; */


  @media screen and (max-width: 800px) {
    display: block;
    overflow: auto;
  }

  `
const Box = styled.div`
/* margin-top: 3rem; */
/* border: 1px solid black; */

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



  margin: 3rem;
  /* text-align: center; */
  /* background-color: red; */
  /* ; */
  h1{
    /* margin-top: 2rem; */
    margin-bottom: 2rem;
    font-size: 1.6rem;
    font-weight: bold;
  }

  button{
    padding: 1rem 2rem;
  outline: none;
  border: none;
  border: 1.5px solid black;
  cursor: pointer;
  background-color: #050A30;
  color: white;
  font-size: 1rem;
  margin-top: 3rem;
  /* margin-top: 10px; */
 
 :hover{
    background-color: #242a5c;
    background-color: transparent;
    color: #050A30
 }
  }

  p{
    /* width: auto; */
    text-align: center;
    /* background-color: rebeccapurple; */
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
  }
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: -4rem;
`
const Devnotice = styled.p`
  font-size: -0.2rem;
  font-weight: 600;
`
export default App_Options
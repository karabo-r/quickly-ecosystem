import styled from 'styled-components'

const Button = styled.button`
    padding: 1rem 2rem;
  outline: none;
  border: none;
  border: 1.5px solid black;
  cursor: pointer;
  background-color: #050A30;
  color: white;
  font-size: 1rem;

 
 :hover{
    background-color: #242a5c;
    background-color: transparent;
    color: #050A30
 }
`

const Description = styled.p`
 font-size: 1.5rem;

  margin: auto;
  margin-bottom: 60px;
  text-align: center;
  margin-top:50px ;
  opacity: 70%;
  line-height: 35px;

`

const Title = styled.h1`
    font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
font-size: 5rem;

`
const Title2 = styled.h1`
    font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
position: absolute;
top: 8rem;

`

export  {Button, Title, Title2, Description}
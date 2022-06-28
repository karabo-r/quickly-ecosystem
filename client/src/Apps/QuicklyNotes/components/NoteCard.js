import React from 'react'
import styled from 'styled-components'
import DeleteButton from './DeleteButton'

const NoteCard = (props) => {
  return (
    <Container>
      <div className='dataCon'>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
      <div className='delCon'>
          <DeleteButton deleteNote={props.deleteNote}/>
        </div>
    </Container>
  )
}

const Container = styled.div`

    width: 100%;
    height: 6rem;
    border-radius: 8px;
padding-left: 1rem;
/* padding-right: 1rem; */
/* align-items: center; */
/* padding-top: 0.5rem; */
border: 1px solid gray;
    margin-top: 9px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    
    
    .delCon{
      /* background-color: rebeccapurple; */
      display: flex;
      align-items: center;
      font-size: 1rem;
      padding-right: 1.5rem;

      :hover{
        background-color: rebeccapurple;
      }
    }
    .dataCon{
      padding-top: 0.5rem;

    }

    
    h1{
        font-size: 1rem;
    }

    p{
      font: 12px;
    }

  
`

export default NoteCard
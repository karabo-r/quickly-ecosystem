import React from 'react'
import styled from 'styled-components'
import SaveButton from './SaveButton'


const DisplayNotes = (props) => {

    return (
    <Container>
        <input ref={props.headingRef} type='text' placeholder='Title' autoFocus onChange={props.displaySaveButton}/>
        <textarea ref={props.textRef} placeholder='Quickly, before you forget ' autoFocus onChange={props.displaySaveButton}/>
        {props.saveButton && <SaveButton createNote={props.createNote}/>}
    </Container>

  )
}

const Container = styled.div`
    height: 100%;
    padding-left: 5rem;
    padding-top: 2.2rem;

    input{
        font-size: 1.4rem;
        border: none;
        outline: none;
    }
    
    textarea{
        width: 100%;    
        height: 75%;
        margin-top: 2rem;
        border: none;
        outline: none;
        resize: none;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
    }
`
export default DisplayNotes
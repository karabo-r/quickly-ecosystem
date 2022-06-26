import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
// import { NewNote } from '../Recoil/atoms/NewNote'
import styled from 'styled-components'
import SaveButton from './SaveButton'
import { Notes } from '../Recoil/atoms/Notes'
import { NoteItem } from '../Recoil/atoms/NoteItem'

const CreateNote = () => {

    // const [he, se] = useState('')
    const [noteItem, setNoteItem] = useRecoilState(NoteItem)
    const [notes, setNewNote] = useRecoilState(Notes)

    const headingRef = useRef(null)
    const textRef = useRef(null)


    function saveNote(){
        let heading = headingRef.current.value
        let text = textRef.current.value 

        if (heading && text) {
            const newNote = {
                key: 1,
                heading: heading,
                text: text
            }

            setNewNote(notes.concat(newNote))
            headingRef.current.value = ""
            textRef.current.value = ""
        }
    }

    const propsCollection = {
        saveNote
    }

  return (
    <Container>
        {/* <div className='Line'/> */}
        <input ref={headingRef} type='text' placeholder='Title' autoFocus />
        <textarea ref={textRef} placeholder='Quickly, before you forget ' autoFocus />
        <SaveButton {...propsCollection}/>
    </Container>

  )
}

const Container = styled.div`
    /* background-color: rebeccapurple; */
    height: 100%;
    padding-left: 5rem;
    /* padding: 2rem; */

    padding-top: 2.2rem;

    /* .Line{
        height: 100%;
        width: 1px;
        background-color: rebeccapurple;
    } */
    input{
        /* background-color: rebeccapurple; */
        font-size: 1.4rem;
        border: none;
        outline: none;
    }

    /* h1{
        border-bottom: 1px solid gray;
    } */
    
    textarea{
        /* background-color: rebeccapurple; */
        width: 100%;    
        height: 75%;
        margin-top: 2rem;
        border: none;
        outline: none;
        /* border: 1px solid gray; */
        resize: none;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
    }
`
export default CreateNote
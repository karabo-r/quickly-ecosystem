import React, {useRef, useState} from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import NoteCard from './components/NoteCard'
import PageIntro from './components/PageIntro'
import SearchOrAdd from './components/SearchOrAdd'
import { IsCreateNote } from './Recoil/atoms/IsCreateNote'
import { Notes } from './Recoil/atoms/Notes'
import { GeneratorID } from './components/GenerateID'
import DisplayNotes from './components/DisplayNote'


const QuicklyNotes = () => {


    const [create, setCreate] = useRecoilState(IsCreateNote)
    const [saveButton, setSaveButton] = useState(false)
    const [notes, setNewNote] = useRecoilState(Notes)
    
    //update a saved note being thats being viewed
    const [activeNote, setActiveNote] = useState(false)

    const headingRef = useRef(null)
    const textRef = useRef(null)

    const ProcessedNotes = notes?.map((note, i) =>{
        return <NoteCard 
            key={i} 
            {...note} 
            deleteNote={()=>deleteNote(note.id)}/>
    })

    


    function createNote(){
        let heading = headingRef.current.value
        let text = textRef.current.value 

        if (!activeNote) {
            if (heading || text) {
                const newNote = {
                    id: GeneratorID(notes),
                    heading: heading,
                    text: text
                }
                
                setNewNote(notes.concat(newNote))
            }
        }
        if (activeNote) {
            updateNote()
        }
    }


    function deleteNote(id){
        // const note =  notes.find(n=>n.id===id)
    }

    function updateNote(){

    }

    function displaySaveButton(){
        setSaveButton(true)
    }

    const handleAddButton = () =>{
        setCreate(true)
        headingRef.current.value = ""
        textRef.current.value = ""
    }

    const propsCollection = {
        createNote,
        deleteNote,
        updateNote,
        headingRef,
        textRef,
        saveButton,
        displaySaveButton,
        handleAddButton
    }

    return (
        <Container>
            <CreateContainer>
            <SearchOrAdd {...propsCollection}/>
            {ProcessedNotes}
        </CreateContainer>
        <ViewContainer>
            {!create ? 
                <PageIntro/> : 
                <DisplayNotes {...propsCollection}/>
            }
        </ViewContainer>
    </Container>
  )
}

const Container = styled.div`
    width: 90%;
    height: 83%;
    display: grid;
    margin-bottom: 4rem;
    border: 1.2px solid gray;
    grid-template-columns: 24% auto;
`

const CreateContainer = styled.div`
    border-right: 1px solid gray;
    padding: 1.4rem;

`
const ViewContainer = styled.div``
export default QuicklyNotes
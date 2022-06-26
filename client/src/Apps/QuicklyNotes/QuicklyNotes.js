import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import CreateNote from './components/CreateNote'
import NoteCard from './components/NoteCard'
import PageIntro from './components/PageIntro'
import SearchOrAdd from './components/SearchOrAdd'
import { IsCreateNote } from './Recoil/atoms/IsCreateNote'
import { Notes } from './Recoil/atoms/Notes'

const QuicklyNotes = () => {

    // const [create, setCreate] = useState(false)
    const [create, setCreate] = useRecoilState(IsCreateNote)
    const [notes, _] = useRecoilState(Notes)

    const ProcessedNotes = notes?.map((note, i) =>{
    return <NoteCard key={i} {...note}/>
    })



    return (
        <Container>
            <CreateContainer>
            <SearchOrAdd/>
            {ProcessedNotes}
        </CreateContainer>
        <ViewContainer>
            {!create ? 
                <PageIntro/> : 
                <CreateNote />
            }
        </ViewContainer>
    </Container>
  )
}

const Container = styled.div`
    width: 90%;
    height: 83%;
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 23% auto;
    border: 1.2px solid gray;
    /* border-spacing: 1rem; */
    /* border-right: 1rem; */
    border-radius: 5px;
    `
const CreateContainer = styled.div`

border-right: 1px solid gray;

/* padding-right: 2rem; */
padding: 1.4rem;

`
const ViewContainer = styled.div`

`
export default QuicklyNotes
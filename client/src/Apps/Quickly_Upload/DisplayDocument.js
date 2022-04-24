import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Title, Title2 } from '../../Styles/Base_Style'

const DisplayDocument = (props) => {

    const [document, SetDocument] = useState('')

    function changeDocument(){
        SetDocument(props.document)
    }


  return (
    <Container>
        <div> 

        <img src={props.document}/>
        </div>
        <Button>Save</Button>
    </Container>
  )
}

const Container = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* width: 100%; */

    
;`
export default DisplayDocument
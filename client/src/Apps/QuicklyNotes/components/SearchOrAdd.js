import React from 'react'
import styled from 'styled-components'
import {FiSearch, FiPlus} from 'react-icons/fi'

const SearchOrAdd = (props) => {

  



  return (
    <Container>
        <Button>
          <FiSearch 
            size="1.4rem" 
            cursor="pointer"  />
        </Button>
        <Button>
          <FiPlus 
            size="1.5rem" 
            cursor="pointer"  
            onClick={props.handleAddButton}/>
        </Button>
    </Container>
  )
}

const Container = styled.div`
    height: 8%;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    justify-content: space-between;
   

    

` 
const Button = styled.div`
   color: #626269;
    opacity: 60%;

    :hover{
      opacity: 100%;
      color: black;
    }
`



export default SearchOrAdd
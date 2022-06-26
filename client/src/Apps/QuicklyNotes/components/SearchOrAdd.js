import React from 'react'
import styled from 'styled-components'
// import {GrAdd, GrSearch} from 'react-icons/gr'
import {FiSearch, FiPlus} from 'react-icons/fi'
import { useRecoilState } from 'recoil'
import { IsCreateNote } from '../Recoil/atoms/IsCreateNote'
// import { Button } from '@mui/material'
// import { style } from '@mui/system'


const SearchOrAdd = () => {

  const [_, setCreate] = useRecoilState(IsCreateNote)

  function handleAddButton(){
    setCreate(true)
  }
  return (
    <Container>
        {/* <SearchCon> */}
        <Button>
          <FiSearch size="1.4rem" cursor="pointer"  />
        </Button>
        {/* </SearchCon> */}
        {/* <AddCon> */}
        <Button>

        <FiPlus size="1.5rem" cursor="pointer"  onClick={handleAddButton}/>
        </Button>
        {/* </AddCon> */}
    </Container>
  )
}

const Container = styled.div`
    /* background-color: rebeccapurple; */
    height: 8%;
    display: flex;
    /* margin: auto; */
    margin-bottom: 1.5rem;
    /* padding-left: 1rem; */
    /* padding-right: 1rem; */
    justify-content: space-between;
    align-items: center;
   

    

` 
const Button = styled.div`
   color: #626269;
    opacity: 60%;

    :hover{
      opacity: 100%;
      color: black;
    }
`
// const SearchCon = styled.div`
//   color: black;
  
//   :hover{
//     opacity: 100%;
//   }
//   `
// const AddCon = styled.div`
// opacity: 60%;
// color: #626269;
// color: black;

// :hover{
//   opacity: 100%;
// }
// `


export default SearchOrAdd
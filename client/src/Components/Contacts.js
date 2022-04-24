import React from 'react'
import styled from 'styled-components'

const Contacts = () => {
  return (
    <Container>
        <li><a href='https://github.com/karabo-r' target="_blank">Github</a></li>
        <li><a href='https://twitter.com/karabo_dev' target="_blank">Twitter</a></li>
    </Container>
  )
}

const Container = styled.ul`
    display: flex;
    position: absolute;
    bottom: 3rem;
    right: 5rem;
    
    li{
        padding: 0.6rem;
    }

    a{
        cursor: pointer;
        font-weight: 700;
        letter-spacing: 2px;
        text-decoration: none;
        color: #626269;
        opacity: 70%;
        
    }
    
    a:hover{
        opacity: 100%;
        color: black;
        /* text-decoration: underline; */
        text-underline-offset: 10px;
        text-decoration-thickness: 2px;
    }

`
export default Contacts
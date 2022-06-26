import React from 'react'
import styled from 'styled-components'


const PageIntro = () => {
  return (
    // <div>PageIntro</div>
    <Container>
        <h1>hello</h1>
        <p>Hope you're having a good day. <br/> Not much to say here, just a simple note taking app</p>
    </Container>

  )
}

const Container = styled.div`
    /* background-color: rebeccapurple; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    h1{
        font-size: 4rem;
    }

    p{
        font-size: 1.1rem;
    }

`

export default PageIntro
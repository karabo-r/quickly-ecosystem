import React from "react";
import styled from "styled-components";
import { PrimaryPageButton, Title, Description} from "../Styles/style";


import { Link } from "react-router-dom";


const Home_Page = () => {
  return (
    <Container>
      <h1 className={Title}>
        Quickly
      </h1>
      <p className={Description}>
        A housing for all Quickly apps. <br/>
        Stop wasting time going into rabbit holes. Do more, quickly.
      </p>
      <Link to="/options">
        <button className={PrimaryPageButton}>Explore</button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  margin-top: 16rem;
  text-align: center;
  margin-bottom: 16rem;
  flex-direction: column;
  justify-content: space-around;
`;


export default Home_Page;

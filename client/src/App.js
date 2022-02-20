import React from "react";
import styled from "styled-components";
import Landing from "./components/Landing";
import Qr_Code from "./components/Qr_Code/Qr_Code";
import Emoji_Search from "./components/Emoji_Search/Emoji_Search";
import Author from "./components/Author";
import Menu from "./components/Menu";

const App = () => {
  return (
    <Container>
      <Menu />
      <Landing />
      {/* <Qr_Code /> */}
      {/* <Emoji_Search /> */}
      <Author />
    </Container>
  );
};

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  width: 100%;
  font-weight: 500;
`;
export default App;

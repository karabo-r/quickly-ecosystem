import React from "react";
import Landing from "./components/Landing";
import Qr_Code from "./components/Qr_Code/Qr_Code";
import Emoji_Search from "./components/Emoji_Search/Emoji_Search";

const App = () => {
  return (
    <Container>
      <Landing />
      <Qr_Code />
      <Emoji_Search />
    </Container>
  );
};

const Container = styled.div``;
export default App;

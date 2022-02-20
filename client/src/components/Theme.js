import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
// import { Container } from "@mui/material";
import styled from "styled-components";

const Theme = () => {
  const [mode, setmode] = useState(true);

  function handleMode() {
    setmode((prev) => !prev);
  }

  const styles = {
    color: "black",
    transform: "scale(1.4)",
    margin: 0,
  };
  return (
    <Container>
      {mode ? (
        <LightModeIcon onClick={handleMode} style={styles} />
      ) : (
        <ModeNightIcon onClick={handleMode} style={styles} />
      )}
      {/* <LightModeIcon
        style={{ color: "black", transform: "scale(1.4)", margin: 0 }}
      /> */}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
  cursor: pointer;
`;

export default Theme;

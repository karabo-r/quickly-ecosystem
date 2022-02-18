import React from "react";
import styled from "styled-components";

const Author = () => {
  return (
    <Information href="https://github.com/karabo-r/quickly-ecosystem">
      Made with 💚 - Karabo-r
    </Information>
  );
};

const Information = styled.a`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    /* text-decoration-thickness: 0.1rem; */
  }
`;
export default Author;

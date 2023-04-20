import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(
    to right,
    #051937,
    #003d5c,
    #006369,
    #1f865e,
    #87a34e
  );
   
    font-family: sans-serif;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
 
  }
  a {
    cursor: pointer;
    color: #6d94ef;
  }
`;

export default GlobalStyles;

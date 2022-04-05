import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --background: #f0f2f5;
  --red: #e52e4d;
  --green: #33cc95;
  --blue: #5429cc;

  --blue-light: #6933ff;

  --text-title: #363f5f;
  --text-body: #969cb3;

  --background: #f0f2f5;
  --shape: #fff;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  @media (max-with: 1080px){ 
    font-size: 93.75%;
  }

  @media (max-with: 720px){ 
    font-size: 87.5%;
  }
  
  box-sizing: border-box;
}

body {
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
  color: #353535;
  line-height: 1;
  /* font-size: 1.6rem; */
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

a {
  /* color: var(--x); */
  text-decoration: none;
}

button {
  cursor: pointer;
}

::selection {
  /* background-color:; */
  /* color:; */
}

*:focus {
  outline: none;
  box-shadow: 0 0 0 0.12rem var(--blue-light);
  filter: brightness(1.01);
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: none;
  background: transparent;
  transition: filter .25s;

  :hover {
    filter: brightness(.8);
  }
}

/*
::-webkit-scrollbar {
  // (...)
}

::-webkit-scrollbar-button {
  // (...)
}

// ! Another scrollbar properties
*/
`;

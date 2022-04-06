import React from 'react';
import Home from './pages/Home/Index';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;

import React from "react";
import { DAppProvider, ChainId } from "@usedapp/core";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import { lightTheme } from "./styles/themes";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./routes";


const config = {
  supportedChains: [ChainId.xDai, ChainId.Kovan]
}

const App = () => (
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <DAppProvider>
        <Router>
          <Routes />
        </Router>
      </DAppProvider>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;

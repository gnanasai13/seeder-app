import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";
import "./App.css";
import HomeTemplate from "./components/templates/HomeTemplate";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeTemplate />
    </ThemeProvider>
  );
}

export default App;

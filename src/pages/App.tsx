import React from "react";
import "normalize.css";
import { GlobalStyle } from "../theme";
import { ThemeProv } from "../theme";

function App() {
  return (
    <>
      <ThemeProv>
        <GlobalStyle />
      </ThemeProv>
    </>
  );
}

export default App;

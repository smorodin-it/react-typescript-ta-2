import React from "react";
import "normalize.css";
import { GlobalStyle } from "../theme";
import { ThemeProv } from "../theme";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <>
      <ThemeProv>
        <GlobalStyle />
        <SignUpPage />
      </ThemeProv>
    </>
  );
}

export default App;

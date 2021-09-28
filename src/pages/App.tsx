import React from "react";
import "normalize.css";
import { ThemeProv, GlobalStyle } from "../theme";
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

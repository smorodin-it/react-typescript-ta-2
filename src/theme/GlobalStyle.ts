import { createGlobalStyle } from "styled-components/macro";
import IBMPlexSansBold from "../components/fonts/assets/IBMPlexSans-Bold.ttf";
import IBMPlexSansMedium from "../components/fonts/assets/IBMPlexSans-Medium.ttf";
import IBMPlexSansRegular from "../components/fonts/assets/IBMPlexSans-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  // Fonts
  @font-face {
    font-family: "IBM Plex Sans";
    src: url("${IBMPlexSansRegular}");
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: "IBM Plex Sans";
    src: url("${IBMPlexSansMedium}");
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    font-family: "IBM Plex Sans";
    src: url("${IBMPlexSansBold}");
    font-style: normal;
    font-weight: 700;
  }
  
  html {
  font-size: 16px;
  }
`;

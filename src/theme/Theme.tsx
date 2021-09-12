import React, { FC } from "react";
import { ThemeProvider } from "styled-components/macro";

const theme = {
  colors: {
    black: "rgba(0, 0, 0, 1)",
    white: "rgba(255, 255, 255, 1)",
    darkGrey: "rgba(117, 111, 134, 1)",
    blue: "rgba(8, 128, 174, 1)",
    light: "rgba(219, 226, 234, 1)",
    dark: "rgba(44, 39, 56, 1)",
    darkOpacity: "rgba(44, 39, 56, 0,86)",
    glacier: "rgb(124,156,191)",
    lighter: "rgba(235, 244, 248, 1)",
    red: "rgba(255, 113, 113, 1)",
    gray: "rgba(177, 181, 191, 1)",
  },
};

export const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

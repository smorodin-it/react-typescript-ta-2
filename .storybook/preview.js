import React from "react";
import "normalize.css";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";

import { theme } from "../src/theme";

import { GlobalStyle } from "../src/theme/";

// @react-theming/storybook-addon
// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [theme]));

const AllProviders = (Story, ctx) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story {...ctx} />
  </ThemeProvider>
);

// Global decorator to apply the styles to all stories
export const decorators = [AllProviders];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

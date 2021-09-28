import { css } from "styled-components/macro";

export const w100 = css`
  width: 100%;
`;

export const fitContent = css`
  width: fit-content;
`;

export const checkWide = css<WideProp>`
  ${({ wide }) => (wide ? w100 : null)};
`;

export const checkWideOptions = css<WideOptionsProp>`
  ${({ wideOptions }) => (wideOptions ? fitContent : w100)};
`;

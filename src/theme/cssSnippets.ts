import { css } from "styled-components/macro";

export const w100 = css`
  width: 100%;
`;

export const checkWide = css<{ wide: boolean }>`
  ${({ wide }) => (wide ? w100 : null)};
`;

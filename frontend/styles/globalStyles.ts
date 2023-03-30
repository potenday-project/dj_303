import { css } from "@emotion/react";
import { fontSuitRegular } from "./mixins";

export const globalStyles = css`
  body,
  main {
    ${fontSuitRegular};
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0;
    height: 100vh;
  }
`;

import { css } from "@emotion/react";
import { suitRegular } from "./font";
import { flexCenter } from "./mixins";

export const globalStyles = css`
  :root {
    background-color: #000000;
    margin: 0;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  html,
  body {
    height: 100%;
  }
`;

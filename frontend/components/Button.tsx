import * as React from "react";
import { css } from "@emotion/css";
import { flexCenter, fontSuitRegular } from "../styles/mixins";
import { ColorStyle, palette } from "../styles/palette";

const buttonCss = (color: ColorStyle) => css`
  ${fontSuitRegular};
  font-size: 15px;
  font-weight: 700;
  width: 320px;
  height: 48px;
  border-radius: 24px;
  background: ${palette.button.background[color]};
  ${flexCenter};
  color: #ffffff;

  &:hover {
    background: ${palette.button.hover[color]};
  }
`;

interface Props {
  color?: ColorStyle;
  text: string;
}

const Button: React.FC<Props> = ({ color = "primary", text }: Props) => {
  return <div className={buttonCss(color)}>{text}</div>;
};

export default Button;

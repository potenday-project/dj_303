import * as React from "react";
import styled from "@emotion/styled";
import { flexCenter, fontSuitRegular } from "@/styles/mixins";
import { ColorStyle, palette } from "@/styles/palette";
import { SerializedStyles } from "@emotion/react";

interface DefaultButton {
  color: ColorStyle;
  css?: SerializedStyles;
}

const DefaultButton = styled.button<DefaultButton>`
  ${(props) => props.css};
  ${fontSuitRegular};
  font-size: 15px;
  font-weight: 700;
  width: 320px;
  height: 48px;
  border-radius: 24px;
  background: ${(props) => palette.button.background[props.color]};
  ${flexCenter};
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => palette.button.hover[props.color]};
  }

  &:disabled {
    background: ${(props) => palette.button.disabled[props.color]};
    color: #8b8b8b;
    cursor: not-allowed;
  }
`;

interface Props {
  color?: ColorStyle;
  css?: SerializedStyles;
  text: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ css, color = "primary", text, disabled, onClick }: Props) => {
  return (
    <DefaultButton css={css} color={color} disabled={disabled} onClick={onClick}>
      {text}
    </DefaultButton>
  );
};

export default Button;

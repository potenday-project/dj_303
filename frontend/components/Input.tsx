import { css, cx } from "@emotion/css";
import * as React from "react";

const inputCss = css`
  border-radius: 8px;
  background: #333333;
  color: #ffffff;
  width: 304px;
  height: 48px;
  padding: 0;
  outline: none;
  border: none;
  font-size: 14px;
  padding-left: 16px;

  &::placeholder {
    color: #a5a5a5;
  }
`;

interface Props {
  className?: string;
  placeholder: string;
}

const Input: React.FC<Props> = ({ className, placeholder }: Props) => {
  return <input placeholder={placeholder} className={cx(className, inputCss)} />;
};

export default Input;

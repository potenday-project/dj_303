import { flexCenter } from "@/styles/mixins";
import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const Container = styled.div<{ css: SerializedStyles | undefined }>`
  ${(props) => props.css};
  width: 219px;
  height: 40px;
  background: #171717;
  font-size: 14px;
  color: #ffffff;
  border: 1px solid #242424;
  border-radius: 4px;
  ${flexCenter};
`;

interface Props {
  text: string;
  css?: SerializedStyles;
}

const Tooltip: React.FC<Props> = (props: Props) => {
  return <Container css={props.css}>{props.text}</Container>;
};

export default Tooltip;

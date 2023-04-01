import { flexCenter } from "@/styles/mixins";
import styled from "@emotion/styled";
import * as React from "react";

const Container = styled.div`
  background: #333333;
  border-radius: 4px;
  color: #ffffff;
  ${flexCenter};
  padding: 8px;
`;

const Text = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

interface Props {
  text: string;
}

const Chip: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  );
};

export default Chip;

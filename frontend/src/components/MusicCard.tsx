import styled from "@emotion/styled";
import * as React from "react";

const Container = styled.div`
  background: #242424;
  padding: 0 12px;
  width: 744px;
  height: 72px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Text = styled.div`
  height: 24px;
  color: #ffffff;
  font-size: 16px;
`;

interface Props {
  thumbnailSrc?: string;
  title: string;
}

const MusicCard: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Text>{props.title}</Text>
    </Container>
  );
};

export default MusicCard;

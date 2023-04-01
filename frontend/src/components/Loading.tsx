import { flexCenter, fontSuitBold, mobileView } from "@/styles/mixins";
import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  ${flexCenter};
  flex-direction: column;
  ${fontSuitBold};

  ${mobileView} {
    align-items: start;
  }
`;

const Text = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;

  ${mobileView} {
    word-break: keep-all;
  }
`;

const Loading: React.FC = () => {
  return (
    <Container>
      <Text>잠시만요!</Text>
      <Text>DJ303의 추천곡으로 플레이리스트를 만드는 중이에요.</Text>
    </Container>
  );
};

export default Loading;

import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import Button from "@/components/Button";
import { flexCenter, fontSuitBold, marginBottom } from "@/styles/mixins";

const MainContainer = styled.main`
  label: MainContainer;
  ${flexCenter};
  flex-direction: column;
`;

const Title = styled.h1`
  ${fontSuitBold};
  font-size: 20px;
  color: #ffffff;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>DJ303 - 비슷한 노래를 추천드릴게요.</title>
      </Head>
      <MainContainer>
        <Title>나만의 플레이리스트 만들기</Title>
        <LinkButton href="/create">
          <Button css={marginBottom(16)} text="시작하기" />
        </LinkButton>
        <LinkButton href="/playlist">
          <Button color="secondary" text="플레이리스트 둘러보기" />
        </LinkButton>
      </MainContainer>
    </>
  );
}

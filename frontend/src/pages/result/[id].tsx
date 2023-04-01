import Button from "@/components/Button";
import Chip from "@/components/Chip";
import MusicCard from "@/components/MusicCard";
import Tooltip from "@/components/Tooltip";
import {
  absoluteCenter,
  flexCenter,
  fontSuitBold,
  fontSuitRegular,
  marginBottom,
  marginTop,
} from "@/styles/mixins";
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";

const Container = styled.div`
  ${flexCenter};
  ${absoluteCenter};
  flex-direction: column;
`;

const TitleContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-bottom: 40px;
`;

const Title = styled.div`
  ${fontSuitBold};
  font-size: 28px;
  margin-bottom: 8px;
  color: #ffffff;
  height: 40px;
`;

const SubTitleBlock = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
`;

const Word = styled.span`
  margin: 0 8px;
`;

const Paragraph = styled.span`
  margin-left: 8px;
`;

const CardList = styled.div`
  position: relative;
`;

const buttonCss = css`
  ${marginBottom(16)};
  ${marginTop(32)};
`;

const LinkTextButton = styled(Link)`
  font-weight: 700;
  font-size: 13px;
  color: #a5a5a5;
  text-decoration: none;
  cursor: pointer;
  ${fontSuitRegular};

  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  data: {
    id: number;
    singer: string;
    song: string;
    musicList: string[];
    isEvaluated: boolean;
  };
}

const tooltipCss = css`
  position: absolute;
  bottom: -16px;
  left: 35%;
`;

export default function ResultPage(props: Props) {
  const [visible, setVisible] = useState(false);

  const onCopyClick = async () => {
    const currentUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(currentUrl);
      setVisible(true);
    } catch (err) {
      console.error("URL을 복사하는데 실패했습니다.", err);
    }

    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>DJ303이 준비한 플레이리스트</Title>
        <SubTitleBlock>
          <Chip text={props.data.singer} />
          <Word>의</Word>
          <Chip text={props.data.song} />
          <Paragraph>를 기반으로 추천된 플레이리스트에요.</Paragraph>
        </SubTitleBlock>
      </TitleContainer>
      <CardList>
        {props.data.musicList.map((music, index) => (
          <MusicCard key={music + index} title={music} />
        ))}
        {visible && <Tooltip css={tooltipCss} text="플레이리스트 링크가 복사되었어요!" />}
      </CardList>
      <Button css={buttonCss} text="공유하기" onClick={onCopyClick} />
      <LinkTextButton href="/playlist">DJ303이 추천한 다른 플레이리스트 보러가기</LinkTextButton>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios(`http://49.50.173.203/gptApi/${context.params?.id}`);

  return {
    props: {
      data,
    },
    revalidate: 2592000,
  };
};

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

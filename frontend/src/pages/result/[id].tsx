import Button from "@/components/Button";
import Chip from "@/components/Chip";
import MusicCard from "@/components/MusicCard";
import SurveyModal from "@/components/SurveyModal";
import Tooltip from "@/components/Tooltip";
import {
  flexCenter,
  flexColumnCenter,
  fontSuitBold,
  fontSuitRegular,
  marginBottom,
  marginTop,
  mobileView,
} from "@/styles/mixins";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

const Container = styled.div`
  ${flexColumnCenter};
  flex-direction: column;

  ${mobileView} {
    width: 100%;
  }
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

  ${mobileView} {
    word-break: keep-all;
    margin-bottom: 24px;
  }
`;

const SubTitleBlock = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;

  ${mobileView} {
    flex-wrap: wrap;
  }
`;

const Word = styled.span`
  margin: 0 8px;
`;

const Paragraph = styled.span`
  margin-left: 8px;

  ${mobileView} {
    &:last-child {
      margin-left: 0;
      margin-top: 12px;
    }
  }
`;

const CardList = styled.div`
  position: relative;

  ${mobileView} {
    width: 100%;
  }
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
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(true);

  const onCopyClick = async () => {
    const currentUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(currentUrl);
      setTooltipVisible(true);
    } catch (err) {
      console.error("URL을 복사하는데 실패했습니다.", err);
    }

    setTimeout(() => {
      setTooltipVisible(false);
      setModalOpen(true);
    }, 3000);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      setModalOpen(false);
    }
  });

  return (
    <Container>
      <TitleContainer>
        <Title>DJ303이 준비한 플레이리스트</Title>
        <SubTitleBlock>
          <Chip text={props.data.singer} />
          <Word>의</Word>
          <Chip text={props.data.song} />
          <Paragraph>를</Paragraph>
          <Paragraph>기반으로 추천된 플레이리스트에요.</Paragraph>
        </SubTitleBlock>
      </TitleContainer>
      <CardList>
        {props.data.musicList.map((music, index) => (
          <MusicCard key={music + index} title={music} />
        ))}
        {tooltipVisible && <Tooltip css={tooltipCss} text="플레이리스트 링크가 복사되었어요!" />}
      </CardList>
      <Button css={buttonCss} text="공유하기" onClick={onCopyClick} />
      <LinkTextButton href="/playlist">DJ303이 추천한 다른 플레이리스트 보러가기</LinkTextButton>
      <SurveyModal open={isModalOpen} handleModalClose={handleModalClose} />
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

import PlaylistCard from "@/components/PlayListCard";
import { flexCenter, fontSuitBold, fontSuitRegular, mobileView } from "@/styles/mixins";
import styled from "@emotion/styled";
import axios from "axios";

const Container = styled.div`
  ${flexCenter};
  flex-direction: column;

  ${mobileView} {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  label: PlayListTitleContainer;
  margin-bottom: 40px;
  text-align: center;

  ${mobileView} {
    margin-bottom: 48px;
    text-align: left;
  }
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  ${fontSuitBold};
  margin-bottom: 8px;

  ${mobileView} {
    word-break: keep-all;
    margin-bottom: 24px;
  }
`;

const SubTitle = styled.div`
  ${fontSuitRegular};
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
`;

const PlayList = styled.div`
  label: PlayList;

  ${mobileView} {
    width: 100%;
  }
`;

interface Props {
  data: {
    id: number;
    singer: string;
    song: string;
  }[];
}

export default function PlaylistPage(props: Props) {
  return (
    <Container>
      <TitleContainer>
        <Title>DJ303이 준비한 플레이리스트</Title>
        <SubTitle>다른 사람들은 어떤 플레이리스트를 추천받았을까요?</SubTitle>
      </TitleContainer>
      <PlayList>
        {props.data.map(({ id, singer, song }) => (
          <PlaylistCard key={id} id={id} singer={singer} song={song} />
        ))}
      </PlayList>
    </Container>
  );
}

export async function getServerSideProps() {
  const { data } = await axios("http://49.50.173.203/gptApi/feed");

  return {
    props: {
      data: data.list,
    },
  };
}

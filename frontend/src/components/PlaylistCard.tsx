import * as React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  background: #242424;
  width: 744px;
  border-radius: 8px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  padding: 24px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: #ffffff;
`;

const Singer = styled.div`
  padding: 8px;
  background: #333333;
  margin-bottom: 8px;
  width: fit-content;
  border-radius: 4px;
`;

const Song = styled.div`
  padding: 8px;
  background: #333333;
  width: fit-content;
  border-radius: 4px;
`;

const LinkIcon = styled(Link)`
  width: 97px;
  text-align: right;
`;

interface Props {
  id: number;
  singer: string;
  song: string;
}

const PlaylistCard: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <TitleContainer>
        <Singer>{props.singer}</Singer>
        <Song>{props.song}</Song>
      </TitleContainer>
      <LinkIcon href={`/result/${props.id}`}>
        <Image src="/play-icon.png" alt="play icon" width="24" height="24" />
      </LinkIcon>
    </Container>
  );
};

export default PlaylistCard;

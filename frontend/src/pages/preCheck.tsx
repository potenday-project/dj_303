import Button from "@/components/Button";
import { flexCenter, fontSuitBold, mobileView } from "@/styles/mixins";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

const Container = styled.div`
  ${flexCenter};
  flex-direction: column;

  ${mobileView} {
    align-items: baseline;
  }
`;

const Text = styled.div`
  color: #ffffff;
  margin-bottom: 84px;
  font-size: 28px;
  ${fontSuitBold};

  ${mobileView} {
    &:first-child {
      margin-bottom: 0;
    }
  }
`;

const LinkButton = styled(Link)`
  text-decoration: none;

  ${mobileView} {
    width: 100%;
  }
`;

export default function PreCheckPage() {
  const router = useRouter();

  return (
    <Container>
      <Text>DJ303의</Text>
      <Text>추천 플레이리스트를 열어보세요!</Text>
      <LinkButton href={`/result/${router.query.id}`}>
        <Button text="열어보기" />
      </LinkButton>
    </Container>
  );
}

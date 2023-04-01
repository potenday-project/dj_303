import Button from "@/components/Button";
import { flexCenter, fontSuitBold } from "@/styles/mixins";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

const Container = styled.div`
  ${flexCenter};
  flex-direction: column;
`;

const Text = styled.div`
  color: #ffffff;
  margin-bottom: 84px;
  font-size: 28px;
  ${fontSuitBold};
`;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

export default function PreCheckPage() {
  const router = useRouter();

  return (
    <Container>
      <Text></Text>
      <LinkButton href={`/result/${router.query.id}`}>
        <Button text="열어보기" />
      </LinkButton>
    </Container>
  );
}

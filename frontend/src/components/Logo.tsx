import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  padding: 12px;
`;

const LinkIcon = styled(Link)`
  text-decoration: none;
`;

const Logo: React.FC = () => {
  return (
    <Container>
      <LinkIcon href="/">
        <Image src="/logo.svg" width="100" height="30" alt="logo icon" />
      </LinkIcon>
    </Container>
  );
};

export default Logo;

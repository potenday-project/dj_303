import React, { ChangeEvent, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "./Button";
import Input from "./Input";
import { flexCenter, fontSuitBold, marginBottom, mobileView } from "../styles/mixins";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Loading from "./Loading";

const FormBlock = styled.form`
  width: 704px;
  height: 564px;
  background: #242424;
  ${flexCenter};
  flex-direction: column;
  border-radius: 16px;
  position: relative;

  ${mobileView} {
    width: auto;
    height: auto;
    padding: 48px 24px 24px;
  }
`;

const TitleWrapBlock = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-bottom: 54px;

  ${mobileView} {
    align-items: baseline;
    line-height: 30px;
  }
`;

const TitleBlock = styled.div`
  ${fontSuitBold}
  font-size: 24px;
  color: #ffffff;

  ${mobileView} {
    font-size: 20px;
    word-break: keep-all;
  }
`;

const labelCss = css`
  color: #ffffff;
  font-size: 14px;
  text-align: left;
  margin-bottom: 8px;
`;

const CharacterImage = styled(Image)`
  width: 140px;
  height: 180px;
  position: absolute;
  left: -80px;
  bottom: 2px;

  ${mobileView} {
    display: none;
  }
`;

const Form: React.FC = () => {
  const [singer, setSinger] = useState("");
  const [singerError, setSingerError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSinger = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSinger(value);

    if (value.length < 1 || value.length > 15) {
      setSingerError("1글자 이상 15글자 이하로 입력해주세요.");
    } else {
      setSingerError(null);
    }
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(e.target.value);

    if (value.length < 1 || value.length > 15) {
      setTitleError("1글자 이상 15글자 이하로 입력해주세요.");
    } else {
      setTitleError(null);
    }
  };

  const requestPlaylistAsk = async () => {
    setLoading(true);
    const { data } = await axios({
      method: "post",
      url: "http://49.50.173.203/gptApi/ask",
      data: {
        singer: singer,
        song: title,
      },
    });
    router.push({
      pathname: "/preCheck",
      query: { id: data.id },
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    requestPlaylistAsk();
  };

  const disabled = singerError !== null || titleError !== null || singer === "" || title === "";

  return loading ? (
    <Loading />
  ) : (
    <FormBlock>
      <TitleWrapBlock>
        <TitleBlock>좋아하는 노래를 말씀해주세요!</TitleBlock>
        <TitleBlock>DJ303이 비슷한 노래를 추천드릴게요</TitleBlock>
      </TitleWrapBlock>
      <Input
        label="가수"
        css={{
          label: labelCss,
          container: css`
            ${marginBottom(32)};
            height: 104px;
            ${mobileView} {
              ${marginBottom(20)}
            }
          `,
        }}
        placeholder="가수 이름을 입력해주세요."
        value={singer}
        onChange={handleSinger}
        errorMessage={singerError}
      />
      <Input
        label="제목"
        css={{
          label: labelCss,
          container: css`
            ${marginBottom(42)};
            height: 104px;

            ${mobileView} {
              ${marginBottom(56)}
            }
          `,
        }}
        placeholder="노래 제목을 입력해주세요."
        value={title}
        onChange={handleTitle}
        errorMessage={titleError}
      />
      <Button
        css={css`
          margin-top: auto;
        `}
        text="DJ303에게 보내기"
        disabled={disabled}
        onClick={handleSubmit}
      />
      <CharacterImage src="/test-back-img.png" alt="test back img" width="300" height="200" />
    </FormBlock>
  );
};

export default Form;

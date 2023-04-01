import {
  flexCenter,
  fontSuitBold,
  fontSuitMedium,
  fontSuitRegular,
  mobileView,
} from "@/styles/mixins";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import Input from "./Input";
import { isMobile } from "react-device-detect";
import Image from "next/image";

const Text = styled.div`
  font-size: 16px;
  ${fontSuitMedium};
  margin-bottom: 16px;
  color: #ffffff;
`;

const ScoreList = styled.div<{ isExtend: boolean }>`
  display: flex;
  margin-bottom: ${(props) => (props.isExtend ? "36px" : 0)};

  ${mobileView} {
    width: 100%;
  }
`;

const ScoreButton = styled.button<{ isSelected: boolean }>`
  ${fontSuitBold};
  font-size: 16px;
  color: #ffffff;
  ${flexCenter};
  margin-right: 24px;
  border-radius: 24px;
  padding: 12.5px 20.5px;
  background: #333333;
  outline: none;
  border: 1px solid #333333;
  border: ${(props) => (props.isSelected ? "1px solid #eb4853" : "transparent")};

  &:hover {
    border: 1px solid #eb4853;
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0;
  }

  ${mobileView} {
    padding: 10.5px 18.5px;
    margin-right: 11px;
  }
`;

const SubText = styled.div`
  ${fontSuitRegular};
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 16px;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#242424",
    padding: "24px 24px 36px",
    width: "528px",
    height: "auto",
    borderRadius: "16px",
    border: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(0, 0, 0, 0.7)",
  },
};

const mobileStyles = {
  content: {
    ...customStyles.content,
    width: "74%",
  },
  overlay: {
    ...customStyles.overlay,
  },
};

const inputCss = css`
  width: 480px;
  margin-bottom: 36px;
`;

const Score = ({
  score,
  onClick,
  isSelected,
}: {
  score: number;
  onClick: () => void;
  isSelected: boolean;
}) => {
  return (
    <ScoreButton onClick={onClick} isSelected={isSelected}>
      {score}
    </ScoreButton>
  );
};

const IconWrap = styled.div`
  margin-bottom: 12px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const CloseIcon = styled(Image)``;

const CloseIconButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
`;

interface Props {
  open: boolean;
  handleModalClose: () => void;
}

const SurveyModal: React.FC<Props> = (props: Props) => {
  const [star, setStar] = useState<number | null>(null);
  const [reason, setReason] = useState("");
  const router = useRouter();

  const handleReason = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setReason(value);
  };

  const handleScore = (score: number) => {
    setStar(score);
  };

  const onSurveyClick = async () => {
    await axios({
      method: "put",
      url: "http://49.50.173.203/gptApi/review",
      data: {
        id: Number(router.query.id),
        star: star,
        review: reason,
      },
    });
  };

  return (
    <Modal style={isMobile ? mobileStyles : customStyles} isOpen={props.open}>
      <IconWrap>
        <CloseIconButton onClick={props.handleModalClose}>
          <CloseIcon src="/close.svg" alt="close icon" width="16" height="16" />
        </CloseIconButton>
      </IconWrap>
      <Text>추천 플레이리스트가 얼마나 마음에 드시나요?</Text>
      <ScoreList isExtend={star !== null}>
        {[1, 2, 3, 4, 5].map((score, index) => (
          <Score
            key={score + index}
            score={score}
            onClick={() => handleScore(score)}
            isSelected={score === star}
          />
        ))}
      </ScoreList>
      {star !== null && (
        <>
          <SubText>해당 점수를 선택한 이유를 알려주세요!</SubText>
          <Input
            css={{ input: inputCss }}
            placeholder="이유를 알려주세요 (선택)"
            value={reason}
            onChange={handleReason}
          />
          <Button text="전송하기" onClick={onSurveyClick} />
        </>
      )}
    </Modal>
  );
};

export default SurveyModal;

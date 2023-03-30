import { css, cx } from "@emotion/css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { flexCenter, fontSuitBold, marginBottom } from "../../styles/mixins";

const formCss = css`
  width: 704px;
  height: 564px;
  background: #242424;
  ${flexCenter};
  flex-direction: column;
  border-radius: 16px;
`;

const titleWrapCss = css`
  ${flexCenter};
  flex-direction: column;
  margin-bottom: 54px;
`;

const titleCss = css`
  ${fontSuitBold};
  font-size: 24px;
  color: #ffffff;
`;

export default function CreatePage() {
  return (
    <div className={formCss}>
      <div className={titleWrapCss}>
        <div className={titleCss}>좋아하는 노래를 말씀해주세요!</div>
        <div className={titleCss}>DJ303이 비슷한 노래를 추천드릴게요</div>
      </div>
      <Input className={marginBottom(32)} placeholder="가수 이름을 입력해주세요." />
      <Input placeholder="노래 제목을 입력해주세요." />
      <Button text="DJ303에게 보내기" />
    </div>
  );
}

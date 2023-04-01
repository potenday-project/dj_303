import * as React from "react";
import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

const Container = styled.div<{ css: SerializedStyles | undefined }>`
  label: InputContainer;
  ${(props) => props.css};
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.span<{ css: SerializedStyles | undefined }>`
  ${(props) => props.css};
`;

interface DefaultInput {
  css: SerializedStyles | undefined;
  error: boolean;
}

const DefaultInput = styled.input<DefaultInput>`
  border-radius: 8px;
  background: #333333;
  color: #ffffff;
  width: 304px;
  height: 48px;
  padding: 0;
  outline: none;
  border: 1px solid transparent;
  font-size: 15px;
  padding-left: 16px;

  &::placeholder {
    color: #a5a5a5;
  }

  &:focus {
    border: ${(props) => (props.error ? "1px solid #EB4853" : "1px solid #ffffff")};
  }

  ${(props) => props.css};
`;

const ErrorMessage = styled.span`
  color: #eb4853;
  font-size: 14px;
  margin-top: 8px;
  text-align: right;
`;

const WarningIcon = styled(Image)`
  position: absolute;
  top: 44px;
  right: 15px;
`;

interface Props {
  css?: {
    container?: SerializedStyles;
    label?: SerializedStyles;
    input?: SerializedStyles;
  };
  placeholder: string;
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string | null;
}

const Input: React.FC<Props> = ({
  label,
  css,
  placeholder,
  value,
  onChange,
  errorMessage,
}: Props) => {
  return (
    <Container css={css?.container}>
      {label && <Label css={css?.label}>{label}</Label>}
      <DefaultInput
        placeholder={placeholder}
        css={css?.input}
        value={value}
        onChange={onChange}
        error={!!errorMessage}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {errorMessage && <WarningIcon src="/warning.svg" alt="warning icon" width="16" height="16" />}
    </Container>
  );
};

export default Input;

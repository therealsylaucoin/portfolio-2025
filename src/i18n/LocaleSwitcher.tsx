import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "./config";
import { LanguageButtonProps } from "./types";

const LocaleSwitcherWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 50px;
`;

const LanguageButton = styled.button<LanguageButtonProps>`
  background-color: ${(props) => (props.isActive ? "#A799B7" : "transparent")};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #95BF8F;
    color: #121E19;
  }
`;

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  return (
    <LocaleSwitcherWrapper>
      {Object.entries(supportedLngs).map(([code, name]) => (
        <LanguageButton
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          isActive={i18n.resolvedLanguage === code}
        >
          {name}
        </LanguageButton>
      ))}
    </LocaleSwitcherWrapper>
  );
}
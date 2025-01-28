import React from "react";
import styled from "styled-components";
import DynamicText from "../shared/dynamicText";
import { theme, device } from "../../styles/theme";

const { mauve } = theme.colors;
const { xl, base } = theme.fonts;
const { tablet } = device;

const Footer_Id = "footer";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 60vh;

  @media ${tablet} {
    flex-direction: row-reverse;
  }
`;

const TextContainer = styled.div`
  @media ${tablet} {
    align-self: flex-end;
  }
`;

const StyledButton = styled.button<{ borderColor: string; textColor: string }>`
  border: 1px solid ${({ borderColor }) => borderColor};
  color: ${({ textColor }) => textColor};
  background-color: transparent;
  border-radius: 25px;
  padding: 0 25px;
  cursor: pointer;
  margin: 100px 0 50px;
`;

const LocaleSwitcher = React.lazy(() => import("../../i18n/LocaleSwitcher"));

const Header = () => {
  const scrollToFooter = () => {
    const element = document.getElementById(Footer_Id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <LocaleSwitcher />
      <TextContainer>
        <DynamicText type="h1" t="heading" size={xl} />
        <DynamicText type="h2" t="subheading" color={mauve} fontWeight="lighter" />
        <StyledButton borderColor={mauve} textColor={mauve} onClick={scrollToFooter}>
          <DynamicText t="headerLink" size={base} />
        </StyledButton>
      </TextContainer>
    </Wrapper>
  );
};

export default Header;
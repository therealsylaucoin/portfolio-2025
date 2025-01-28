import styled from "styled-components";
import LocaleSwitcher from "../../i18n/LocaleSwitcher";
import DynamicText from "../shared/dynamicText";
import { theme, device } from "../../styles/theme";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 60vh;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row-reverse;
  }
`;

const StyledButton = styled.button`
  border: 1px solid ${theme.colors.mauve};
  color: ${theme.colors.mauve};
  background-color: transparent;
  border-radius: 25px;
  padding: 0 25px;
  cursor: pointer;
  margin-top: 100px;
`

const Header = () => {
  const scrollToFooter = () => {
    const element = document.getElementById('footer');
    element?.scrollIntoView({
      behavior: 'smooth'
    }); 
  };

    return (
    <Wrapper>
      <LocaleSwitcher/>
      <div>
        <DynamicText type="h1" t="heading" size={theme.fonts.xl}/>
        <DynamicText type="h2" t="subheading" color={theme.colors.mauve} fontWeight="lighter"/>
        <StyledButton onClick={scrollToFooter}>
          <DynamicText t="headerLink" size={theme.fonts.base}/>
        </StyledButton>
      </div>
    </Wrapper>
  );
};

export default Header;
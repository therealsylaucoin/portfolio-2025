import LocaleSwitcher from "../../i18n/LocaleSwitcher";
import DynamicText from "../shared/dynamicText";
import styled from "styled-components";
import { theme, device } from "../../styles/theme";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 60vh;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    flex-direction: row;
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
  return (
    <Wrapper>
      <div>
        <DynamicText type="h1" t="heading" size={theme.fonts.xl}/>
        <DynamicText type="h2" t="subheading" color={theme.colors.mauve} fontWeight="lighter"/>
        <StyledButton onClick={() => {
          const element = document.getElementById('footer');
          element?.scrollIntoView({
            behavior: 'smooth'
          }); 
        }}>
          <DynamicText t="headerLink" size={theme.fonts.base}/>
        </StyledButton>
      </div>
      <LocaleSwitcher/>
    </Wrapper>
  );
};

export default Header;
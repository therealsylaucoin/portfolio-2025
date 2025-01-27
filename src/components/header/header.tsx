import LocaleSwitcher from "../../i18n/LocaleSwitcher";
import DynamicText from "../shared/dynamicText";
import DynamicLink from "../shared/dynamicLink";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 60vh;
`;

const Header = () => {
  return (
    <Wrapper>
      <div>
        <DynamicText type="h1" t="heading" size={theme.fonts.xl}/>
        <DynamicText type="h2" t="subheading" color={theme.colors.mauve} fontWeight="lighter"/>
        <DynamicLink t="headerLink" href="/" ariaLabel=""/>
      </div>
      <LocaleSwitcher/>
    </Wrapper>
  );
};

export default Header;
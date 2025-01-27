import LocaleSwitcher from "../../i18n/LocaleSwitcher";
import DynamicText from "../shared/dynamicText";
import DynamicLink from "../shared/dynamicLink";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Header = () => {
  return (
    <Wrapper>
      <div>
        <DynamicText type="h1" t="heading" fontWeight="lighter" size="4rem"/>
        <DynamicText type="h2" t="subheading" color="#A799B7" fontWeight="lighter"/>
        <DynamicLink t="headerLink" href="/" ariaLabel=""/>
      </div>
      <LocaleSwitcher/>
    </Wrapper>
  );
};

export default Header;
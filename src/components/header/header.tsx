import LocaleSwitcher from "../../i18n/LocaleSwitcher";
import DynamicText from "../shared/dynamicText";

const Header = () => {
  return (
    <header>
      <DynamicText type="h1" t="heading"/>
      <DynamicText type="h2" t="subheading"/>
      <LocaleSwitcher/>
    </header>
  );
};

export default Header;
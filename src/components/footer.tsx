import { useTranslation } from "react-i18next";
import DynamicLink from "./shared/dynamicLink";
import DynamicText from "./shared/dynamicText";

const Footer = () => {
    const { t, ready } = useTranslation();
    if (!ready) return "loading...";
    const socials = t("socials", { returnObjects: true }) as string[];

    return (
        <footer>
            <DynamicText t="getInTouch"/>
            <ul>
            {socials.map((social : any) => (
                <li key={social.name}>
                    <DynamicLink t={social.name} href={social.href} ariaLabel={social.ariaLabel}/>
                </li>
            ))}
            </ul>
            <DynamicText t="footer"/>
        </footer>
    );
};

export default Footer;

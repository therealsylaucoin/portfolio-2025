import { useTranslation } from "react-i18next";
import DynamicLink from "../shared/dynamicLink";
import DynamicText from "../shared/dynamicText";
import { SocialProps } from "./types";

const Footer = () => {
    const { t, ready } = useTranslation();
    if (!ready) return "loading...";
    const socials = t("socials", { returnObjects: true }) as SocialProps[];

    return (
        <footer id="footer">
            <DynamicText t="getInTouch" size="3rem"/>
            <ul>
            {socials.map(({name, href, ariaLabel}) => (
                <li key={name}>
                    <DynamicLink t={name} href={href} ariaLabel={ariaLabel}/>
                </li>
            ))}
            </ul>
        </footer>
    );
};

export default Footer;

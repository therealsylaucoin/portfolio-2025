import { useTranslation } from "react-i18next";
import DynamicLink from "../shared/dynamicLink";
import DynamicText from "../shared/dynamicText";
import { SocialProps } from "./types";
import styled from "styled-components";

const ListItem = styled.li`
    text-align: right;
`

const Footer = () => {
    const { t, ready } = useTranslation();
    if (!ready) return "loading...";
    const socials = t("socials", { returnObjects: true }) as SocialProps[];

    return (
        <footer>
            <DynamicText t="getInTouch" size="3rem"/>
            <ul>
            {socials.map(({name, href, ariaLabel}) => (
                <ListItem key={name}>
                    <DynamicLink t={name} href={href} ariaLabel={ariaLabel}/>
                </ListItem>
            ))}
            </ul>
        </footer>
    );
};

export default Footer;

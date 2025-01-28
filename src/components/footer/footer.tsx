import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Loading from "../shared/loading";
import DynamicLink from "../shared/dynamicLink";
import DynamicText from "../shared/dynamicText";
import { SocialProps } from "./types";
import { theme, device } from "../../styles/theme";

const ListItem = styled.li`
    padding: 16px 16px 16px 0;
`

const Footnote = styled.p`
    margin-top: 50px;
    margin-bottom: 0;
    text-align: center;

    @media ${device.tablet} {
        margin-bottom: -30px;
    }
`

const Footer = () => {
    const { t, ready } = useTranslation();
    if (!ready) return <Loading/>;
    const socials = t("socials", { returnObjects: true }) as SocialProps[];

    return (
        <footer id="footer">
            <DynamicText t="getInTouch" size={theme.fonts.l}/>
            <ul>
            {socials.map(({name, href, ariaLabel}) => (
                <ListItem key={name}>
                    <DynamicLink t={name} href={href} ariaLabel={ariaLabel}/>
                </ListItem>
            ))}
            </ul>
            <Footnote>
                <DynamicText type="span" t="footnote" size={theme.fonts.sm}/>
            </Footnote>
        </footer>
    );
};

export default Footer;

import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { SocialProps } from "./types";
import { theme } from "../../styles/theme";

const { sm, l } = theme.fonts;

const ListItem = styled.li`
  padding: 16px 16px 16px 0;
`;

const Footnote = styled.p`
  margin-top: 50px;
  margin-bottom: 0;
  text-align: center;
`;

const Loading = React.lazy(() => import("../loading/loading"));
const DynamicLink = React.lazy(() => import("../shared/dynamicLink"));
const DynamicText = React.lazy(() => import("../shared/dynamicText"));

const Footer = () => {
  const { t, ready } = useTranslation();

  if (!ready) return <Loading />;

  const socials = useMemo(
    () => (t("socials", { returnObjects: true }) as SocialProps[]) || [],
    [t]
  );

  const SocialLink = ({ name, href, ariaLabel }: SocialProps) => (
    <ListItem>
      <DynamicLink t={name} href={href} ariaLabel={ariaLabel} />
    </ListItem>
  );

  return (
    <footer id="footer">
      <DynamicText t="getInTouch" size={l} />
      <ul>
      {socials.map((social) => (
        <SocialLink key={social.name} {...social} />
      ))}
      </ul>
      <Footnote>
        <DynamicText type="span" t="footnote" size={sm} />
      </Footnote>
    </footer>
  );
};

export default Footer;
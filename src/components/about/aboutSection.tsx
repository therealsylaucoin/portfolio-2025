import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { AboutProps, Assets } from "./types";
import { theme, device } from "../../styles/theme";

const { hunter, green } = theme.colors;
const { l } = theme.fonts;
const { tablet } = device;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${hunter};
  padding: 0;

  @media ${tablet} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  padding: 20px;

  @media ${tablet} {
    padding: 50px;
  }
`;

const ImageContainer = styled.div`
  background-image: url(${Assets.Headshot_Bg});
  display: flex;
  justify-content: center;

  @media ${tablet} {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const Image = styled.img.attrs({
  src: Assets.Headshot,
})`
  max-width: 400px;
  max-height: 602px;
  overflow: auto;
`;

const Loading = React.lazy(() => import("../loading/loading"));
const DynamicText = React.lazy(() => import("../shared/dynamicText"));

const AboutSection = () => {
  const { t, ready } = useTranslation();

  if (!ready)
    return (
      <Loading />
    );

  const about = useMemo(
    () => (t("about", { returnObjects: true }) as AboutProps[]) || [],
    [t]
  );

  return (
    <Wrapper>
    <TextContainer>
      <DynamicText type="h2" t="aboutHeading" color={green} size={l} />
      {about.map(({ type, copy }, index) => (
        <DynamicText key={index} type={type} t={copy} />
      ))}
    </TextContainer>
    <ImageContainer>
      <Image aria-label={t("headshotAriaLabel")} />
    </ImageContainer>
  </Wrapper>
  );
};

export default AboutSection;
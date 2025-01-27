import { useTranslation } from "react-i18next";
import DynamicText from "../shared/dynamicText";
import { AboutProps } from "./types";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.hunter};
  padding: 0;
`;

const TextContainer = styled.div`
  padding: 50px;
`;

const ImageContainer = styled.div`
  background-image: url("src/assets/headshotBg.png"); 
`

const AboutSection = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading...";
  const about = t("about", { returnObjects: true }) as AboutProps[];

  return (
    <Wrapper>
      <TextContainer>
        <DynamicText type="h2" t="aboutHeading" color={theme.colors.green}/>
        {about.map(({type, copy}, index) => (
          <DynamicText key={index} type={type} t={copy}/>
        ))}
      </TextContainer>
      <ImageContainer>
        <img src="src/assets/headshot.png" aria-label={t("headshotAriaLabel")}/>
      </ImageContainer>
    </Wrapper>
  );
};

export default AboutSection;
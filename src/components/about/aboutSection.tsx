import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Loading from "../loading/loading";
import DynamicText from "../shared/dynamicText";
import { AboutProps } from "./types";
import { theme, device } from "../../styles/theme";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.hunter};
  padding: 0;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  padding: 20px;
  @media ${device.tablet} {
    padding: 50px;
  }
`;

const ImageContainer = styled.div`
  background-image: url("/assets/headshotBg.png"); 
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: flex-end;
  }
`

const Image = styled.img`
  overflow: auto;
  max-width:400px;
  max-height: 602px;
`

const AboutSection = () => {
  const { t, ready } = useTranslation();
  if (!ready) return <Loading/>;
  const about = t("about", { returnObjects: true }) as AboutProps[];

  return (
    <Wrapper>
      <TextContainer>
        <DynamicText type="h2" t="aboutHeading" color={theme.colors.green} size={theme.fonts.l}/>
        {about.map(({type, copy}, index) => (
          <DynamicText key={index} type={type} t={copy}/>
        ))}
      </TextContainer>
      <ImageContainer>
        <Image src="/assets/headshot.png" aria-label={t("headshotAriaLabel")}/>
      </ImageContainer>
    </Wrapper>
  );
};

export default AboutSection;
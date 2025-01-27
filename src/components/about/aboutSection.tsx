import { useTranslation } from "react-i18next";
import DynamicText from "../shared/dynamicText";
import { AboutProps } from "./types";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #121E19;
`;

const AboutSection = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading...";
  const about = t("about", { returnObjects: true }) as AboutProps[];

  return (
    <Wrapper>
      <div>
        <DynamicText type="h2" t="aboutHeading" color="#95BF8F"/>
        {about.map(({type, copy}, index) => (
          <DynamicText key={index} type={type} t={copy}/>
        ))}
      </div>
      <div>
        <img src="src/assets/headshot.png" aria-label={t("headshotAriaLabel")}/>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
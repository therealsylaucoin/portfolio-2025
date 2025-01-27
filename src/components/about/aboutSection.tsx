import { useTranslation } from "react-i18next";
import DynamicText from "../shared/dynamicText";
import { AboutProps } from "./types";

const AboutSection = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading...";
  const about = t("about", { returnObjects: true }) as AboutProps[];

  return (
    <section>
      {about.map(({type, copy}, index) => (
        <DynamicText key={index} type={type} t={copy}/>
      ))}
      <img src="src/assets/headshot.png" aria-label={t("headshotAriaLabel")}/>
    </section>
  );
};

export default AboutSection;
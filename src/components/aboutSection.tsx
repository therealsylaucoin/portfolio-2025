import { useTranslation } from "react-i18next";
import DynamicText from "./shared/dynamicText";

const AboutSection = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading...";
  const about = t("about", { returnObjects: true }) as string[];

  return (
    <section>
      {about.map((a : any, index) => (
        <DynamicText key={index} type={a.type} t={a.copy}/>
      ))}
      <img src="src/assets/headshot.png" aria-label={t("headshotAriaLabel")}/>
    </section>
  );
};

export default AboutSection;
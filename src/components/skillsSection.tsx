import { useTranslation } from "react-i18next";
import DynamicText from "./shared/dynamicText";

const SkillsSection = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading...";

  const skillCategories = [
    { heading: "skillsFrontEndHeading", listKey: "skillsFrontEndList" },
    { heading: "skillsStylingHeading", listKey: "skillsStylingList" },
    { heading: "skillsMiscHeading", listKey: "skillsMiscList" },
  ];

  return (
    <section>
      <DynamicText type="h2" t="skillsHeading"/>
      <DynamicText t="skillsCopy"/>
      <DynamicText t="skillsTop"/>

      {skillCategories.map(({ heading, listKey }) => {
        const skills = t(listKey, { returnObjects: true }) as string[];
        return (
          <div key={heading}>
            <DynamicText type="h3" t={heading} />
            <ul>
              {skills.map((skill: string, index: number) => (
                <li key={`${skill}-${index}`}>
                  <DynamicText t={skill} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default SkillsSection;
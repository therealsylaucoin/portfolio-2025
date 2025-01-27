import { useTranslation } from "react-i18next";
import DynamicText from "../shared/dynamicText";
import styled from "styled-components";

const SkillTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  text-align: right;
  position: relative;
  left: 50%;
`;

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
      <DynamicText type="h2" t="skillsHeading" size="3rem"/>
      <DynamicText t="skillsCopy"/>
      <DynamicText t="skillsTop"/>

      {skillCategories.map(({ heading, listKey }) => {
        const skills = t(listKey, { returnObjects: true }) as string[];
        return (
          <SkillTypeWrapper key={heading}>
            <DynamicText type="h3" t={heading} color="#A799B7"/>
            <ul>
              {skills.map((skill: string, index: number) => (
                <li key={`${skill}-${index}`}>
                  <DynamicText type="span" t={skill}  />
                </li>
              ))}
            </ul>
          </SkillTypeWrapper>
        );
      })}
    </section>
  );
};

export default SkillsSection;
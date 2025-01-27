import { useTranslation } from "react-i18next";
import DynamicText from "../shared/dynamicText";
import styled from "styled-components";
import { theme, device } from "../../styles/theme";

const SkillTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 5rem;
  }
`
const Div1 = styled.div`
  @media ${device.tablet} {
    grid-area: 1 / 1 / 2 / 2;
  }
`
const Div2 = styled.div`
  @media ${device.tablet} {
    grid-area: 1 / 2 / 2 / 3;
  }
`

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
      <DynamicText type="h2" t="skillsHeading" size={theme.fonts.l}/>
      <GridWrapper>
        <Div1>
          <DynamicText t="skillsCopy"/>
          <DynamicText t="skillsTop"/>
        </Div1>
        <Div2>
        {skillCategories.map(({ heading, listKey }) => {
          const skills = t(listKey, { returnObjects: true }) as string[];
          return (
            <SkillTypeWrapper key={heading}>
              <DynamicText type="h3" t={heading} color={theme.colors.mauve}/>
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
        </Div2>
      </GridWrapper>
    </section>
  );
};

export default SkillsSection;
import { useTranslation } from "react-i18next";
import DynamicText from "../shared/dynamicText";
import Loading from "../loading";
import { ProjectsSectionProps } from "./types";
import Project from "./project";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const Wrapper = styled.section`
  background-color: ${theme.colors.hunter};
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProjectsSection = () => {
  const { t, ready } = useTranslation();
  if (!ready) return <Loading/>;
  const projects = t("projects", { returnObjects: true }) as ProjectsSectionProps[];

  return (
    <Wrapper>
      <DynamicText type="h2" t="projectsHeading" size={theme.fonts.l}/>
      <StyledList>
        {projects.map((project) => {
          console.log(project)
        return (
          <Project project={project}/>
        );
      })}
      </StyledList>
    </Wrapper>
  );
};

export default ProjectsSection;
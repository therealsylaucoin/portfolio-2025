import { useTranslation } from "react-i18next";
import DynamicText from "../shared/dynamicText";
import { ProjectsSectionProps } from "./types";
import Project from "./project";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #121E19;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

const ProjectsSection = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading...";
  const projects = t("projects", { returnObjects: true }) as ProjectsSectionProps[];

  return (
    <Wrapper>
      <DynamicText type="h2" t="projectsHeading" size="3rem"/>
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
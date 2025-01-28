import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Loading from "../shared/loading";
import Project from "./project";
import DynamicText from "../shared/dynamicText";
import { ProjectsSectionProps } from "./types";
import { theme } from "../../styles/theme";

const Wrapper = styled.section`
  background-color: ${theme.colors.hunter};
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;  
  gap: 1rem;
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
        return (
          <Project project={project}/>
        );
      })}
      </StyledList>
    </Wrapper>
  );
};

export default ProjectsSection;
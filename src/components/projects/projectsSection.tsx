import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Loading from "../loading/loading";
import Project from "./project";
import DynamicText from "../shared/dynamicText";
import { ProjectsSectionProps } from "./types";
import { theme } from "../../styles/theme";

const { hunter } = theme.colors;
const { l } = theme.fonts;

const Wrapper = styled.section`
  background-color: ${hunter};
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

  const projects = (t("projects", { returnObjects: true }) || []) as ProjectsSectionProps[];

  return (
    <Wrapper>
      <DynamicText type="h2" t="projectsHeading" size={l}/>
      <StyledList>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
      </StyledList>
    </Wrapper>
  );
};

export default ProjectsSection;
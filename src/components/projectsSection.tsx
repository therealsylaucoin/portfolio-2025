import { useTranslation } from "react-i18next";
import DynamicText from "./shared/dynamicText";
import DynamicLink from "./shared/dynamicLink";
import { ProjectProps } from "./types";

const ProjectsSection = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading...";
  const projects = t("projects", { returnObjects: true }) as ProjectProps[];

  return (
    <section>
      <DynamicText type="h2" t="projectsHeading"/>
      <DynamicText t="projectsCopy"/>

      <ul>
      {projects.map((project) => {
        return (
        <li key={project.title}>
          <DynamicText t={project.title} />
          <DynamicText t={project.description} />
          <DynamicLink href={project.liveUrl} t="projectsLiveLink" ariaLabel="projectsLiveLink"/>
          {project.githubUrl && (
            <DynamicLink href={project.githubUrl} t="projectsGithubLink" ariaLabel="projectsGithubLink"/>
          )}
          {project.demoUrl && (
            <DynamicLink href={project.demoUrl} t="projectsDemoLink" ariaLabel="projectsDemoLink"/>
          )}
          <img src={project.imageUrl} aria-label={`${t("projectsImgAriaLabel")}${project.title}`}/>
        </li>
        );
      })}
      </ul>
    </section>
  );
};

export default ProjectsSection;
import { useTranslation } from "react-i18next";
import DynamicLink from "../shared/dynamicLink";
import DynamicText from "../shared/dynamicText";
import { ProjectProps } from "./types";
import styled from "styled-components";

const Wrapper = styled.li`
  background-color: #121E19;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  border-radius: 25px;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 25px;
`

const Project = ({ project }: ProjectProps) => {
  const { title, description, liveUrl, githubUrl, demoUrl, imageUrl } = project;
  const { t } = useTranslation();

  return (
    <Wrapper key={title}>
      <div>
        <DynamicText t={title} color="#95BF8F" size="20px"/>
        <DynamicText t={description} />
        <DynamicLink href={liveUrl} t="projectsLiveLink" ariaLabel="projectsLiveAria"/>
        {githubUrl && (
          <DynamicLink href={githubUrl} t="projectsGithubLink"  ariaLabel="projectsGithubAria"/>
        )}
        {demoUrl && (
          <DynamicLink href={demoUrl} t="projectsDemoLink" ariaLabel="projectsDemoAria"/>
        )}
      </div>
      <ImageContainer>
        <Image src={imageUrl} aria-label={`${t("projectsImgAriaLabel")}${title}`}/>
      </ImageContainer>
    </Wrapper>
  );
};

export default Project;









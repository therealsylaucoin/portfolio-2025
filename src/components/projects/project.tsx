import styled from "styled-components";
import { useTranslation } from "react-i18next";
import DynamicLink from "../shared/dynamicLink";
import DynamicText from "../shared/dynamicText";
import { ProjectProps } from "./types";
import { theme, device } from "../../styles/theme";

const { green } = theme.colors;
const { md } = theme.fonts;
const { tablet, laptop } = device;

const Wrapper = styled.li`
  background-color: rgba(0, 0, 0, .25);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border-radius: 20px;

  @media ${tablet} {
    width: calc(50% - 40px);
  }

  @media ${laptop} {
    width: 26vw;
    max-width: 400px;
  }
`;

const ImageContainer = styled.div`
  border-radius: 25px;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 25px;
`
const LinkWrapper = styled.p`
  margin: 10px 0;
`;

const Project = ({ project }: ProjectProps) => {
  const { title, description, liveUrl, githubUrl, demoUrl, imageUrl } = project;
  const { t } = useTranslation();

  const links = [
    { 
      href: liveUrl, 
      tKey: "projectsLiveLink", 
      ariaKey: "projectsLiveAria" 
    },
    githubUrl && { 
      href: githubUrl, 
      tKey: "projectsGithubLink", 
      ariaKey: "projectsGithubAria" 
    },
    demoUrl && {
      href: demoUrl,
      tKey: "projectsDemoLink", 
      ariaKey: "projectsDemoAria" 
    },
  ].filter(Boolean); 

  return (
    <Wrapper key={title}>
      <div>
        <DynamicText t={title} color={green} size={md}/>
        <DynamicText t={description} />
        {links.map(({ href, tKey, ariaKey }: any) => (
          <LinkWrapper key={tKey}>
            <DynamicLink href={href} t={tKey} ariaLabel={ariaKey} />
          </LinkWrapper>
        ))}
      </div>
      <ImageContainer>
        <Image src={imageUrl} aria-label={`${t("projectsImgAriaLabel")}${title}`}/>
      </ImageContainer>
    </Wrapper>
  );
};

export default Project;
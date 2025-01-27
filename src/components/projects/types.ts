export interface ProjectsSectionProps {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  imageUrl: string;
  demoUrl?: string;
}

export interface ProjectProps {
  project: ProjectsSectionProps;
}
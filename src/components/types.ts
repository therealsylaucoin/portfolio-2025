
export interface ProjectProps {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  imageUrl: string;
  demoUrl?: string;
}

export interface SocialProps {
    name: string;
    ariaLabel: string;
    href: string;
}
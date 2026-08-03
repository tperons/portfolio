export interface TechBadge {
  name: string;
  color: 'cyan' | 'green' | 'purple' | 'orange' | 'pink';
}

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  techs: TechBadge[];
}

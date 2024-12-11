export interface TechStack {
    name: string;
    color: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    liveLink: string;
    githubLink: string;
    techStack: TechStack[];
  }
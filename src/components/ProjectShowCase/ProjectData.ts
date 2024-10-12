// data.ts
interface Project {
  Title: string;
  Timeline: string;
  description: string;
  point1: string;
  point2: string;
  AccentColor: string;
  ImgSRC: string; 
  GradientFrom: string; 
  GradientTo: string; 
  ImageTitle: string;
  Prop1: string;
  Prop2: string;
  Prop3: string;
}

interface Projects {
  Project1: Project;
  Project2: Project;
  Project3: Project;
}

export const Data: Projects = {
  Project1: {
    Title: "SkillNova",
    Timeline: "Sep'23",
    description: "Created a AI-powered education platform to streamline educational workflow, increasing efficiency and performance",
    point1: "Built the product from 0 → 1",
    point2: "Enhanced features for scalability",
    AccentColor: "#0a9396",
    ImgSRC: "/Images/SkillNova.png",
    GradientFrom: "#94d2bd",
    GradientTo: "#0a9396",
    ImageTitle: "How i simplified the daily grind of insurance brokers",
    Prop1: "AI-powered",
    Prop2: "SaaS",
    Prop3: "Streamlined operations"
  },
  Project2: {
    Title: "Room",
    Timeline: "Sep'23",
    description: "Designed an AI-powered SaaS for US insurance brokers to streamline operations, reducing overall TAT by 70%",
    point1: "Built the product from 0 → 1",
    point2: "Enhanced features for scalability",
    AccentColor: "#ec9f05",
    ImgSRC: "/Images/Room.png",
    GradientFrom: "#fcefb4",
    GradientTo: "#ec9f05",
    ImageTitle: "How i simplified the daily grind of insurance brokers",
    Prop1: "AI-powered",
    Prop2: "SaaS",
    Prop3: "Streamlined operations"
  },
  Project3: {
    Title: "TravLog",
    Timeline: "Sep'23",
    description: "Designed an AI-powered SaaS for US insurance brokers to streamline operations, reducing overall TAT by 70%",
    point1: "Built the product from 0 → 1",
    point2: "Enhanced features for scalability",
    AccentColor: "#7251b5",
    ImgSRC: "/Images/TravLog.png",
    GradientFrom: "#c19ee0",
    GradientTo: "#571089",
    ImageTitle: "How i simplified the daily grind of insurance brokers",
    Prop1: "AI-powered",
    Prop2: "SaaS",
    Prop3: "Streamlined operations"
  }
};

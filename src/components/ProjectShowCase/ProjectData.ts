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
    point1: "Interactive learning paths for students",
    point2: "Real-time progress tracking dashboard",
    AccentColor: "#0a9396",
    ImgSRC: "/Images/SkillNova.png",
    GradientFrom: "#94d2bd",
    GradientTo: "#0a9396",
    ImageTitle: "Streamlines personalized learning and progress tracking.",
    Prop1: "AI-powered",
    Prop2: "Resources",
    Prop3: "Streamlined operations"
  },
  Project2: {
    Title: "Room",
    Timeline: "Sep'23",
    description: "Discover elegant furniture designs for every space, enhancing your home’s beauty and comfort effortlessly.",
    point1: "Customizable furniture styles and designs",
    point2: "Augmented reality room preview tool",
    AccentColor: "#ec9f05",
    ImgSRC: "/Images/Room.png",
    GradientFrom: "#fcefb4",
    GradientTo: "#ec9f05",
    ImageTitle: "Simplifies furniture selection and visualization",
    Prop1: "Living",
    Prop2: "Decor",
    Prop3: "Elegance"
  },
  Project3: {
    Title: "TravLog",
    Timeline: "Sep'23",
    description: "Explore unique travel experiences, share adventures, and find personalized itineraries to enhance your journeys.",
    point1: "Personalized travel itineraries tailored for you",
    point2: "User-generated reviews and destination insights",
    AccentColor: "#7251b5",
    ImgSRC: "/Images/TravLog.png",
    GradientFrom: "#c19ee0",
    GradientTo: "#571089",
    ImageTitle: "Simplifies travel planning and destination selection.",
    Prop1: "Destinations",
    Prop2: "Itineraries",
    Prop3: "Reviews"
  }
};

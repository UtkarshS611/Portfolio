import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Medsync: A AI health assistant",
    description: "Medsync is a web application leveraging Google Gemini API to provide symptom checking, medication iteration analysis, and medical record insights.",
    imageUrl: "/Images/MedsyncShot1.png",
    liveLink: "https://medsync-five.vercel.app/",
    githubLink: "https://github.com/UtkarshS611/MedSync",
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
      { name: "Tailwind", color: "bg-teal-100 text-teal-800" },
      { name: "Gemini", color: "bg-green-100 text-green-800" }
    ]
  },
  {
    title: "Celestia - Explore the Universe",
    description: "A Web application based solely on NASA API to explore outer space and for educational purposes. Dont forget to star the repository",
    imageUrl: "/Images/Celestia.jpg",
    liveLink: "https://celestia-nu.vercel.app/",
    githubLink: "https://github.com/UtkarshS611/Celestia",
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Tailwind", color: "bg-teal-100 text-teal-800" },
      // { name: "Python", color: "bg-yellow-100 text-yellow-800" },
      // { name: "TensorFlow", color: "bg-orange-100 text-orange-800" },
      // { name: "MongoDB", color: "bg-green-100 text-green-800" }
    ]
  }
];
import React from 'react';
import { Github, SquareArrowOutUpRight, TagsIcon } from 'lucide-react';
import { Project } from '../../types/project';

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imageUrl,
  liveLink,
  githubLink,
  techStack,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <TagsIcon className="w-5 h-5 text-gray-500" />
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <SquareArrowOutUpRight className="w-4 h-4"  />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-black bg-black/10 rounded-lg hover:bg-black/40 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
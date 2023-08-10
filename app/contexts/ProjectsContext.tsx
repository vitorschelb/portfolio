"use client";
import { createContext, useContext, useState } from "react";
import projectsData, { Project } from "../shared/Data";

type ProjectsContextType = {
  currentIndex: number;
  pictures: string[];
  totalSlides: number;
  project: Project;
  prevSlide: () => void;
  nextSlide: () => void;
  setCurrentIndex: (index: number) => void;
};

type ProjectsProviderProps = {
  children: React.ReactNode;
};

const ProjectsContext = createContext<ProjectsContextType | undefined>(
  undefined
);


export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({
  children,
}) => {
  
    const [currentIndex, setCurrentIndex] = useState(0);

    const pictures = projectsData.map((project) => project.image.src);
    const totalSlides = projectsData.length
    const project = projectsData[currentIndex]

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const contextValue: ProjectsContextType = {
    currentIndex,
    pictures,
    totalSlides,
    project,
    prevSlide,
    nextSlide,
    setCurrentIndex,
  };

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

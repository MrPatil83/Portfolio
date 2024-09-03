// import React from "react";
import ProjectCard from "./ProjectsCard";
import { motion } from 'framer-motion';
import {FadeRight} from "../../Animation";

const ProjectsPage = () => {
  const projects = [
    {
      imgSrc: "../../../assets/projects/project.png",
      title: "Imperio Railing Systems",
      description: "Designed and developed the official website for Imperio Railing Systems, showcasing their premium railing solutions with a modern, user-friendly interface.",
      skills: [
        "../../../assets/skills/react.png",
        "../../../assets/skills/typescript.png",
        "../../../assets/skills/Tailwind.png",
        "../../../assets/skills/figma.png",
        
      ],
      demoLink: "https://www.imperiorailing.com/",
      sourceLink: "/",
    },
    {
      imgSrc: "../../../assets/projects/selectivesystemsproject.png",
      title: "Selective Systems",
      description: "Designed and developed the official website for Selective Systems, showcasing their premium windows solutions with a modern, user-friendly interface.",
      skills: [
        "../../../assets/skills/react.png",
        "../../../assets/skills/Tailwind.png",
        "../../../assets/skills/mongodb.png",
        "../../../assets/skills/node.png",
      ],
      demoLink: "https://selectivesystems.in/",
      sourceLink: "/",
    },
    {
      imgSrc: "../../../assets/projects/Risealloys.png",
      title: "Rise Alloys",
      description: "Crafted and launched the official website for Rise Alloys, highlighting their top-tier aluminum solutions through a sleek, intuitive, and user-centric design.",
      skills: [
        "../../../assets/skills/react.png",
        "../../../assets/skills/css.png",
        "../../../assets/skills/googleappscript.png",
      ],
      demoLink: "https://risealloys.com/",
      sourceLink: "/",
    },
    {
      imgSrc: "../../../assets/projects/Steadlersandscales.png",
      title: "Steadlers & Scales",
      description: "Explore our innovative project with Steadlers & Scales Interior Design. Check out the ongoing website to see our latest designs and updates.",
      skills: [
        "../../../assets/skills/react.png",
        "../../../assets/skills/Tailwind.png",
        "../../../assets/skills/mongodb.png",
        "../../../assets/skills/node.png", 
      ],
      demoLink: "https://interiorswebsite.vercel.app",
      sourceLink: "/",
    },
    {
      imgSrc: "../../../assets/projects/Solwin.png",
      title: "Solwin Enterprises",
      description: "Explore our project for Solwin Enterprises, a top player in home automation IT solutions. The site is in progress, featuring advanced technology for smarter living.",
      skills: [
        "../../../assets/skills/react.png",
        "../../../assets/skills/Tailwind.png",
        "../../../assets/skills/mongodb.png",
        "../../../assets/skills/node.png", 
      ],
      demoLink: "https://solwinenterprises.vercel.app/",
      sourceLink: "/",
    },
   
  ];

  return (
    <>
      <motion.h2
      variants={FadeRight(0.3)}
      initial="hidden"
      whileInView={"visible"}
       className="text-white text-4xl font-bold tracking-wide uppercase flex justify-start p-10 mx-14 "  id="projects">
        Projects
      </motion.h2>
    <div className=" mb-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2 md:mx-14 xl:grid-cols-3 xl:mx-[4rem] xl:p-4 xl:mb-0">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
    </>
  );
};

export default ProjectsPage;

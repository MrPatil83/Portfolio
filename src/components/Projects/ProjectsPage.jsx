// import React from "react";
import ProjectsCard from "./ProjectsCard"
import { motion } from 'framer-motion';
import { FadeRight } from "../../Animation";
import project from "../../../assets/projects/project.png";
import selectivesystemsproject from "../../../assets/projects/selectivesystemsproject.png";
import Risealloys from "../../../assets/projects/Risealloys.png";
import Rajgurusteel from "../../../assets/projects/Rajgurusteel.png";
import Steadlersandscales from "../../../assets/projects/Steadlersandscales.png";
import Solwin from "../../../assets/projects/Solwin.png";
import node from "../../../assets/skills/node.png"
import react from "../../../assets/skills/react.png";
import Tailwind from "../../../assets/skills/Tailwind.png";
import typescript from "../../../assets/skills/typescript.png";
import figma from "../../../assets/skills/figma.png";
import mongodb from "../../../assets/skills/mongodb.png";
import googleappscript from "../../../assets/skills/googleappscript.png";
import css from "../../../assets/skills/css.png";
import Next from "../../../assets/skills/Next.png";

const ProjectsPage = () => {
  const projects = [
    {
      imgSrc: project,
      title: "Imperio Railing Systems",
      description: "Designed and developed the official website for Imperio Railing Systems, showcasing their premium railing solutions with a modern, user-friendly interface.",
      skills: [
        react,
        typescript,
        Tailwind,
        figma,
      ],
      demoLink: "https://www.imperiorailing.com/",
      sourceLink: "/",
    },
    {
      imgSrc: selectivesystemsproject,
      title: "Selective Systems",
      description: "Designed and developed the official website for Selective Systems, showcasing their premium windows solutions with a modern, user-friendly interface.",
      skills: [
        react,
        Tailwind,
        mongodb,
        node,
      ],
      demoLink: "https://selectivesystems.in/",
      sourceLink: "/",
    },
    {
      imgSrc: Risealloys,
      title: "Rise Alloys",
      description: "Crafted and launched the official website for Rise Alloys, highlighting their top-tier aluminum solutions through a sleek, intuitive, and user-centric design.",
      skills: [
        react,
        css,
        googleappscript,
      ],
      demoLink: "https://risealloys.com/",
      sourceLink: "/",
    },
    {
      imgSrc: Rajgurusteel,
      title: "Rajguru Steel Industry",
      description: "Explore our innovative project with Rajguru Steel Industry. Check out our ongoing website to see our latest stainless steel railing designs and updates. Stay tuned for more!",
      skills: [
        mongodb,
        Next,
      ],
      demoLink: "https://ss-web-ten.vercel.app/",
      sourceLink: "/",
    },
    {
      imgSrc:Steadlersandscales,
      title: "Steadlers & Scales",
      description: "Explore our innovative project with Steadlers & Scales Interior Design. Check out the ongoing website to see our latest designs and updates.",
      skills: [
        react,
        Tailwind,
        mongodb,
        node,
      ],
      demoLink: "https://interiorswebsite.vercel.app",
      sourceLink: "/",
    },
    {
      imgSrc: Solwin,
      title: "Solwin Enterprises",
      description: "Explore our project for Solwin Enterprises, a top player in home automation IT solutions. The site is in progress, featuring advanced technology for smarter living.",
      skills: [
        react,
        Tailwind,
        mongodb,
        node,
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
        className="text-white text-4xl font-bold tracking-wide uppercase flex justify-start mt-28 mx-24 md:-mb-8"
        id="projects"
      >
        Projects
      </motion.h2>
      <div className="mb-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2 md:mx-14 xl:grid-cols-3 xl:mx-[4rem] xl:p-4 xl:mb-0">
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;

// // import React from "react";

// import styles from "./Projects.module.css";

// import projects from "../../data/projects.json";
// import { ProjectCard } from "./ProjectCard";

// export const Projects = () => {
//   return (
//     <section className={styles.container} id="projects">
//       <h2 className={styles.title}>Projects</h2>
//       <div className={styles.projects}>
//         {projects.map((project, id) => {
//           return <ProjectCard key={id} project={project} />;
//         })}
//       </div>
//     </section>
//   );
// };

// import React from "react";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="mt-19 mx-10 text-white" id="projects">
      <h2 className="text-3xl font-bold tracking-wide uppercase">
        Projects
      </h2>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4 w-full">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

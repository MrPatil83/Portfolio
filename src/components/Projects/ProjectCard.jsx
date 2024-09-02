// // import React from "react";
// import PropTypes from "prop-types";
// import styles from "./ProjectCard.module.css";
// import { getImageUrl } from "../../utils";

// export const ProjectCard = ({
//   project: { title, imageSrc, description, skills, demo, source },
// }) => {
//   return (
//     <div className={styles.container}>
//       <img
//         src={getImageUrl(imageSrc)}
//         alt={`Image of ${title}`}
//         className={styles.image}
//       />
//       <h3 className={styles.title}>{title}</h3>
//       <p className={styles.description}>{description}</p>
//       {skills && skills.length > 0 && (
//         <ul className={styles.skills}>
//           {skills.map((skill, id) => (
//             <li key={id} className={styles.skill}>
//               {skill}
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className={styles.links}>
//         {demo && (
//           <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
//             Demo
//           </a>
//         )}
//         {source && (
//           <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
//             Source
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// ProjectCard.propTypes = {
//   project: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     imageSrc: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     skills: PropTypes.arrayOf(PropTypes.string),
//     demo: PropTypes.string,
//     source: PropTypes.string,
//   }).isRequired,
// };

// ProjectCard.defaultProps = {
//   project: {
//     skills: [],
//     demo: null,
//     source: null,
//   },
// };


// import React from "react";
import PropTypes from "prop-types";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="flex flex-col rounded-lg bg-gradient-to-b from-[#576cbc] to-[#132a53] shadow-lg p-4 max-w-xs">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className="mb-6 rounded-xl h-48 w-80 object-cover -ml-3"
      />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-1.5 text-xl font-normal">{description}</p>
      {skills && skills.length > 0 && (
        <ul className="mt-3.5 flex flex-wrap gap-1.5 list-none">
          {skills.map((skill, id) => (
            <li
              key={id}
              className="text-xl font-normal rounded-full bg-gray-800 px-5 py-0.5"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex justify-around">
        {demo && (
          <a
            href={demo}
            className="text-2xl font-semibold text-white bg-blue-500 rounded-full px-5 py-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
        {source && (
          <a
            href={source}
            className="text-2xl font-semibold text-white bg-blue-500 rounded-full px-5 py-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    demo: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};

ProjectCard.defaultProps = {
  project: {
    skills: [],
    demo: null,
    source: null,
  },
};

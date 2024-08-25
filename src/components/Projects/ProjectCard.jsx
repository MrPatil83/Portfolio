// import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {skills && skills.length > 0 && (
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        {source && (
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
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

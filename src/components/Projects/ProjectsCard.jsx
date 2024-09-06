// import React from "react";
// import PropTypes from "prop-types";

// const ProjectCard = ({ imgSrc, title, description, skills, demoLink, sourceLink }) => {
//   return (
//     <div className="bg-transperant shadow-lg rounded-lg overflow-hidden max-w-sm">
//       {/* Project Image */}
//       <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />

//       {/* Card Content */}
//       <div className="p-6">
//         {/* Project Title */}
//         <h3 className="text-xl text-slate-200 font-semibold mb-2">{title}</h3>

//         {/* Project Description */}
//         <p className="text-slate-300 mb-4">{description}</p>

//         {/* Skills Used */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {skills.map((skill, index) => (
//             <img
//               key={index}
//               src={skill}
//               alt="Skill Icon"
//               className="h-8 w-8 object-contain "
//             />
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-between">
//           <a
//             href={demoLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Demo
//           </a>
//           <a
//             href={sourceLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
//           >
//             Source
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// // PropTypes for type checking
// ProjectCard.propTypes = {
//   imgSrc: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   skills: PropTypes.arrayOf(PropTypes.string).isRequired,
//   demoLink: PropTypes.string.isRequired,
//   sourceLink: PropTypes.string.isRequired,
// };

// export default ProjectCard;

  // import PropTypes from "prop-types";
  // import { useState } from "react";

  // const ProjectCard = ({ imgSrc, title, description, skills, demoLink, sourceLink }) => {
  //   const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');

  //   const handleMouseMove = (event) => {
  //     const rect = event.currentTarget.getBoundingClientRect();
  //     const x = (event.clientX - rect.left) / rect.width;
  //     const y = (event.clientY - rect.top) / rect.height;
  //     const rotateX = (y - 0.5) * -20; // Adjust rotation range for smoother effect
  //     const rotateY = (x - 0.5) * 20;  // Adjust rotation range for smoother effect
  //     setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  //   };

  //   const handleMouseLeave = () => {
  //     setTransform('rotateX(0deg) rotateY(0deg)');
  //   };

  //   return (
  //     <div
  //       className="relative w-[21rem] h-full mt-7 md:w-[21rem] md:h-[34rem] md:-ml-4 mx-auto lg:w-[27rem] lg:h-[34rem] md:mt-14 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-purple-500 to-blue-400 shadow-3xl perspective-1000"
  //       onMouseMove={handleMouseMove}
  //       onMouseLeave={handleMouseLeave}
  //     >
  //       {/* Card Content */}
  //       <div
  //         className="bg-[#05062D] rounded-2xl w-full h-full transition-transform duration-500 ease-out"
  //         style={{ transform }}
  //       >
        
  //         {/* Project Image */}
  //         <img src={imgSrc} alt={title} className=" w-[19.3rem] md:w-[19rem] md:h-[12rem]  lg:w-[25rem] lg:h-[15rem] object-cover mx-auto py-2 rounded-bl-full  mb-4" />

  //         {/* Project Title */}
  //         <h3 className="text-xl mx-4 text-slate-200 poppins-regular md:text-2xl md:mx-4 xl:text-3xl xl:mx-4 mb-2">{title}</h3>

  //         {/* Project Description */}
  //         <p className="text-slate-400 text-sm mx-4 raleway md:text-base md:mx-4 xl:text-lg xl:mx-5 mb-4">{description}</p>

  //         {/* Skills Used */}
  //         <div className="flex flex-wrap gap-2 mb-4">
  //           {skills.map((skill, index) => (
  //             <img
  //               key={index}
  //               src={skill}
  //               alt="Skill Icon"
  //               className=" ml-3 h-8 w-8 object-contain"
  //             />
  //           ))}
  //         </div>

  //         {/* Buttons */}
  //         <div className="flex justify-between">
  //           <a
  //             href={demoLink}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="bg-blue-500 text-white px-4 py-2 rounded raleway hover:bg-blue-600 ml-4 hover:scale-125 hover:rounded-3xl transition-transform duration-700"
  //           >
  //             Demo
  //           </a>
  //           <a
  //             href={sourceLink}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="bg-gray-800 text-white px-4 py-2 rounded raleway hover:bg-gray-900 mr-4 hover:scale-125 hover:rounded-3xl transition-transform duration-70"
  //           >
  //             Source
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // // PropTypes for type checking
  // ProjectCard.propTypes = {
  //   imgSrc: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   description: PropTypes.string.isRequired,
  //   skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  //   demoLink: PropTypes.string.isRequired,
  //   sourceLink: PropTypes.string.isRequired,
  // };

  // export default ProjectCard;

  import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({ imgSrc, title, description, skills, demoLink, sourceLink }) => {
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -20; // Adjust rotation range for smoother effect
    const rotateY = (x - 0.5) * 20;  // Adjust rotation range for smoother effect
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      className="relative w-[21rem] h-full mt-7 md:w-[21rem] md:h-[34rem] md:-ml-4 mx-auto lg:w-[27rem] lg:h-[34rem] md:mt-14 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-purple-500 to-blue-400 shadow-3xl perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Content */}
      <div
        className="bg-[#05062D] rounded-2xl w-full h-full transition-transform duration-500 ease-out"
        style={{ transform }}
      >
        
        {/* Project Image */}
        <img src={imgSrc} alt={title} className="w-[19.3rem] md:w-[19rem] md:h-[12rem] lg:w-[25rem] lg:h-[15rem] object-cover mx-auto py-2 rounded-bl-full mb-4" />

        {/* Project Title */}
        <h3 className="text-xl mx-4 text-slate-200 poppins-regular md:text-2xl md:mx-4 xl:text-3xl xl:mx-4 mb-2">{title}</h3>

        {/* Project Description */}
        <p className="text-slate-400 text-sm mx-4 raleway md:text-base md:mx-4 xl:text-lg xl:mx-5 mb-4">{description}</p>

        {/* Skills Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill}
              alt="Skill Icon"
              className="ml-3 h-8 w-8 object-contain"
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded raleway hover:bg-blue-600 ml-4 hover:scale-125 hover:rounded-3xl transition-transform duration-700"
          >
            Live
          </a>
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded raleway hover:bg-gray-900 mr-4 hover:scale-125 hover:rounded-3xl transition-transform duration-70"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

// PropTypes for type checking
ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  demoLink: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
};

export default ProjectCard;

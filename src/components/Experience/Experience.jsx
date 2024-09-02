// // import React from "react";

// import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";

// export const Experience = () => {
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         <div className={styles.skills}>
//           {skills.map((skill, id) => {
//             return (
//               <div key={id} className={styles.skill}>
//                 <div className={styles.skillImageContainer}>
//                   <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                 </div>
//                 <p>{skill.title}</p>
//               </div>
//             );
//           })}
//         </div>
//         <ul className={styles.history}>
//           {history.map((historyItem, id) => {
//             return (
//               <li key={id} className={styles.historyItem}>
//                 <img
//                   src={getImageUrl(historyItem.imageSrc)}
//                   alt={`${historyItem.organisation} Logo`}
//                 />
//                 <div className={styles.historyItemDetails}>
//                   <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
//                   <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
//                   <ul>
//                     {historyItem.experiences.map((experience, id) => {
//                       return <li key={id}>{experience}</li>;
//                     })}
//                   </ul>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// };


// import React from "react";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className="text-white mt-20 mx-10" id="experience">
      <h2 className="text-white text-3xl font-bold tracking-wide uppercase">
        Experience
      </h2>
      <div className="flex flex-row justify-evenly mt-3.5 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-[45%] flex flex-wrap gap-9 justify-center lg:justify-start">
          {skills.map((skill, id) => (
            <div key={id} className="flex flex-col items-center gap-2.5">
              <div className="bg-gray-700 rounded-full flex items-center justify-center w-30 h-30">
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-xl font-medium">{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className="w-full lg:w-[45%] flex flex-col gap-10">
          {history.map((historyItem, id) => (
            <li
              key={id}
              className="flex flex-row items-center gap-4 bg-gradient-to-r from-[#19376d] to-transparent rounded-lg p-6"
            >
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
                className="w-12 h-12 object-contain"
              />
              <div className="font-roboto">
                <h3 className="text-2xl font-medium">
                  {`${historyItem.role}, ${historyItem.organisation}`}
                </h3>
                <p className="text-lg font-light">
                  {`${historyItem.startDate} - ${historyItem.endDate}`}
                </p>
                <ul className="mt-1.5 list-disc list-inside text-xl ml-4">
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

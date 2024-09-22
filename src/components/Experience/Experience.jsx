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
import { motion } from 'framer-motion';
import {FadeRight,FadeUp} from "../../Animation";

export const Experience = () => {
  return (
    <section className="text-white mt-20 mx-1 xl:px-14" id="experience">
      <div className=" flex gap-[20rem]">
        <motion.h2
      variants={FadeRight(0.3)}
      initial="hidden"
      whileInView={"visible"}
       className="text-white text-4xl mx-auto px-20 lg:mx-[4rem]  xl:text-4xl font-bold tracking-wide uppercase flex justify-start xl:mx-12 md:mb-4 lg:text-3xl">
        Skills
      </motion.h2>
      
      </div>
      <div className=" mx-auto grid lg:grid-cols-2 items-center">
        <div className=" py-8 mb-10 lg:mb-4 lg:h-[25rem] lg:w-[20rem] lg:-mt-[6rem] xl:h-[31rem] xl:w-[24rem] grid grid-cols-3 gap-4 -px-14 md:grid-cols-4 md:gap-2 lg:grid-cols-3 lg:gap-9 mx-10">
          {skills.map((skill, id) => (
            <div key={id} className="flex flex-col items-center gap-3">
              <div className="bg-gray-700 rounded-full flex items-center justify-center w-30 h-30">
              <motion.img
                variants={FadeUp(0.3)}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1.3 }} // This adds the scaling effect on hover
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                className=" mx-auto h-[2.8rem] w-[2.8rem] md:h-[2.3rem] md:w-[2.3rem] lg:h-[3rem] lg:w-[3rem] xl:w-[3.5rem] xl:h-[3.5rem] object-contain shadow-2xl cursor-pointer transition-transform duration-400 ease-linear" // Remove hover:scale-110 since it's handled by Framer Motion
              ></motion.img>
              </div>
              <motion.p
               variants={FadeRight(0.5)}
               initial="hidden"
               whileInView={"visible"}
               className=" text-[0.800rem] md:text-sm lg:text-base xl:text-xl raleway">{skill.title}</motion.p>
            </div>
          ))}
        </div>
        
        <motion.ul
         variants={FadeUp(0.5)}
         initial="hidden"
         whileInView={"visible"}
         className=" w-[100%] mx-2 md:w-[76%] md:py-4 md:mx-[6rem] lg:w-full xl:w-[85%] grid grid-cols-1 gap-6 mb-4">
            <motion.h2
      variants={FadeRight(0.3)}
      initial="hidden"
      whileInView={"visible"}
       className="text-white text-4xl mx-auto px-20 md:mx-[6rem]  xl:text-4xl font-bold tracking-wide uppercase flex justify-start xl:mx-12 md:-mt-14 lg:text-3xl">
        Experience
      </motion.h2>
          {history.map((historyItem, id) => (
            <li
              key={id}
              className="flex flex-row items-center gap-4 bg-gradient-to-r from-[#19376d] py-2 to-transparent rounded-ee-full h-auto my-auto lg:p-4 xl:p-6"
            >
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
                className=" h-[2.5rem] w-[2.5rem] mx-2 md:h-[2.3rem] md:w-[2.3rem] md:mx-4 lg:h-[3rem] lg:w-[3rem] xl:w-[4rem] xl:h-[4rem] object-contain hover:scale-125 cursor-pointer transition-transform duration-500"
              />
              <div className="poppins-regular">
                <h3 className=" text-sm md:text-base lg:text-xl xl:text-2xl font-medium">
                  {`${historyItem.role}, ${historyItem.organisation}`}
                </h3>
                <p className=" text-slate-400 text-[0.800rem] md:text-[0.750rem] lg:text-sm raleway">
                  {`${historyItem.startDate} - ${historyItem.endDate}`}
                </p>
                <ul className="mt-1.5 md:list-disc text-[0.700rem] raleway md:list-inside md:text-sm text-slate-300 lg:base xl:text-xl md:ml-4">
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

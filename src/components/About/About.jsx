// // import React from "react";

// import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";

// export const About = () => {
//   return (
//     <section className={styles.container} id="about">
//       <h2 className={styles.title}>About</h2>
//       <div className={styles.content}>
//         <img
//           src={getImageUrl("about/aboutImage.png")}
//           alt="Me sitting with a laptop"
//           className={styles.aboutImage}
//         />
//         <ul className={styles.aboutItems}>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Frontend Developer</h3>
//               <p>
//                 Im a frontend developer with experience in building responsive
//                 and optimized sites
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Backend Developer</h3>
//               <p>
//                 I have experience developing fast and optimised back-end systems
//                 and APIs
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
//             <div className={styles.aboutItemText}>
//               <h3>UI Designer</h3>
//               <p>
//                 I have designed multiple landing pages and have created design
//                 systems as well
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// import React from "react";

import { getImageUrl } from "../../utils";
import "./About.css";
import { motion } from 'framer-motion';
import {FadeUp,FadeLeft,FadeRight} from "../../Animation";

export const About = () => {
  return (
    <section
      className="relative bg-black/60  rounded-3xl py-18 mt-32 z-10 mx-10 "
      id="about"
    >
      <motion.h2
      variants={FadeRight(0.3)}
      initial="hidden"
      whileInView={"visible"}
       className="text-white text-4xl font-bold tracking-wide uppercase flex justify-start p-10">
        About US
      </motion.h2>
      <div className="grid xl:grid-cols-3 gap-4 items-center">
        <motion.img
        variants={FadeUp(0.3)}
        initial="hidden"
        whileInView={"visible"}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className=" mx-auto px-4 md:h-[10rem] md:w-[19rem] md:mx-[5rem] lg:h-[12rem] lg:w-[20rem] lg:pb-4 lg:mx-[15rem] xl:h-[17rem] xl:w-[30rem] flex xl:mx-10"
        ></motion.img>
      <motion.ul
          variants={FadeLeft(0.3)}
          initial="hidden"
          whileInView={"visible"}
         className="text-white grid grid-cols-1 lg:ml-[10rem] md:ml-4 poppins-regular gap-4">
      <li className="relative flex flex-row items-center rounded-lg list-none p-6 bg-expand-on-hover hover:bg-expand-on-hover">
        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
        <div className="ml-4">
          <h3 className="text-base poppins-regular mx-auto font-semibold md:text-[1.35rem] lg:text-[1.60rem] xl:text-2xl xl-w-[14rem]">Frontend Developer</h3>
          <p className="text-sm raleway mx-auto md:text-base lg:text-[1.10rem] xl:text-xl xl:w-[40rem]">
            I'm a frontend developer with experience in building responsive and optimized sites.
          </p>
        </div>
      </li>

      <li className="relative flex flex-row items-center rounded-lg list-none p-6 bg-expand-on-hover hover:bg-expand-on-hover">
        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
        <div className="ml-4">
          <h3 className="text-base poppins-regular mx-auto md:text-[1.35rem] lg:text-[1.60rem] font-semibold">Backend Developer</h3>
          <p className="text-sm raleway mx-auto  md:text-base lg:text-[1.10rem] xl:text-xl xl:w-[40rem]">
            I have experience developing fast and optimized back-end systems and APIs.
          </p>
        </div>
      </li>

      <li className="relative flex flex-row items-center rounded-lg list-none p-6 bg-expand-on-hover hover:bg-expand-on-hover">
        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
        <div className="ml-4">
          <h3 className="text-base poppins-regular mx-auto md:text-[1.35rem] lg:text-[1.60rem] font-semibold">UI Designer</h3>
          <p className="text-sm raleway mx-auto  md:text-base lg:text-[1.10rem] xl:text-xl xl:w-[40rem]">
            I have designed multiple landing pages and have created design systems as well.
          </p>
        </div>
      </li>
    </motion.ul>
      </div>
    </section>
  );
};

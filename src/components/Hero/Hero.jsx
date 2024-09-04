// // import React from "react";

// import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

// export const Hero = () => {
//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Hi, Im Avinash</h1>
//         <p className={styles.description}>
//         Full-stack developer with 1 year of experience specializing in React and Node.js. Lets connect to discuss how I can bring value to your next project.
//         </p>
//         <a href="mailto:avinashpatil142001@gmail.com" className={styles.contactBtn}>
//           Contact Me
//         </a>
//       </div>
//       <img
//         src={getImageUrl("hero/heroImage.png")}
//         alt="Hero image of me"
//         className={styles.heroImg}
//       />
//       <div className={styles.topBlur} />
//       <div className={styles.bottomBlur} />
//     </section>
//   );
// };


// import React from "react";
import { getImageUrl } from "../../utils";
import { motion } from 'framer-motion';
import {FadeUp,FadeFront,FadeLeft} from "../../Animation";
import "./Animation.css";

export const Hero = () => {
  return (
    <section className="relative grid  lg:grid-cols-2 items-center justify-between mt-12 mx-10 z-10">
      <div className="flex flex-col items-start text-white z-10 md:mt-8 md:px-12 lg:-ml-8 xl:ml-16">
      <motion.h1
       variants={FadeFront(0.3)}
       initial="hidden"
       whileInView={"visible"}
       className=" flex text-[1.70rem] font-black mb-8 poppins-semibold bg-gradient-to-r from-white bg-clip-text text-transparent typing-animation md:text-3xl md:py-2 lg:text-4xl xl:text-[3.5rem]">
          Hi, I'm Avinash
        </motion.h1>
        <motion.p
        variants={FadeUp(0.3)}
        initial="hidden"
        whileInView={"visible"}
         className="text-sm py-3 -mt-10 flex font-raleway text-slate-300 md:text-sm md:px-10 md:-ml-9 lg:text-base lg:w-[35rem] xl:text-lg">
          Full-stack developer with 1 year of experience specializing in React and Node.js. Let's connect to discuss how I can bring value to your next project.
        </motion.p>
        <a
          href="mailto:avinashpatil142001@gmail.com"
          className=" hover:scale-110 transition-transform duration-700 hover:bg-blue-900 border text-white hover:text-stone-200 flex  rounded-full  poppins-regular py-2 px-3 shadow-md md:text-sm md:py-[0.6rem] lg:text-base lg:py-[0.6rem] xl:text-xl"
        >
          Let's Connect!
        </a>

      </div>
      <motion.img
      variants={FadeLeft(0.5)}
      initial="hidden"
      whileInView={"visible"}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className=" z-10 flex animate-floating mx-auto  md:h-[30rem] md:w-[30rem] md:mx-[7rem] lg:h-[25rem] lg:w-[25rem] lg:mx-10 xl:h-[35rem] xl:w-[35rem]"
      ></motion.img>
      <div className="absolute w-[50vw] h-[50vw] min-w-[350px] top-[-128px] left-[-10vw] rounded-[764px] bg-[rgba(25,55,109,0.7)] blur-[100px] z-0"></div>
      <div className="absolute w-[70vw] h-[50vw] min-w-[350px] top-[246px] right-[-25vw] rounded-[764px] bg-[rgba(25,55,109,0.7)] blur-[100px] z-0"></div>
    </section>
  );
};

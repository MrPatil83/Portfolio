// // import React from "react";

// import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

// export const Contact = () => {
//   return (
//     <footer id="contact" className={styles.container}>
//       <div className={styles.text}>
//         <h2>Contact</h2>
//         <p>Feel free to reach out!</p>
//       </div>
//       <ul className={styles.links}>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//           <a href="mailto:avinashpatil142001@gmail.com">avinashpatil142001@gmail.com</a>
//         </li>
//         <li className={styles.link}>
//           <img
//             src={getImageUrl("contact/linkedinIcon.png")}
//             alt="LinkedIn icon"
//           />
//           <a href="https://www.linkedin.com/in/avinash-patil-57a352222/">linkedin.com/avinashpatil</a>
//         </li>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
//           <a href="https://github.com/MrPatil83?tab=repositories">github.com/MrPatil83</a>
//         </li>
//       </ul>
//     </footer>
//   );
// };

// import React from "react";

import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className="text-white mt-30 bg-gray-800 flex flex-row justify-evenly w-screen py-14 px-[10%] gap-2.5"
    >
      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-6xl font-bold tracking-wider">Contact</h2>
        <p className="text-4xl font-normal tracking-wide mt-2">Feel free to reach out!</p>
      </div>
      <ul className="flex flex-col items-start list-none gap-6 md:items-center">
        <li className="flex items-center gap-6">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a
            href="mailto:avinashpatil142001@gmail.com"
            className="text-white no-underline text-2xl font-normal tracking-wider"
          >
            avinashpatil142001@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-6">
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/avinash-patil-57a352222/"
            className="text-white no-underline text-2xl font-normal tracking-wider"
          >
            linkedin.com/avinashpatil
          </a>
        </li>
        <li className="flex items-center gap-6">
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/MrPatil83?tab=repositories"
            className="text-white no-underline text-2xl font-normal tracking-wider"
          >
            github.com/MrPatil83
          </a>
        </li>
      </ul>
    </footer>
  );
};

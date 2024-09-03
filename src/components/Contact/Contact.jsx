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

// import { getImageUrl } from "../../utils";

// export const Contact = () => {
//   return (
//     <footer
//       id="contact"
//       className="text-white mt-30 bg-gray-800 flex flex-row justify-evenly w-screen py-14 px-[10%] gap-2.5"
//     >
//       <div className="flex flex-col text-center md:text-left">
//         <h2 className="text-6xl font-bold tracking-wider">Contact</h2>
//         <p className="text-4xl font-normal tracking-wide mt-2">Feel free to reach out!</p>
//       </div>
//       <ul className="flex flex-col items-start list-none gap-6 md:items-center">
//         <li className="flex items-center gap-6">
//           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//           <a
//             href="mailto:avinashpatil142001@gmail.com"
//             className="text-white no-underline text-2xl font-normal tracking-wider"
//           >
//             avinashpatil142001@gmail.com
//           </a>
//         </li>
//         <li className="flex items-center gap-6">
//           <img
//             src={getImageUrl("contact/linkedinIcon.png")}
//             alt="LinkedIn icon"
//           />
//           <a
//             href="https://www.linkedin.com/in/avinash-patil-57a352222/"
//             className="text-white no-underline text-2xl font-normal tracking-wider"
//           >
//             linkedin.com/avinashpatil
//           </a>
//         </li>
//         <li className="flex items-center gap-6">
//           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
//           <a
//             href="https://github.com/MrPatil83?tab=repositories"
//             className="text-white no-underline text-2xl font-normal tracking-wider"
//           >
//             github.com/MrPatil83
//           </a>
//         </li>
//       </ul>
//     </footer>
//   );
// };


// import React from 'react';



// import React from 'react';
// import { getImageUrl } from "../../utils";

// export const Contact = () => {
//   return (
//     <footer id="contact" className="bg-gray-800 text-white flex flex-col items-center py-14 px-[10%]">
//       <div className="text-center md:text-left mb-8">
//         <h2 className="text-6xl font-bold tracking-wider">Contact</h2>
//         <p className="text-4xl font-normal tracking-wide mt-2">Feel free to reach out!</p>
//       </div>
//       <div className="flex flex-col items-center md:flex-row gap-12 mb-12">
//         <ul className="flex flex-col items-start list-none gap-6 md:items-center">
//           <li className="flex items-center gap-6">
//             <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//             <a href="mailto:avinashpatil142001@gmail.com" className="text-white no-underline text-2xl font-normal tracking-wider">
//               avinashpatil142001@gmail.com
//             </a>
//           </li>
//           <li className="flex items-center gap-6">
//             <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
//             <a href="https://www.linkedin.com/in/avinash-patil-57a352222/" className="text-white no-underline text-2xl font-normal tracking-wider">
//               linkedin.com/avinashpatil
//             </a>
//           </li>
//           <li className="flex items-center gap-6">
//             <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
//             <a href="https://github.com/MrPatil83?tab=repositories" className="text-white no-underline text-2xl font-normal tracking-wider">
//               github.com/MrPatil83
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// Contact.js
// import React from "react";
// Contact.js
// import React from "react";

// import React from 'react'
import "./Contact.css";
import { motion } from 'framer-motion';
import {FadeRight} from "../../Animation";

const Contact = () => {
  return (
<div className=" bg-black h-[17rem] lg:h-[60rem] xl:h-[20rem]">
<motion.h2
      variants={FadeRight(0.3)}
      initial="hidden"
      whileInView={"visible"}
       className="text-white text-2xl px-24 md:text-4xl font-bold tracking-wide uppercase flex justify-start p-10 md:mx-14" id="contact">
        Contact US
      </motion.h2>
      <p className=" text-xl mx-auto px-20 md:text-2xl poppins-regular text-white tracking-wide md:mx-36 mt-2">Feel free to reach out!</p>
      <p className=" text-base mx-auto px-20 md:text-2xl poppins-regular text-white tracking-wide md:mx-36 mt-2"><a href="+918356080112" ><span>Contact :</span>+918356080112</a></p>

    <div className="card m-4 mx-20 w-[10rem] lg:mx-[14rem] md:m-3 rounded-3xl transition-transform duration-700">
    <span>Social</span>
    {/* github */}
    <a className="social-link" href="https://github.com/MrPatil83?tab=repositories">
      <svg
        fill="#000000"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 5.308 3.438 9.832 8.205 11.418.6.111.82-.259.82-.577 0-.285-.01-1.042-.016-2.05-3.338.724-4.042-1.617-4.042-1.617-.544-1.383-1.328-1.75-1.328-1.75-1.087-.743.083-.728.083-.728 1.204.084 1.835 1.24 1.835 1.24 1.068 1.835 2.804 1.303 3.491.996.107-.775.418-1.303.764-1.602-2.664-.303-5.467-1.332-5.467-5.931 0-1.31.47-2.377 1.238-3.216-.124-.303-.537-1.523.118-3.176 0 0 1.008-.322 3.302 1.23a11.518 11.518 0 0 1 3.004-.402 11.564 11.564 0 0 1 3.004.402c2.294-1.552 3.302-1.23 3.302-1.23.656 1.653.242 2.873.118 3.176.77.839 1.238 1.906 1.238 3.216 0 4.613-2.811 5.621-5.48 5.911.432.373.815 1.106.815 2.229 0 1.608-.014 2.904-.014 3.299 0 .319.22.692.825.575A12.005 12.005 0 0 0 24 12c0-6.627-5.373-12-12-12z"
        ></path>
      </svg>
    </a>

{/* linkdein */}
<a className="social-link" href="https://www.linkedin.com/in/avinash-patil-57a352222">
  <svg
    fill="#0077B5" // LinkedIn color
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width="24"
    height="24"
  >
    <path d="M20.451 20.451H16.843v-5.834c0-1.39-.024-3.177-1.938-3.177-1.937 0-2.237 1.513-2.237 3.074v6.037H9.484V9h2.349v1.479h.032c.328-.621 1.133-1.274 2.335-1.274 2.495 0 2.957 1.674 2.957 3.84v7.407zM5.337 7.209c-.791 0-1.455-.638-1.455-1.43 0-.793.664-1.43 1.455-1.43.793 0 1.456.637 1.456 1.43 0 .792-.663 1.43-1.456 1.43zm1.223 13.242H4.113V9h2.447v11.451zM22 0H2C.897 0 0 .897 0 2v20c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path>
  </svg>
</a>

{/* email */}
<a className="social-link" href="mailto:avinashpatil142001@gmail.com">
  <svg
    fill="#000000" // You can change this to any color you prefer
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width="24"
    height="24"
  >
    <path d="M22 4H2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H2V8l10 6.2L22 8v10zm-10-5.4L2 6h20l-10 6.6z"></path>
  </svg>
</a>

  </div>

</div>

  )
}

export default Contact

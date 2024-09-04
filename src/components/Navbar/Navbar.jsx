// import  { useState } from "react";

// import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <a className={styles.title} href="/">
//         AvinashPatil
//       </a>
//       <div className={styles.menu}>
//         <img
//           className={styles.menuBtn}
//           src={
//             menuOpen
//               ? getImageUrl("nav/closeIcon.png")
//               : getImageUrl("nav/menuIcon.png")
//           }
//           alt="menu-button"
//           onClick={() => setMenuOpen(!menuOpen)}
//         />
//         <ul
//           className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
//           onClick={() => setMenuOpen(false)}
//         >
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#experience">Experience</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };





import { useState } from "react";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between pt-14 z-20 mx-[10%]">
      <a
        className="text-[43px] hover:scale-125 transition-transform duration-700 font-semibold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent"
        href="/"
      >
        AvinashPatil
      </a>
      <div className="flex">
        <img
          className="block cursor-pointer md:hidden"
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`
            ${menuOpen ? "flex" : "hidden"} 
            md:flex 
            gap-[47px] 
            list-none 
            flex-col 
            md:flex-row 
            md:items-center 
            p-6 
            md:p-0 
            absolute 
            right-0 
            mt-10 
            md:mt-0 
            md:static 
            rounded-lg 
           
            ${menuOpen ? 'bg-custom-gradient' : 'bg-transparent'}
            md:bg-transparent
          `}
          onClick={() => setMenuOpen(false)}
        >
          <li className="relative">
            <a className="text-2xl md:text-lg text-white group" href="#about">
              About Me
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-zinc-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
            </a>
          </li>
          <li className="relative">
            <a className="text-2xl md:text-lg text-white group" href="#experience">
              Experience
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-zinc-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
            </a>
          </li>
          <li className="relative">
            <a className="text-2xl md:text-lg text-white group" href="#projects">
              Projects
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-zinc-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
            </a>
          </li>
          <li className="relative">
            <a className="text-2xl md:text-lg text-white group" href="#contact">
              Contact 
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-zinc-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

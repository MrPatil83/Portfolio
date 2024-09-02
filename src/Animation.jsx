// import { Transition } from "@headlessui/react";
// import { delay } from "framer-motion";
// variants={FadeFront(-0.1)}
//           initial="hidden"
//           whileInView={"visible"}

export const FadeUp = (delay) => {
    return {
      hidden: {
        opacity: 0,
        y: 100,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };
  
  export const FadeFront = (delay) => {
      return {
        hidden: {
          opacity: 0,
          y: -100,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: delay,
          },
        },
      };
    };
  
  export const FadeLeft = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: 100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };
  
  export const FadeRight = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: -100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  
    
  };
  
  
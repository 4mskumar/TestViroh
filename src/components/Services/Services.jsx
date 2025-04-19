import React from "react";
import { serviceTitle } from "../../data/servicesData";
import { motion } from "framer-motion";

const Services = () => {
  const scrollingItems = [...serviceTitle, ...serviceTitle];

  return (
    <div  className="w-full relative overflow-hidden py-8 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40">
      <div className="w-20 sm:w-32 lg:w-40 absolute top-0 left-0 z-40 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="w-20 sm:w-32 lg:w-40 absolute top-0 right-0 z-40 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
        className="flex w-[200%] will-change-transform"
      >
        {scrollingItems.map((val, ind) => {
          const Icon = val.logo;
          return (
            <div
              key={ind}
              className="flex flex-col items-center h-28 min-w-52 px-6 md:px-10 shrink-0"
            >
              {Icon && (
                <Icon className="text-4xl sm:text-5xl md:text-6xl" style={{ color: val.color }} />
              )}
              <p className="text-sm sm:text-base md:text-lg text-navy font-inter text-center font-semibold tracking-tighter mt-2">
                {val.title}
              </p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;

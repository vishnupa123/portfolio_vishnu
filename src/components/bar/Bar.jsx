import React from "react";
import { motion } from "framer-motion";

const Bar = () => {
  const bar = [
    "20+ Projects",
    "15+ React Js Projects",
    "5+ Tailwind Projects",
    "3+ Bootstrap Projects",
    "2 Fullstack Projects",
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },  // starts faded & pushed down
    visible: { opacity: 1, y: 0 },  // animates in place
  };

  return (
    <div className="px-20 max-sm:p-0">
      <div className="flex flex-wrap justify-center gap-20 max-sm:gap-8">
        {bar.map((item, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-xl shadow-md w-40 sm:w-48 text-center transform hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
            transition={{ duration: 0.6, delay: index * 0.2 }} // stagger effect
          >
            <h2 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-violet-800 via-violet-400 to-orange-400 bg-clip-text text-transparent tracking-wide uppercase">
              {item}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bar;

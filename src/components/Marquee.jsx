import React from 'react';
import { MARQUEE_TEXT } from '../constants';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="mt-4 w-full bg-lime-300 text-black lg:py-6 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(2)].map((_, i) => (
          <h1
            key={i}
            className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl mx-4"
          >
            {MARQUEE_TEXT}
          </h1>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;

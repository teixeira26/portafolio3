import React, { Children } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const DivParallax = ({children}) => {
  const { scrollYProgress } = useScroll();
  const yValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 50, 100 * 2]
  );
  return <motion.div
  className="w-[50%] p-0  relative h-full flex items-center justify-center"
  >{children}</motion.div>;
};
export default DivParallax;
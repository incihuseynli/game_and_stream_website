import { motion } from "framer-motion";
import "../index.css";
import { ReactNode } from "react";
interface ITransition {
  children: ReactNode | ReactNode[];
}
const PageTransition = ({ children }:ITransition) => {
  return (
    <>
      {children}
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.6, delay: 0.6, ease: [0.2, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.6, delay: 0.6, ease: [0.2, 1, 0.36, 1] }}
      />
    </>
  );
};

export default PageTransition;

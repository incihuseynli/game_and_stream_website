import { motion, useInView, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
interface ITransition {
  children: ReactNode;
}
const Reveal = ({ children }: ITransition) => {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={animationRef}
      className="relative overflow-hidden"
      style={{ height: "fit" || "100%" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;

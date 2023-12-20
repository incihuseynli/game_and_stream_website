import { motion, useInView, useAnimation } from "framer-motion";
import "../index.css";
import { ReactNode, useEffect, useRef } from "react";
interface IProps {
  children: ReactNode;
}
const TitleReveal = ({ children }: IProps) => {
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

  const animateLetter = (letter: string, index: number) => (
    <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
    >
      {letter}
    </motion.span>
  );
  const textContent =
    typeof children === "string"
      ? children
      : children.props && children.props.children;
  return (
    <div
      ref={animationRef}
      className="relative overflow-hidden"
      style={{ width: "fit" || "100%" }}
    >
      {textContent &&
        textContent
          .split("")
          .map((letter: string, index: number) => animateLetter(letter, index))}
    </div>
  );
};

export default TitleReveal;

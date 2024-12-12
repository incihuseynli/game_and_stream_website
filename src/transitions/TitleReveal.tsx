import { motion, useInView, useAnimation } from "framer-motion";
import "../index.css";
import React, { ReactNode, useEffect, useRef } from "react";

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

  // Extract text content
  let textContent: string | undefined = undefined;

  if (typeof children === "string") {
    textContent = children; // Directly use if it's a string
  } else if (React.isValidElement(children)) {
    // If it's a valid React element, try to access its children
    const innerChildren = children.props.children;
    if (typeof innerChildren === "string") {
      textContent = innerChildren;
    }
  }

  return (
    <div
      ref={animationRef}
      className="relative overflow-hidden"
      style={{ width: "fit"   }}
    >
      {textContent &&
        textContent
          .split("")
          .map((letter: string, index: number) => animateLetter(letter, index))}
    </div>
  );
};

export default TitleReveal;

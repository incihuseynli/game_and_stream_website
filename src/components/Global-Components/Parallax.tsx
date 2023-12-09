import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Btn from "../Buttons/Btn";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
const Parallax = () => {
  const ref = useRef<null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  return (
    <section
      ref={ref}
      className="my-36 w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.div
        className="relative z-30 flex flex-col gap-8 items-center justify-center"
        style={{ y: textY }}
      >
        <button className="w-24 h-24 text-primary-green-300 hover:text-primary-green-500 transition-all duration-500">
          <PlayCircleIcon />
        </button>
        <h1 className="font-barlow font-bold uppercase tracking-wider text-white text-4xl relative z-10">
          JOIN THE <span className="text-primary-green-300">COMMUNITY</span>
        </h1>
        <Btn children="Join now" path={`https://discord.com${"_blank"}`} />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('./parallaxImg.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url('./parallaxImg1.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </section>
  );
};

export default Parallax;

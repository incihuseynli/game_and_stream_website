import { useState } from "react";
import { styles } from "../../styles";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import SectionHead from "./SectionHead";

const Stats = () => {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  return (
    <section className="mt-36 mb-24 flex flex-col gap-24">
      {/* Section Head */}
      <SectionHead headTitle="Our services" title="Just enjoy playing" />
      {/* Stats */}
      <div
        className={`${styles.flexCenter} py-12 px-6 rounded-2xl bg-black-500 flex-wrap w-3/4 gap-16 mx-auto `}
      >
        {/* number of players */}
        <div className="w-40 font-barlow font-bold flex flex-col items-center text-center  md:border-r md:border-gray-500 md:border-opacity-30 md:pr-24">
          <img src="./Playstation.svg" alt="" className="w-10 h-10" />

          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-3xl text-white">
              {counterOn && (
                <CountUp start={0} end={1368} duration={3} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <h6 className="text-base text-gray-300 uppercase">Players</h6>
        </div>
        {/* number of streamers */}
        <div className="w-40 font-barlow font-bold flex flex-col items-center text-center  md:border-r md:border-gray-500 md:border-opacity-30 md:pr-24">
          <img src="./streamer.svg" alt="" className="w-10 h-10" />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-3xl text-white">
              {counterOn && (
                <CountUp start={0} end={569} duration={3} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <h6 className="text-base text-gray-300 uppercase">Streamer</h6>
        </div>
        {/* number of games */}
        <div className="w-40 font-barlow font-bold flex flex-col items-center text-center  md:border-r md:border-gray-500 md:border-opacity-30 md:pr-24">
          <img src="./dice.svg" alt="" className="w-10 h-10" />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-3xl text-white">
              {counterOn && (
                <CountUp start={0} end={748} duration={3} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <h6 className="text-base text-gray-300 uppercase">Games</h6>
        </div>
        {/* number of tournaments */}
        <div className="w-40 font-barlow font-bold flex flex-col items-center">
          <img src="./Cup.svg" alt="" className="w-10 h-10" />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-3xl text-white">
              {counterOn && (
                <CountUp start={0} end={327} duration={3} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <h6 className="text-base text-gray-300 uppercase">Tournaments</h6>
        </div>
      </div>
    </section>
  );
};

export default Stats;

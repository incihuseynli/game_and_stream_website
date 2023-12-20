import { useState } from "react";
import { styles } from "../../styles";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import SectionHead from "./SectionHead";
import Reveal from "../../transitions/Reveal";
import { stats } from "../../Db/datas";

const Stats = () => {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  return (
    <section className="mt-36 mb-24 flex flex-col gap-24">
      {/* Section Head */}
      <SectionHead headTitle="Our services" title="Just enjoy playing" />
      {/* Stats */}
      <Reveal>
        <div
          className={`${styles.flexCenter} py-12 px-6 rounded-2xl bg-black-500 flex-wrap w-3/4 gap-16 mx-auto `}
        >
          {stats.map(({ id, image, title, end }) => {
            return (
              <div
                className="w-40 font-barlow font-bold flex flex-col items-center text-center md:even:border-none md:even:pr-0 lg:even:border-r lg:even:pr-24 md:last:border-none  md:last:pr-0 md:border-r md:border-gray-500 md:border-opacity-30 md:pr-24"
                key={id}
              >
                <img
                  src={image}
                  alt={`number of ${title}`}
                  className="w-10 h-10"
                />

                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span className="text-3xl text-white">
                    {counterOn && (
                      <CountUp start={0} end={end} duration={3} delay={0} />
                    )}
                    +
                  </span>
                </ScrollTrigger>
                <h6 className="text-base text-gray-300 uppercase">{title}</h6>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};

export default Stats;

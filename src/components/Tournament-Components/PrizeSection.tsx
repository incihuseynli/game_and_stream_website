import { styles } from "../../styles";
import Reveal from "../../transitions/Reveal";
import SectionHead from "../Global-Components/SectionHead";
import PrizeCard from "./PrizeCard";

const PrizeSection = () => {
  return (
    <Reveal>
      <section
        className={`${styles.padding} ${styles.flexCenter} flex-col gap-20 my-24`}
      >
        {/* Section Head */}
        <SectionHead headTitle="OUR TOURNAMENT" title="PLAY TO EARN GAMES" />
        {/* Prizes Cards */}
        <div className="mt-12 grid grid-cols-1  lg:grid-cols-3 place-items-center gap-12  lg:gap-6">
          {/* Prize Card */}
          <PrizeCard />
        </div>
      </section>
    </Reveal>
  );
};

export default PrizeSection;

import { styles } from "../../styles";
import SectionHead from "../Global-Components/SectionHead";
import PrizeCard from "./PrizeCard";

const PrizeSection = () => {
  const isLuckyCard:boolean = true;
  return (
    <section
      className={`${styles.padding} ${styles.flexCenter} flex-col gap-20 my-24`}
    >
      {/* Section Head */}
      <SectionHead headTitle="OUR TOURNAMENT" title="PLAY TO EARN GAMES" />
      {/* Prizes Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 md:gap-6">
        {/* Prize Card */}
        <PrizeCard isLuckyCard={false} />
        <PrizeCard isLuckyCard={true} />
        <PrizeCard isLuckyCard={false} />
      </div>
    </section>
  );
};

export default PrizeSection;

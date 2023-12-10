import { styles } from "../../styles";
import Btn from "../Buttons/Btn";
import GamesLists from "../Global-Components/GamesLists";
import SectionHead from "../Global-Components/SectionHead";

const GameSection = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-col gap-12 ${styles.padding} my-36`}
    >
      {/* Section Head */}
      <SectionHead headTitle="Start your journey" title="Most popular games" />
      <div
        className={`${styles.flexCenter} flex-col pb-6 bg-black-500 w-full rounded-xl shadow-lg `}
      >
        {/* List of Game Cards */}
        <div className="bg-black-500 w-full rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-9 place-items-center items-center py-16 px-8 ">
          <GamesLists/>
        </div>
        <Btn children="View more" path="/" />
      </div>
    </section>
  );
};

export default GameSection;

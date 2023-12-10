import { styles } from "../../styles";
import All from "../Global-Components/All";
import SectionHead from "../Global-Components/SectionHead";
import GameCard from "../Home-Components/GameCard";

const AllGames = () => {
  return (
    <section className={`${styles.padding} my-24 flex flex-col gap-16`}>
      {/* Section Head */}
      <SectionHead
        headTitle="Choose game you want"
        title="All Best Games is in here"
      />
      {/* All Games */}
      <All>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-9 place-items-center py-16 px-4 lg:px-8">
          <GameCard />
        </div>
      </All>
    </section>
  );
};

export default AllGames;

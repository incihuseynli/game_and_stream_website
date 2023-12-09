import Btn from "../Buttons/Btn";
import SectionHead from "../Global-Components/SectionHead";
import { styles } from "../../styles";

const TodaysPick = () => {
  return (
    <section
      className={`${styles.padding} my-36 ${styles.flexCenter} flex-col gap-20`}
    >
      {/* SECTION HEAD */}
      <SectionHead headTitle="Today's Game" title="Top Rated Game Of Today" />
      {/* GAME SHOWCASE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        <img
          src="./gameImg1.jpg"
          alt="Human Game | Game of Day"
          className="w-fit h-full object-cover"
        />
        <div className="flex flex-col gap-2  items-center w-3/4 text-center md:items-start md:w-full md:text-left">
          <h5 className="font-barlow text-2xl uppercase font-bold tracking-wide text-white">
            Human game
          </h5>
          <span className="font-barlow text-lg uppercase font-semibold tracking-wide text-secondary-yellow-500">
            RATE 50%
          </span>
          <p className="mb-10 mt-4 text-gray-50 text-sm md:text-base tracking-wider font-poppins text-center md:text-left">
            Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum
            sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra
            tellus miolslis, tincidunt massa venenatis.
          </p>
          <Btn children="Play Now" path="/" />
        </div>
      </div>
    </section>
  );
};

export default TodaysPick;

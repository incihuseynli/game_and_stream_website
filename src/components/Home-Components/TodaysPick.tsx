import Btn from "../Buttons/Btn";
import SectionHead from "../Global-Components/SectionHead";
import { styles } from "../../styles";
import { useEffect, useState } from "react";
import { ITodaysPick } from "../../types";
import Axios from "axios";

const TodaysPick = () => {
  const URL = "http://localhost:3080/todaysPick?_limit=1";
  const [games, setGames] = useState<ITodaysPick[]>([]);
  const handleData = () => {
    try {
      Axios.get(URL).then(({ data }) => {
        setGames(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <section
      className={`${styles.padding} my-36 ${styles.flexCenter} flex-col gap-20`}
    >
      {/* SECTION HEAD */}
      <SectionHead headTitle="Today's Game" title="Top Rated Game Of Today" />
      {/* GAME SHOWCASE */}
      {games.map(({id,game_url,title,thumbnail,short_desc,ratePer}) => {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center" key={id}>
            <img
              src={thumbnail}
              alt={`${title} | Game of Day`}
              className="w-fit h-full object-cover shadow-2xl"
            />
            <div className="flex flex-col gap-2  items-center w-3/4 text-center md:items-start md:w-full md:text-left">
              <h5 className="font-barlow text-2xl uppercase font-bold tracking-wide text-white">
                {title}
              </h5>
              <span className="font-barlow text-lg uppercase font-semibold tracking-wide text-secondary-yellow-500">
                RATE {ratePer}
              </span>
              <p className="mb-10 mt-4 w-4/5 text-gray-50 text-sm md:text-base tracking-wider font-poppins text-center md:text-left">
                {short_desc}
              </p>
              <Btn children="Play Now" path={game_url} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TodaysPick;

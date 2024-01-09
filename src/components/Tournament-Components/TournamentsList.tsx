import { ClockIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import SectionHead from "../Global-Components/SectionHead";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ITournaments } from "../../types";
import axios from "axios";

const TournamentsList = () => {
  const URL = "http://localhost:3080/tournaments?_limit=3";
  const [tournaments, setTournaments] = useState<ITournaments[]>([]);
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setTournaments(data);
    });
  }, []);
  return (
    <section
      className={`${styles.paddingX} py-16 ${styles.flexCenter} font-barlow w-full flex-col gap-12 bg-streamers bg-no-repeat bg-cover bg-center  bg-opacity-60`}
    >
      {/* Section Head */}
      {/* <SectionHead headTitle="TOURNAMENT LIST" title="ACTIVE TOURNAMENTS" /> */}
      <SectionHead headTitle="Müsabiqələrin siyahısı" title="Aktiv Müsabiqələrimiz" />
      {/* Tournament Lists */}
      <div className={`${styles.flexCenter} flex-col gap-10 w-full`}>
        {/* Tournament List Item */}
        {tournaments.map(
          ({
            id,
            isOnline,
            live_link,
            live_time,
            sponsor,
            sponsor_logo,
            prize,
          }) => {
            return (
              <div
                key={id}
                className={`${styles.flexBetween} flex-wrap gap-8  tournamentBox lg:w-3/4 lg:h-36 bg-black-800 py-6 px-12 border-l-8 border-l-primary-green-300 hover:border-l-secondary-yellow-500`}
              >
                <img
                  src={sponsor_logo}
                  className="h-24 w-36 object-contain md:border-r-2 md:border-r-gray-500 md:border-opacity-20 md:pr-12"
                  alt={`Tournament of ${sponsor}`}
                />
                <div className="flex flex-col gap-2">
                  <h5 className="text-white text-lg uppercase font-bold tracking-wide">
                    {sponsor}
                  </h5>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-green-300 circle"></span>
                    <span className="text-xs uppercase text-primary-green-300 font-bold tracking-wider online">
                      {`${isOnline ? "onlayn" : "oflayn"}`}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-gray-500 text-base uppercase font-bold">
                    {/* Prize */}
                    Mükafat
                  </h5>
                  <div className="flex items-center gap-2">
                    <img src="./Cup.svg" className="w-5 h-5"></img>
                    <span className="text-sm uppercase text-primary-green-300 font-bold tracking-wider">
                      $ {prize}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-gray-500 text-base uppercase font-bold">
                    {/* Time */}
                    Vaxt aralığı
                  </h5>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-sm uppercase text-gray-500 font-bold -tracking-wide">
                      {live_time}
                    </span>
                  </div>
                </div>
                <NavLink
                  to={live_link}
                  className="text-gray-400 text-sm tracking-wide rounded-md uppercase font-bold bg-black-500 py-4 px-6 flex items-center gap-2 mx-auto lg:mx-0  hover:text-secondary-yellow-500 transition-all duration-700 hover:shadow-2xl"
                >
                  {/* Live now  */} İndi canlı
                  <PlayCircleIcon className="w-4 h-4 " />
                </NavLink>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default TournamentsList;

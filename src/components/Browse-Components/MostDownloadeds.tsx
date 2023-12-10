import {
  ArrowDownTrayIcon,
  FolderArrowDownIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import BtnText from "../Buttons/BtnText";
import TopList from "../Global-Components/TopList";
import { useEffect, useState } from "react";
import { IGame } from "../../types";
import Axios from "axios";
import { NavLink } from "react-router-dom";

const MostDownloadeds = () => {
  const limit = 3;
  const URL = `http://localhost:3080/games?_limit=${limit}`;
  const [games, setGames] = useState<IGame[]>([]);
  const handleData = () => {
    try {
      Axios.get(URL).then(({ data }) => {
        const sortedGames = data.sort((a: IGame, b: IGame) => {
          const downloadsA = parseFloat(a.downloads.replace("K", "")) * 1000;
          const downloadsB = parseFloat(b.downloads.replace("K", "")) * 1000;
          return downloadsB - downloadsA;
        });
        setGames(sortedGames.slice(0, limit));
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <TopList secTitle="Top Downloaded Games">
      <div className={`${styles.flexCenter} flex-col gap-4 `}>
        {/* TOP GAMES LIMIT = 3 */}
        {games.map(
          ({ id, title, thumbnail, downloads, publisher, rate, game_url }) => {
            return (
              <div
                key={id}
                className={`flex gap-8 items-center pb-6 border-b last:border-b-0 border-b-gray-400 border-opacity-20`}
              >
                <img
                  src={thumbnail}
                  alt={title}
                  className="w-28 h-28 rounded-lg object-cover"
                />
                <div className="flex flex-col gap-2">
                  <div className={`${styles.flexBetween} w-full gap-2`}>
                    <div className="flex flex-col gap-1">
                      {/* GAME NAME */}
                      <h6 className="text-lg capitalize font-barlow font-bold text-white truncate w-24">
                        {title}
                      </h6>
                      {/* GAME COMPANY */}
                      <span className="text-xs capitalize text-gray-500 font-poppins font-bold tracking-wider">
                        {publisher}
                      </span>
                    </div>
                    {/* DOWNLOAD BUTTON */}
                    <NavLink
                      to={game_url}
                      className="w-12 h-12 text-primary-green-300 hover:text-primary-green-800 transition-all duration-300"
                    >
                      <FolderArrowDownIcon />
                    </NavLink>
                  </div>
                  <div className={`${styles.flexBetween} w-2/3 gap-4`}>
                    {/* RATE */}
                    <div className={`${styles.flexCenter} gap-2`}>
                      <div className="w-5 h-5 text-secondary-yellow-500">
                        <StarIcon />
                      </div>
                      <span className="text-gray-50 font-bold font-poppins text-sm">
                        {rate}
                      </span>
                    </div>
                    {/* DOWNLOADs */}
                    <div className={`${styles.flexCenter} gap-2`}>
                      <div className="w-3 h-3 text-primary-green-500 font-bold">
                        <ArrowDownTrayIcon />
                      </div>
                      <span className="text-gray-50 font-bold font-poppins text-xs">
                        {downloads}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <BtnText children="View all games" path="/browse" />
    </TopList>
  );
};

export default MostDownloadeds;

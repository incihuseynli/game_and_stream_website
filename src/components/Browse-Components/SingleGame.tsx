import {
  ArrowDownTrayIcon,
  StarIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";

import { styles } from "../../styles";

import BtnText from "../Buttons/BtnText";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router";
import { IGame } from "../../types";
import { Helmet } from "react-helmet";

const SingleGame = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<IGame>({} as IGame);
  const URL = "http://localhost:3080/games/";
  // "https://my-json-server.typicode.com/dbForProjects/games_api/games/";
  const handleData = () => {
    try {
      Axios.get(URL + id).then(({ data }) => {
        setGame(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  const smallImages = game.smallImgs;
  return (
    <div
      className={`${styles.flexCenter} flex-col gap-12 ${styles.paddingY} px-4 bg-black-500 rounded-xl`}
    >
      {/* Helmet config */}
      <Helmet>
        <title>{`${game.title} details`}</title>
        <meta name="description" content={`${game.title} details page`} />
      </Helmet>
      ;{/* Details Section */}
      <div className="flex  items-center justify-center w-full">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full md:w-fit h-fit  lg:w-fit lg:h-[22.5rem] object-cover rounded-xl"
        />
      </div>
      {/* About Game */}
      <div className="flex flex-col items-center justify-center gap-10">
        <h4 className="text-3xl md:text-4xl text-white font-barlow font-bold tracking-wide">
          <span className="text-primary-green-500">{game.title}</span> Details
        </h4>

        <div
          className={`${styles.flexCenter} flex-wrap gap-8 py-8 px-16 bg-black-800  rounded-xl text-base capitalize tracking-wider font-poppins font-bold`}
        >
          <span className="text-gray-500">{game.publisher}</span>
          <span className="flex items-center gap-2 text-gray-50 font-bold font-poppins text-sm">
            <div className="w-5 h-5 text-secondary-yellow-500">
              <StarIcon />
            </div>{" "}
            {game.rate}
          </span>
          <span className="border border-opacity-10 border-gray-500 p-2 text-black">
            {game.age_rate}+
          </span>
          <span className="text-secondary-yellow-500">{game.genre}</span>
          <div className={`${styles.flexCenter} gap-2`}>
            <div className="w-5 h-5 text-primary-green-500 font-bold">
              <ArrowDownTrayIcon />
            </div>
            <span className="text-gray-50 font-bold font-poppins text-sm">
              {game.downloads}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 text-primary-green-300">
              <CircleStackIcon />
            </div>
            <span className="text-white">{game.storage}</span>
          </div>
        </div>

        <div className={`${styles.flexCenter} flex-col  gap-6`}>
          <div className={`${styles.flexCenter} flex-wrap gap-6`}>
            {smallImages && smallImages.length > 0 && (
              <div className={`${styles.flexCenter} flex-wrap gap-6`}>
                {smallImages.map(({ img }, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="w-full md:w-44 h-32 object-cover rounded-xl"
                  />
                ))}
              </div>
            )}
          </div>
          {/* About Game */}
          <div className="w-full md:w-3/4 flex flex-col items-center gap-4">
            <p className="text-gray-500 font-poppins tracking-wider text-sm md:text-base">
              {Array.from({ length: 4 }, (_, index) => (
                <span key={index}>{game.content}</span>
              ))}
            </p>

            <BtnText children="Download game now" path={game.game_url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;

import { StarIcon } from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import BtnText from "../Buttons/BtnText";
import { useEffect, useState } from "react";
import { IGame } from "../../types";
import Axios from "axios";
const GameCard = () => {
  // const limit:string = '6';
  const options = {
    method: "GET",
    // url: `https://free-to-play-games-database.p.rapidapi.com/api/games?_limit=${limit}`,
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": "8270335a98mshff2fc09f55e7c03p15f4a7jsn3afb95e7043a",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
    
  };
  const [games, setGames] = useState<IGame[]>([]);
  // const handleData = async () => {
  //   try {
  //     const response = await Axios.request(options);
  //     // console.log(response.data);
  //     // setGames(response.data);
  //     const limitedGames = response.data.slice(0, 6);
  //     // console.log(limitedGames);

  //     setGames(limitedGames);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    // Axios.get(options.url).then(({ data }) => {
    //   setGames(data);
    // });
    const handleData = async () => {
      try {
        const response = await Axios.request(options);
        // console.log(response.data);
        // setGames(response.data);
        const limitedGames = response.data.slice(0, 6);
        // console.log(limitedGames);
  
        setGames(limitedGames);
      } catch (error) {
        console.error(error);
      }
    };
    handleData();

  }, []);
// console.log(games);

  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  return (
    <>
      {games.map(({ id, title, thumbnail, publisher, game_url }) => {
        return (
          <div
            key={id}
            className={`flex flex-col md:flex-row gap-4 items-center w-full h-full   rounded-xl p-4 bg-black-800 shadow-2xl border border-white border-opacity-10 hover:border hover:border-primary-green-500 hover:border-opacity-30`}
          >
            <img
              src={thumbnail}
              alt="Game Name"
              className="rounded-xl w-40 h-40  object-cover"
            />
            <div className="w-full flex flex-col gap-2">
              {/* Top */}
              <div className={`flex flex-col items-start  w-full`}>
                {/* Game Name */}
                <h5 className="text-white text-lg uppercase tracking-wide font-barlow font-bold truncate w-40">
                  {title}
                </h5>

                <div className={`${styles.flexCenter} gap-4`}>
                  {/* Game Rate */}
                  <div className={`${styles.flexCenter} gap-2`}>
                    <div className="w-5 h-5 text-secondary-yellow-500">
                      <StarIcon />
                    </div>
                    <span className="text-gray-50 font-bold font-poppins text-sm">
                      4.8
                    </span>
                  </div>
                  {/* Download rate */}
                  <div className={`${styles.flexCenter} gap-2`}>
                    <div className="w-5 h-5 text-primary-green-500 font-bold">
                      <ArrowDownTrayIcon />
                    </div>
                    <span className="text-gray-50 font-bold font-poppins text-sm">
                      2.5M
                    </span>
                  </div>
                </div>
              </div>
              {/* Bottom */}
              <div
                className={`${styles.flexBetween}  md:flex-col md:items-start lg:flex-row lg:items-center  mb-4 w-full`}
              >
                {/* Game Company  */}
                <h5 className="text-gray-500 text-xs truncate w-40 mr-2 capitalize tracking-wider font-poppins font-bold">
                  {publisher}
                </h5>
              </div>
              <BtnText path="/browse/1">More Details</BtnText>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GameCard;

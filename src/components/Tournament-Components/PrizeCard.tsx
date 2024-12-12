import { styles } from "../../styles";
import CountdownTimer from "../Global-Components/CountdownTimer";
import { useEffect, useState } from "react";
import axios from "axios";
import { ITournaments } from "../../types";
import BtnText from "../Buttons/BtnText";

const PrizeCard = () => {
  // const URL = "http://localhost:3080/tournaments";
  const URL = "https://my-json-server.typicode.com/dbForProjects/tournaments/tournaments";
  const [tournaments, setTournaments] = useState<ITournaments[]>([]);
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setTournaments(data);
    });
  }, []);

  return (
    <>
      {tournaments.map(
        ({ id, prize, status, place_count, top_three_players, endDate }) => {
          // console.log(Array.isArray(top_three_players));

          const isLuckyCard = status === "uğurlu kard";
          return (
            <div
              className="relative flex flex-col gap-6 font-barlow w-96 bg-black-500 rounded-lg px-4 py-8 hover:-translate-y-3 transition-all duration-700"
              key={id}
            >
              {/* Prize */}
              <div
                className={`absolute left-1 md:-left-4 ${
                  isLuckyCard
                    ? "boxShadow bg-secondary-yellow-500"
                    : "boxShadow2 bg-primary-green-300"
                }  -top-4 rounded-xl md:-skew-x-12 text-center w-32 md:w-40 p-4  h-[75px]  flex items-center gap-3`}
              >
                <img src="./CupWhite.svg" className="w-7 h-7" alt="Big prize" />
                <span className="text-white font-bold text-lg md:text-2xl text-center ">
                  {prize}
                </span>
              </div>
              {/* Timeout */}
              <CountdownTimer endDate={new Date(endDate).toString()} />
              {/* Info */}
              <div className={`${styles.flexCenter} flex-col gap-8 mt-24`}>
                {/* Title */}
                <div
                  className={`
                ${
                  isLuckyCard
                    ? "shadowPrizeSpecial text-secondary-yellow-500 "
                    : "shadowPrize text-primary-green-300 "
                }
                uppercase font-bold text-center  mt-6`}
                >
                  <span className="text-white text-base font-poppins">Müsabiqə</span>
                  <h5 className="text-3xl">{status}</h5>
                </div>
                {/* Prize Places */}
                <div
                  className={`${styles.flexCenter} gap-4 bg-black-800 py-4 w-4/5 mx-auto rounded-lg`}
                >
                  <img
                    src="./Cup.svg"
                    alt=""
                    className="text-secondary-yellow-500 w-6 h-6"
                  />
                  <h5 className="text-gray-300 font-bold text-lg uppercase tracking-wide">
                    {place_count} Mükafat yeri
                    {/* Prize Places */}
                  </h5>
                </div>
                {/* Lists */}
                <div className="w-full px-4 flex flex-col gap-5">
                  {/* Player */}
                  {top_three_players &&
                    top_three_players.map(({ id, image, username, wins }) => {
                      return (
                        <div
                          key={id}
                          className={`${styles.flexBetween} w-full font-bold `}
                        >
                          <div className={`${styles.flexCenter} gap-6`}>
                            <img
                              src={image}
                              alt={`${username} 's image`}
                              className="w-10 h-10 object-cover"
                            />
                            <h6 className="text-gray-400 uppercase">
                              {username}
                            </h6>
                          </div>
                          {/* wins */}
                          <div className={`${styles.flexCenter} gap-6`}>
                            <span className="text-primary-green-300">
                              {wins}
                            </span>
                            <img src="./power.svg" alt="" className="w-5 h-5" />
                          </div>
                        </div>
                      );
                    })}
                </div>
                {/* <BtnText children="Join Now" path={`/tournament/${id}`} /> */}
                <BtnText children="İndi Qoşul" path={`/tournament/${id}`} />
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default PrizeCard;

import {
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import { SwiperSlide } from "swiper/react";
import SmallSlider from "../Global-Components/SmallSlider";
import { useEffect, useState } from "react";
import { IStreamers } from "../../types";
import axios from "axios";
import { NavLink } from "react-router-dom";
const FeaturedGames = () => {
  const URL = "http://localhost:3080/streamers";
  const [streamers, setStreamers] = useState<IStreamers[]>([]);
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setStreamers(data);
    });
  }, []);
  return (
    // <SmallSlider secTitle="Streamer Featured Games">
    <SmallSlider secTitle="Yayımçılar tərəfindən seçilmişlər">
      {streamers.map(
        ({
          id,
          username,
          game_name,
          link,
          rate,
          thumbnail,
          monthly_watchers,
          followers,
        }) => {
          return (
            <SwiperSlide key={id} className="rounded-2xl h-80 my-12 relative">
              <NavLink to={link}>
                <img src={thumbnail} alt="" className="rounded-2xl" />
              </NavLink>
              <div className="p-2">
                <div className={`${styles.flexBetween} w-full`}>
                  <h6 className="text-base capitalize font-barlow font-bold text-white">
                    {username}
                  </h6>
                  {/* Stars and rate is here */}
                  <div className={`${styles.flexCenter} gap-2`}>
                    <div className="w-5 h-5 text-secondary-yellow-500">
                      <StarIcon />
                    </div>
                    <span className="text-gray-50 font-bold font-poppins text-sm">
                      {rate}
                    </span>
                  </div>
                </div>
                {/* Watchers and count is here */}
                <div className={`${styles.flexBetween} w-full`}>
                  {/* Game Name  */}
                  <h6 className="text-gray-500 text-xs capitalize tracking-wider font-poppins font-bold">
                    {game_name}
                  </h6>
                  {/* Download rate */}

                  <div className={`${styles.flexCenter} gap-2`}>
                    <div className="w-3 h-3 text-primary-green-500 font-bold">
                      <UserIcon />
                    </div>
                    <span className="text-gray-50 font-bold font-poppins text-xs">
                      {followers}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-white font-bold font-barlow tracking-wider text-base capitalize absolute -bottom-6 left-10 hidden swiperHover p-2 bg-primary-green-300">
                {monthly_watchers} Streaming
              </div>
            </SwiperSlide>
          );
        }
      )}
    </SmallSlider>
  );
};

export default FeaturedGames;

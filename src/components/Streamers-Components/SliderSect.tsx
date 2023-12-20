import { SwiperSlide } from "swiper/react";
import StreamersAPI from "../../api/StreamersAPI";
import { IStreamers } from "../../types";
import SmallSlider from "../Global-Components/SmallSlider";
import { NavLink } from "react-router-dom";
import { StarIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { styles } from "../../styles";

const SliderSect = () => {
  return (
    <StreamersAPI>
      {(streamers: IStreamers[]) => (
        <SmallSlider secTitle="Current Top Live Streams">
          {streamers.map(
            ({
              id,
              username,
              thumbnail,
              followers,
              current_watchers,
              link,
              game_name,
              rate,
            }) => {
              return (
                <SwiperSlide
                  key={id}
                  className="rounded-2xl h-80 my-12 relative"
                >
                  <NavLink to={link}>
                    <img
                      src={thumbnail}
                      alt={username}
                      className="rounded-2xl w-20 h-20"
                    />
                  </NavLink>
                  <div className="p-2">
                    <div className={`${styles.flexBetween} w-full`}>
                      <h6 className="text-base capitalize font-barlow font-bold text-white">
                        {username}
                      </h6>
                      {/* Stars and rate is here */}
                      <div className={`${styles.flexCenter} gap-2`}>
                        <div className="w-4 h-4 text-secondary-yellow-500">
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
                          <UserPlusIcon />
                        </div>
                        <span className="text-gray-50 font-bold font-poppins text-xs">
                          {followers}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-bold font-barlow tracking-wider text-base capitalize absolute -bottom-6 left-10 hidden swiperHover p-2 bg-primary-green-300">
                    {current_watchers} Streaming
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </SmallSlider>
      )}
    </StreamersAPI>
  );
};

export default SliderSect;

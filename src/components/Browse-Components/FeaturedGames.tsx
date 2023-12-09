import { ArrowDownTrayIcon, StarIcon } from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import { SwiperSlide } from "swiper/react";
import SmallSlider from "../Global-Components/SmallSlider";
const FeaturedGames = () => {
  return (
    <SmallSlider secTitle="Streamer Featured Games">
      <SwiperSlide className="rounded-2xl h-80 my-12 relative">
        <img src="./streamerSlider1.jpg" alt="" className="rounded-2xl" />
        <div className="p-2">
          <div className={`${styles.flexBetween} w-full`}>
            <h6 className="text-base capitalize font-barlow font-bold text-white">
              Gamer Name
            </h6>
            {/* Stars and rate is here */}
            <div className={`${styles.flexCenter} gap-2`}>
              <div className="w-5 h-5 text-secondary-yellow-500">
                <StarIcon />
              </div>
              <span className="text-gray-50 font-bold font-poppins text-sm">
                4.8
              </span>
            </div>
          </div>
          {/* Watchers and count is here */}
          <div className={`${styles.flexBetween} w-full`}>
            {/* Game Name  */}
            <h6 className="text-gray-500 text-xs capitalize tracking-wider font-poppins font-bold">
              Game Name
            </h6>
            {/* Download rate */}

            <div className={`${styles.flexCenter} gap-2`}>
              <div className="w-3 h-3 text-primary-green-500 font-bold">
                <ArrowDownTrayIcon />
              </div>
              <span className="text-gray-50 font-bold font-poppins text-xs">
                2.5M
              </span>
            </div>
          </div>
        </div>
        <div className="text-white font-bold font-barlow tracking-wider text-base capitalize absolute -bottom-6 translate-x-1/3 hidden swiperHover p-2 bg-primary-green-300">
          2.4K Streaming
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-2xl h-80 my-12 relative">
        <img src="./streamerSlider1.jpg" alt="" className="rounded-2xl" />
        <div className="p-2">
          <div className={`${styles.flexBetween} w-full`}>
            <h6 className="text-base capitalize font-barlow font-bold text-white">
              Gamer Name
            </h6>
            {/* Stars and rate is here */}
            <div className={`${styles.flexCenter} gap-2`}>
              <div className="w-5 h-5 text-secondary-yellow-500">
                <StarIcon />
              </div>
              <span className="text-gray-50 font-bold font-poppins text-sm">
                4.8
              </span>
            </div>
          </div>
          {/* Watchers and count is here */}
          <div className={`${styles.flexBetween} w-full`}>
            {/* Game Name  */}
            <h6 className="text-gray-500 text-xs capitalize tracking-wider font-poppins font-bold">
              Game Name
            </h6>
            {/* Download rate */}

            <div className={`${styles.flexCenter} gap-2`}>
              <div className="w-3 h-3 text-primary-green-500 font-bold">
                <ArrowDownTrayIcon />
              </div>
              <span className="text-gray-50 font-bold font-poppins text-xs">
                2.5M
              </span>
            </div>
          </div>
        </div>
        <div className="text-white font-bold font-barlow tracking-wider text-base capitalize absolute -bottom-6 translate-x-1/3 hidden swiperHover p-2 bg-primary-green-300">
          2.4K Streaming
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-2xl h-80 my-12 relative">
        <img src="./streamerSlider1.jpg" alt="" className="rounded-2xl" />
        <div className="p-2">
          <div className={`${styles.flexBetween} w-full`}>
            <h6 className="text-base capitalize font-barlow font-bold text-white">
              Gamer Name
            </h6>
            {/* Stars and rate is here */}
            <div className={`${styles.flexCenter} gap-2`}>
              <div className="w-5 h-5 text-secondary-yellow-500">
                <StarIcon />
              </div>
              <span className="text-gray-50 font-bold font-poppins text-sm">
                4.8
              </span>
            </div>
          </div>
          {/* Watchers and count is here */}
          <div className={`${styles.flexBetween} w-full`}>
            {/* Game Name  */}
            <h6 className="text-gray-500 text-xs capitalize tracking-wider font-poppins font-bold">
              Game Name
            </h6>
            {/* Download rate */}

            <div className={`${styles.flexCenter} gap-2`}>
              <div className="w-3 h-3 text-primary-green-500 font-bold">
                <ArrowDownTrayIcon />
              </div>
              <span className="text-gray-50 font-bold font-poppins text-xs">
                2.5M
              </span>
            </div>
          </div>
        </div>
        <div className="text-white font-bold font-barlow tracking-wider text-base capitalize absolute -bottom-6 translate-x-1/3 hidden swiperHover p-2 bg-primary-green-300">
          2.4K Streaming
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-2xl h-80 my-12 relative">
        <img src="./streamerSlider1.jpg" alt="" className="rounded-2xl" />
        <div className="p-2">
          <div className={`${styles.flexBetween} w-full`}>
            <h6 className="text-base capitalize font-barlow font-bold text-white">
              Gamer Name
            </h6>
            {/* Stars and rate is here */}
            <div className={`${styles.flexCenter} gap-2`}>
              <div className="w-5 h-5 text-secondary-yellow-500">
                <StarIcon />
              </div>
              <span className="text-gray-50 font-bold font-poppins text-sm">
                4.8
              </span>
            </div>
          </div>
          {/* Watchers and count is here */}
          <div className={`${styles.flexBetween} w-full`}>
            {/* Game Name  */}
            <h6 className="text-gray-500 text-xs capitalize tracking-wider font-poppins font-bold">
              Game Name
            </h6>
            {/* Download rate */}

            <div className={`${styles.flexCenter} gap-2`}>
              <div className="w-3 h-3 text-primary-green-500 font-bold">
                <ArrowDownTrayIcon />
              </div>
              <span className="text-gray-50 font-bold font-poppins text-xs">
                2.5M
              </span>
            </div>
          </div>
        </div>
        <div className="text-white font-bold font-barlow tracking-wider text-base capitalize absolute -bottom-6 translate-x-1/3 hidden swiperHover p-2 bg-primary-green-300">
          2.4K Streaming
        </div>
      </SwiperSlide>
    </SmallSlider>
  );
};

export default FeaturedGames;

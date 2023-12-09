import {
  ArrowDownTrayIcon,
  CheckBadgeIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import SmallSlider from "../components/Global-Components/SmallSlider";
import Header from "../components/Header-Components/Header";
import image from "/heroimg3.png";
import { styles } from "../styles";
import { SwiperSlide } from "swiper/react";
import TopList from "../components/Global-Components/TopList";
import SectionHead from "../components/Global-Components/SectionHead";
import All from "../components/Global-Components/All";
import { NavLink } from "react-router-dom";

const Streams = () => {
  return (
    <>
      {/* Header */}
      <Header>
        <h4 className="md:ml-4 lg:ml-8 mb-12 md:mb-0 text-center md:text-left font-barlow font-bold text-white text-4xl md:text-5xl uppercase tracking-wide drop-shadow-lg">
          Explore Streams
        </h4>
        <img src={image} alt="" className="w-fit h-fit lg:ml-24 " />
      </Header>
      {/* Main */}
      <main>
        <section
          className={`${styles.paddingX} grid grid-cols-1 lg:grid-cols-browse gap-6 mt-36`}
        >
          {/* Slider */}
          <SmallSlider secTitle="Current Top Live Streams">
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
          {/* Most Followed Streamers List */}
          <TopList secTitle="Top Streamers">
            {/* List */}
            <div className="flex flex-col gap-6">
              {/* Item */}
              <div className="w-full flex items-center gap-6 border-b border-b-gray-500 border-opacity-20 pb-6">
                <img
                  src="./streamer1.png"
                  alt=""
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckBadgeIcon className="w-5 h-5 text-primary-green-300 " />
                    <span className="text-lg font-barlow font-bold text-white">
                      Streamer Username
                    </span>
                  </div>
                  <button className="rounded-3xl py-2 px-3 text-white font-poppins font-bold text-sm capitalize text-center bg-primary-green-300 hover:bg-secondary-yellow-500 transition-all duration-500 w-fit">
                    Follow
                  </button>
                </div>
              </div>
              {/* Item */}
              <div className="w-full flex items-center gap-6 border-b border-b-gray-500 border-opacity-20 pb-6">
                <img
                  src="./streamer1.png"
                  alt=""
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckBadgeIcon className="w-5 h-5 text-primary-green-300 " />
                    <span className="text-lg font-barlow font-bold text-white">
                      Streamer Username
                    </span>
                  </div>
                  <button className="rounded-3xl py-2 px-3 text-white font-poppins font-bold text-sm capitalize text-center bg-primary-green-300 w-fit">
                    Follow
                  </button>
                </div>
              </div>
              {/* Item */}
              <div className="w-full flex items-center gap-6">
                <img
                  src="./streamer1.png"
                  alt=""
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckBadgeIcon className="w-5 h-5 text-primary-green-300 " />
                    <span className="text-lg font-barlow font-bold text-white">
                      Streamer Username
                    </span>
                  </div>
                  <button className="rounded-3xl py-2 px-3 text-white font-poppins font-bold text-sm capitalize text-center bg-primary-green-300 w-fit">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </TopList>
        </section>
        {/* All Streamers List */}
        <section className={`${styles.padding} my-24 flex flex-col gap-16`}>
          <SectionHead
            headTitle="Enjoy Playing with together"
            title="Most Popular Streamers"
          />
          <All>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 gap-y-9 place-items-center py-16 px-4 lg:px-8">
              <NavLink
                to="/streams/1"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="bg-black-800 p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
              >
                <img
                  src="./streamer2.png"
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                    Streamer Name
                  </h6>
                  <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                    26.8K followers
                  </span>
                </div>
              </NavLink>
            </div>
          </All>
        </section>
      </main>
    </>
  );
};

export default Streams;

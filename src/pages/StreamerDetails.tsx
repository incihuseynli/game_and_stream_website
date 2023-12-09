import {
  CheckBadgeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { styles } from "../styles";
import { NavLink } from "react-router-dom";
import image from "/img1.jpg";
const StreamDetails = () => {
  const active: boolean = true;
  return (
    <main
      className={`${styles.margin} p-12 rounded-xl  bg-black-500 flex flex-col gap-20`}
    >
      {/* About Streamer */}
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        {/* Promo video */}
        <video controls className="w-full ">
          <source
            src="https://www.youtube.com/watch?v=ssrNcwxALS4"
            type="video/mp4"
          />
          <source
            src="https://www.youtube.com/watch?v=ssrNcwxALS4"
            type="video/webm"
          />
          <source
            src="https://www.youtube.com/watch?v=ssrNcwxALS4"
            type="video/ogg"
          />
          Your browser does not support the video tag.
        </video>
        {/* Info */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <img
              src="./streamer1.png"
              alt=""
              className="w-24 h-24 object-cover rounded-full"
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
          <div className="flex flex-col gap-2 text-gray-300 font-poppins text-base tracking-wide">
            <span>
              <span className="text-secondary-yellow-500 font-bold">12K</span>{" "}
              monthly watchers
            </span>
            <span>
              <span className="text-secondary-yellow-500 font-bold">8964</span>{" "}
              followes
            </span>
            <span>
              <span className="text-secondary-yellow-500 font-bold">4565</span>{" "}
              hours game played this month
            </span>
            <span>
              <span className="text-secondary-yellow-500 font-bold">46</span>{" "}
              hours streamed this week
            </span>
          </div>
        </div>
      </section>
      {/* Their previous streams list */}
      <section className="flex flex-col items-center justify-center gap-8">
        {/* Title */}
        <h4 className="font-barlow font-bold uppercase text-white text-3xl text-center">
          Previous Streams of{" "}
          <span className="text-primary-green-300">Streamer</span>
        </h4>
        {/* List */}
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-wrap w-full items-center justify-start gap-4">
            <NavLink
              to="/"
              className="relative streamCard transition-all duration-700 border rounded-xl border-gray-400 border-opacity-20 hover:border-primary-green-300"
            >
              <img
                src={image}
                alt=""
                className="w-52 h-52 rounded-xl object-cover"
              />
              <div className="hidden info flex-col items-center bg-primary-green-300 rounded-sm absolute bottom-0 translate-x-1/4 translate-y-14 w-fit py-2 px-6">
                <span className="text-white font-barlow font-bold text-base">
                  Game Name
                </span>
                <span className="text-white font-bold font-poppins text-xs tracking-wide">
                  7K streaming
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/"
              className="relative streamCard transition-all duration-700 border rounded-xl border-gray-400 border-opacity-20 hover:border-primary-green-300"
            >
              <img
                src={image}
                alt=""
                className="w-52 h-52 rounded-xl object-cover"
              />
              <div className="hidden info flex-col items-center bg-primary-green-300 rounded-sm absolute bottom-0 translate-x-1/4 translate-y-14 w-fit py-2 px-6">
                <span className="text-white font-barlow font-bold text-base">
                  Game Name
                </span>
                <span className="text-white font-bold font-poppins text-xs tracking-wide">
                  7K streaming
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/"
              className="relative streamCard transition-all duration-700 border rounded-xl border-gray-400 border-opacity-20 hover:border-primary-green-300"
            >
              <img
                src={image}
                alt=""
                className="w-52 h-52 rounded-xl object-cover"
              />
              <div className="hidden info flex-col items-center bg-primary-green-300 rounded-sm absolute bottom-0 translate-x-1/4 translate-y-14 w-fit py-2 px-6">
                <span className="text-white font-barlow font-bold text-base">
                  Game Name
                </span>
                <span className="text-white font-bold font-poppins text-xs tracking-wide">
                  7K streaming
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/"
              className="relative streamCard transition-all duration-700 border rounded-xl border-gray-400 border-opacity-20 hover:border-primary-green-300"
            >
              <img
                src={image}
                alt=""
                className="w-52 h-52 rounded-xl object-cover"
              />
              <div className="hidden info flex-col items-center bg-primary-green-300 rounded-sm absolute bottom-0 translate-x-1/4 translate-y-14 w-fit py-2 px-6">
                <span className="text-white font-barlow font-bold text-base">
                  Game Name
                </span>
                <span className="text-white font-bold font-poppins text-xs tracking-wide">
                  7K streaming
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/"
              className="relative streamCard transition-all duration-700 border rounded-xl border-gray-400 border-opacity-20 hover:border-primary-green-300"
            >
              <img
                src={image}
                alt=""
                className="w-52 h-52 rounded-xl object-cover"
              />
              <div className="hidden info flex-col items-center bg-primary-green-300 rounded-sm absolute bottom-0 translate-x-1/4 translate-y-14 w-fit py-2 px-6">
                <span className="text-white font-barlow font-bold text-base">
                  Game Name
                </span>
                <span className="text-white font-bold font-poppins text-xs tracking-wide">
                  7K streaming
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/"
              className="relative streamCard transition-all duration-700 border rounded-xl border-gray-400 border-opacity-20 hover:border-primary-green-300"
            >
              <img
                src={image}
                alt=""
                className="w-52 h-52 rounded-xl object-cover"
              />
              <div className="hidden info flex-col items-center bg-primary-green-300 rounded-sm absolute bottom-0 translate-x-1/4 translate-y-14 w-fit py-2 px-6">
                <span className="text-white font-barlow font-bold text-base">
                  Game Name
                </span>
                <span className="text-white font-bold font-poppins text-xs tracking-wide">
                  7K streaming
                </span>
              </div>
            </NavLink>
          </div>
          {/* Pagination */}
          <div className={`${styles.flexCenter} gap-2 text-white mt-4 mb-8`}>
            {/* Previous button */}
            <button className="w-9 h-9 border text-white border-gray-500 hover:border-primary-green-300 hover:text-primary-green-300 transition-all duration-500 rounded-md p-2">
              <ChevronLeftIcon />
            </button>
            {/* Page number's buttons */}
            <button
              className={`w-9 h-9 text-center font-barlow font-medium text-base border transition-all duration-500 rounded-md p-1
          ${
            active
              ? "bg-primary-green-300 border-primary-green-300"
              : "bg-transparent border-gray-500 hover:border-primary-green-300 hover:text-primary-green-300"
          }`}
            >
              1
            </button>

            {/* Next button */}
            <button className="w-9 h-9 border text-white border-gray-500 hover:border-primary-green-300 hover:text-primary-green-300 transition-all duration-500 rounded-md p-2">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StreamDetails;

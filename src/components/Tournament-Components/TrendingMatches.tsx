import { PlayCircleIcon, PlayIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import image from "/t1.png";
import { styles } from "../../styles";
const TrendingMatches = () => {
  return (
    <section className="bg-black-500 h-fit rounded-sm border border-gray-400 border-opacity-20">
      {/* Head */}
      <div className="flex items-center gap-2 bg-gray-800 py-6 px-4 bg-opacity-40">
        <PlayIcon className="w-4 h-4 text-primary-green-300" />
        <h6 className="font-barlow font-bold text-white text-xl uppercase">
          TRENDING MATCHES
        </h6>
      </div>
      <div className="flex flex-col gap-2 py-4">
        {/* List Item */}
        <NavLink
          to="/"
          className="flex items-center gap-4 hover:shadow-2xl p-4 transition-all duration-700"
        >
          <img
            src={image}
            className="w-24 h-24 bg-black-800 py-4 px-6 rounded-md  object-contain "
            alt=""
          />
          <div className={`${styles.flexBetween} w-full`}>
            <div className="flex flex-col">
              <h5 className="text-white text-lg uppercase font-bold tracking-wide">
                FOXTIE MAX
              </h5>
              <span className="text-sm uppercase text-primary-green-300 font-bold tracking-wider">
                $ 75000
              </span>
            </div>
            <PlayCircleIcon className="w-6 h-6 text-primary-green-300 mr-4" />
          </div>
        </NavLink>
        {/* List Item */}
        <NavLink
          to="/"
          className="flex items-center gap-4  hover:shadow-2xl p-4 transition-all duration-700"
        >
          <img
            src={image}
            className="w-24 h-24 bg-black-800 py-4 px-6 rounded-md  object-contain "
            alt=""
          />
          <div className={`${styles.flexBetween} w-full`}>
            <div className="flex flex-col">
              <h5 className="text-white text-lg uppercase font-bold tracking-wide">
                FOXTIE MAX
              </h5>
              <span className="text-sm uppercase text-primary-green-300 font-bold tracking-wider">
                $ 75000
              </span>
            </div>
            <PlayCircleIcon className="w-6 h-6 text-primary-green-300 mr-4" />
          </div>
        </NavLink>
        {/* List Item */}
        <NavLink
          to="/"
          className="flex items-center gap-4  hover:shadow-2xl p-4 transition-all duration-700"
        >
          <img
            src={image}
            className="w-24 h-24 bg-black-800 py-4 px-6 rounded-md  object-contain "
            alt=""
          />
          <div className={`${styles.flexBetween} w-full`}>
            <div className="flex flex-col">
              <h5 className="text-white text-lg uppercase font-bold tracking-wide">
                FOXTIE MAX
              </h5>
              <span className="text-sm uppercase text-primary-green-300 font-bold tracking-wider">
                $ 75000
              </span>
            </div>
            <PlayCircleIcon className="w-6 h-6 text-primary-green-300 mr-4" />
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default TrendingMatches;

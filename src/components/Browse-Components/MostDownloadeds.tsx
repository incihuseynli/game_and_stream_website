import {
  ArrowDownTrayIcon,
  FolderArrowDownIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import BtnText from "../Buttons/BtnText";
import TopList from "../Global-Components/TopList";

const MostDownloadeds = () => {
  return (
    <TopList secTitle="Top Downloaded Games">
      <div className={`${styles.flexCenter} flex-col gap-4 `}>
        {/* TOP GAMES LIMIT = 3 */}
        {/* ITEM */}
        <div
          className={`flex gap-8 items-center pb-6 border-b last:border-b-0 border-b-gray-400 border-opacity-20`}
        >
          <img
            src="./img1.jpg"
            alt=""
            className="w-28 h-28 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-2">
            <div className={`${styles.flexBetween} w-full gap-2`}>
              <div className="flex flex-col gap-1">
                {/* GAME NAME */}
                <h6 className="text-lg capitalize font-barlow font-bold text-white">
                  Game Name
                </h6>
                {/* GAME COMPANY */}
                <span className="text-xs capitalize text-gray-500 font-poppins font-bold tracking-wider">
                  Game Company
                </span>
              </div>
              {/* DOWNLOAD BUTTON */}
              <div className="w-12 h-12 text-primary-green-300 hover:text-primary-green-800 transition-all duration-300">
                <FolderArrowDownIcon />
              </div>
            </div>
            <div className={`${styles.flexBetween} w-2/3 gap-4`}>
              {/* RATE */}
              <div className={`${styles.flexCenter} gap-2`}>
                <div className="w-5 h-5 text-secondary-yellow-500">
                  <StarIcon />
                </div>
                <span className="text-gray-50 font-bold font-poppins text-sm">
                  4.8
                </span>
              </div>
              {/* DOWNLOADs */}
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
        </div>
        {/* ITEM */}
        <div
          className={`flex gap-8 items-center pb-6 border-b last:border-b-0 border-b-gray-400 border-opacity-20`}
        >
          <img
            src="./img1.jpg"
            alt=""
            className="w-28 h-28 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-2">
            <div className={`${styles.flexBetween} w-full gap-2`}>
              <div className="flex flex-col gap-1">
                {/* GAME NAME */}
                <h6 className="text-lg capitalize font-barlow font-bold text-white">
                  Game Name
                </h6>
                {/* GAME COMPANY */}
                <span className="text-xs capitalize text-gray-500 font-poppins font-bold tracking-wider">
                  Game Company
                </span>
              </div>
              {/* DOWNLOAD BUTTON */}
              <div className="w-12 h-12 text-primary-green-300 hover:text-primary-green-800 transition-all duration-300">
                <FolderArrowDownIcon />
              </div>
            </div>
            <div className={`${styles.flexBetween} w-2/3 gap-4`}>
              {/* RATE */}
              <div className={`${styles.flexCenter} gap-2`}>
                <div className="w-5 h-5 text-secondary-yellow-500">
                  <StarIcon />
                </div>
                <span className="text-gray-50 font-bold font-poppins text-sm">
                  4.8
                </span>
              </div>
              {/* DOWNLOADs */}
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
        </div>
        {/* ITEM */}
        <div
          className={`flex gap-8 items-center pb-6 border-b last:border-b-0 border-b-gray-400 border-opacity-20`}
        >
          <img
            src="./img1.jpg"
            alt=""
            className="w-28 h-28 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-2">
            <div className={`${styles.flexBetween} w-full gap-2`}>
              <div className="flex flex-col gap-1">
                {/* GAME NAME */}
                <h6 className="text-lg capitalize font-barlow font-bold text-white">
                  Game Name
                </h6>
                {/* GAME COMPANY */}
                <span className="text-xs capitalize text-gray-500 font-poppins font-bold tracking-wider">
                  Game Company
                </span>
              </div>
              {/* DOWNLOAD BUTTON */}
              <div className="w-12 h-12 text-primary-green-300 hover:text-primary-green-800 transition-all duration-300">
                <FolderArrowDownIcon />
              </div>
            </div>
            <div className={`${styles.flexBetween} w-2/3 gap-4`}>
              {/* RATE */}
              <div className={`${styles.flexCenter} gap-2`}>
                <div className="w-5 h-5 text-secondary-yellow-500">
                  <StarIcon />
                </div>
                <span className="text-gray-50 font-bold font-poppins text-sm">
                  4.8
                </span>
              </div>
              {/* DOWNLOADs */}
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
        </div>
      </div>
      <BtnText children="View all games" path="" />
    </TopList>
  );
};

export default MostDownloadeds;

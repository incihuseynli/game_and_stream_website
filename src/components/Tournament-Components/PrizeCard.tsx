import { NavLink } from "react-router-dom";
import { styles } from "../../styles";
import CountdownTimer from "../Global-Components/CountdownTimer";
interface IProps {
  isLuckyCard: boolean;
}
const PrizeCard = ({ isLuckyCard }: IProps) => {
  // Should come from API
  const endDate = new Date("December 31, 2023 23:59:59").toString();
  return (
    <div className="relative flex flex-col gap-6 font-barlow w-96 bg-black-500 rounded-lg px-4 py-8 hover:-translate-y-3 transition-all duration-700">
      {/* Prize */}
      <div
        className={`absolute left-1 md:-left-4 ${
          isLuckyCard
            ? "boxShadow bg-secondary-yellow-500"
            : "boxShadow2 bg-primary-green-300"
        }  -top-4 rounded-xl md:-skew-x-12 text-center w-32 md:w-40 p-4  h-[75px]  flex items-center gap-3`}
      >
        <img src="./CupWhite.svg" className="w-7 h-7" alt="" />
        <span className="text-white font-bold text-lg md:text-2xl text-center ">
          25 000
        </span>
      </div>
      {/* Timeout */}
      {/* <div className=" absolute right-0 top-0 p-4 rounded-t-xl rounded-bl-xl ">
        <div className="flex">
          <div className="flex flex-col items-center">
            <span className="text-white font-medium tracking-wide text-sm">
              126
            </span>
            <span className="uppercase text-base font-bold tracking-wide text-gray-500">
              Day
            </span>
          </div>
          <span className="text-base text-gray-500 mx-2  -mt-1">:</span>
          <div className="flex flex-col items-center">
            <span className="text-white font-medium tracking-wide text-sm">
              03
            </span>
            <span className="uppercase text-base font-bold tracking-wide text-gray-500">
              Hour
            </span>
          </div>
          <span className="text-base text-gray-500 mx-2  -mt-1">:</span>
          <div className="flex flex-col items-center">
            <span className="text-white font-medium tracking-wide text-sm">
              00
            </span>
            <span className="uppercase text-base font-bold tracking-wide text-gray-500">
              Min
            </span>
          </div>
          <span className="text-base text-gray-500 mx-2  -mt-1">:</span>
          <div className="flex flex-col items-center">
            <span className="text-white font-medium tracking-wide text-sm">
              00
            </span>
            <span className="uppercase text-base font-bold tracking-wide text-gray-500">
              sec
            </span>
          </div>
        </div>
      </div> */}
      <CountdownTimer endDate={endDate} />
      {/* Info */}
      <div className={`${styles.flexCenter} flex-col gap-8 mt-24`}>
        {/* Title */}
        <div className="uppercase font-bold text-center shadowPrize mt-6">
          <span className="text-white text-base">Tournament</span>
          <h5 className="text-primary-green-300 text-3xl">OF WEEKLY</h5>
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
            3 Prize Places
          </h5>
        </div>
        {/* Lists */}
        <div className="w-full px-4 flex flex-col gap-5">
          {/* Player */}
          <div className={`${styles.flexBetween} w-full font-bold `}>
            <div className={`${styles.flexCenter} gap-6`}>
              <img
                src="./streamer1.png"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <h6 className="text-gray-400 uppercase">Player Name</h6>
            </div>
            {/* wins */}
            <div className={`${styles.flexCenter} gap-6`}>
              <span className="text-primary-green-300">125</span>
              <img src="./power.svg" alt="" className="w-5 h-5" />
            </div>
          </div>
          <div className={`${styles.flexBetween} w-full font-bold `}>
            <div className={`${styles.flexCenter} gap-6`}>
              <img
                src="./streamer1.png"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <h6 className="text-gray-400 uppercase">Player Name</h6>
            </div>
            {/* wins */}
            <div className={`${styles.flexCenter} gap-6`}>
              <span className="text-primary-green-300">125</span>
              <img src="./power.svg" alt="" className="w-5 h-5" />
            </div>
          </div>
          <div className={`${styles.flexBetween} w-full font-bold `}>
            <div className={`${styles.flexCenter} gap-6`}>
              <img
                src="./streamer1.png"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <h6 className="text-gray-400 uppercase">Player Name</h6>
            </div>
            {/* wins */}
            <div className={`${styles.flexCenter} gap-6`}>
              <span className="text-primary-green-300">125</span>
              <img src="./power.svg" alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
        <NavLink
          to="/"
          className="uppercase text-white font-bold text-lg tracking-wide hover:text-primary-green-300 transition-all duration-500"
        >
          Join Now
        </NavLink>
      </div>
    </div>
  );
};

export default PrizeCard;

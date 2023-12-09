import { StarIcon } from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import BtnText from "../Buttons/BtnText";
const GameCard = () => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-4 items-center w-full h-full   rounded-xl p-4 bg-black-800 shadow-2xl border border-white border-opacity-10 hover:border hover:border-primary-green-500 hover:border-opacity-30`}
    >
      <img
        src="./img1.jpg"
        alt="Game Name"
        className="rounded-xl max-w-40 max-h-40  w-fit h-fit object-cover"
      />
      <div className="w-full flex flex-col gap-2">
        {/* Top */}
        <div className={`${styles.flexBetween} md:flex-col md:items-start lg:flex-row lg:items-center w-full`}>
          {/* Game Name */}
          <h5 className="text-white text-xl uppercase tracking-wide font-barlow font-bold">
            Fortnite
          </h5>
          {/* Game Rate */}
          <div className={`${styles.flexCenter} gap-2`}>
            <div className="w-5 h-5 text-secondary-yellow-500">
              <StarIcon />
            </div>
            <span className="text-gray-50 font-bold font-poppins text-sm">
              4.8
            </span>
          </div>
        </div>
        {/* Bottom */}
        <div className={`${styles.flexBetween}  md:flex-col md:items-start lg:flex-row lg:items-center  mb-4 w-full`}>
          {/* Game Company  */}
          <h5 className="text-gray-500 text-base mr-2 capitalize tracking-wider font-poppins font-bold">
            Sandbox
          </h5>
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
        <BtnText path="/browse/1">More Details</BtnText>
      </div>
    </div>
  );
};

export default GameCard;

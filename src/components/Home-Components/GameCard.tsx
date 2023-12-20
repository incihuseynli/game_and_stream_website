import { StarIcon } from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import BtnText from "../Buttons/BtnText";
import { IGame } from "../../types";
type IProps = {
  currentData: IGame;
};
const GameCard = ({ currentData }: IProps) => {
  const { thumbnail, title, id, publisher, rate, downloads } = currentData;
  return (
    <div
      className={`flex flex-col md:flex-row gap-4 items-center w-full h-full   rounded-xl p-4 bg-black-800 shadow-2xl border border-white border-opacity-10 hover:border hover:border-primary-green-500 hover:border-opacity-30`}
    >
      <img
        src={thumbnail}
        alt={title}
        className="rounded-xl w-40 h-40 lg:w-40 lg:h-40 md:w-32 md:h-32 object-cover"
      />
      <div className="w-full flex flex-col items-center md:items-start gap-2">
        {/* Top */}
        <div
          className={`flex flex-col items-center md:items-start gap-2 md:gap-0  w-full`}
        >
          {/* Game Name */}
          <h5 className="text-center md:text-left text-white text-lg md:text-base lg:text-lg uppercase tracking-wide font-barlow font-bold truncate w-full md:w-40">
            {title}
          </h5>

          <div
            className={`${styles.flexCenter} md:justify-between w-full gap-4`}
          >
            {/* Game Rate */}
            <div className={`${styles.flexCenter} gap-2`}>
              <div className="w-5 h-5 text-secondary-yellow-500">
                <StarIcon />
              </div>
              <span className="text-gray-50 font-bold font-poppins text-sm">
                {rate}
              </span>
            </div>
            {/* Download rate */}
            <div className={`${styles.flexCenter} gap-2`}>
              <div className="w-5 h-5 text-primary-green-500 font-bold">
                <ArrowDownTrayIcon />
              </div>
              <span className="text-gray-50 font-bold font-poppins text-sm">
                {downloads}
              </span>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div
          className={`${styles.flexBetween}  md:flex-col md:items-start lg:flex-row lg:items-center  mb-4 w-full`}
        >
          {/* Game Company  */}
          <h5 className="text-gray-500 text-xs truncate text-center md:text-left w-full md:w-32 mr-2 capitalize tracking-wider font-poppins font-bold">
            {publisher}
          </h5>
        </div>
        <BtnText path={`/browse/${id}`}>More Details</BtnText>
      </div>
    </div>
  );
};

export default GameCard;

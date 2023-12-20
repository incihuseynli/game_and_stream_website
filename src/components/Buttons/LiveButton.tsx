import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { IBtn } from "../../types";
import clickBtn from "/click1.mp3";

const LiveButton = ({ path }: IBtn) => {
  const clickSound = (): void => {
    new Audio(clickBtn).play();
  };
  return (
    <NavLink
      to={path}
      className="text-gray-400 text-sm tracking-wide rounded-md uppercase font-bold bg-black-500 py-4 px-6 flex items-center gap-2 mx-auto lg:mx-0  hover:text-secondary-yellow-500 transition-all duration-700 hover:shadow-2xl"
      onClick={clickSound}
    >
      Live now <PlayCircleIcon className="w-4 h-4 " />
    </NavLink>
  );
};

export default LiveButton;

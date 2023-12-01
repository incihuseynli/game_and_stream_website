import { NavLink } from "react-router-dom";
import { IBtn } from "../../types";
import clickBtn from "/click1.mp3";
const Btn = ({ children, path }: IBtn) => {
  const clickSound = (): void => {
    new Audio(clickBtn).play();
  };
  return (
    <NavLink
      to={path}
      className="w-36 h-14  py-3  btnClip text-center text-white text-lg capitalize font-medium tracking-wider"
      onClick={clickSound}
    >
      {children}
    </NavLink>
  );
};

export default Btn;

import { NavLink } from "react-router-dom";
import { IBtn } from "../../types";
import clickBtn from "/click1.mp3";

const BtnText = ({ children, path }: IBtn) => {
  const clickSound = (): void => {
    new Audio(clickBtn).play();
  };
  return (
    <NavLink
      to={path}
      className="text-primary-green-500 hover:text-primary-green-300 transition-all duration-300 text-lg uppercase tracking-wide font-bold font-barlow"
      onClick={clickSound}
    >
      {children}
    </NavLink>
  );
};

export default BtnText;

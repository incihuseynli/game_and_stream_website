import { NavLink } from "react-router-dom";
import { IBtn } from "../../types";

const BtnText = ({ children, path }: IBtn) => {
  return (
    <NavLink
      to={path}
      className="text-primary-green-500 hover:text-primary-green-300 transition-all duration-300 text-lg uppercase tracking-wide font-bold font-barlow"
    >
      {children}
    </NavLink>
  );
};

export default BtnText;

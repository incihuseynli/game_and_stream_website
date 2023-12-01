
import { NavLink } from "react-router-dom";
import { Paths } from "../../PageRouting/Paths";


const NavLinks = () => {
  return (
    <>
      {Paths.map(({ id, path, title }) => {
        return (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) => `
          ${
            isActive
              ? "text-primary-green-500  line-through  decoration-2"
              : "text-white"
          } 
          text-xl md:text-lg font-barlow font-bold uppercase -tracking-wider
          hover:text-primary-green-500  hover:line-through hover:decoration-2
           transition-all duration-500
          `}
          >
            {title}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;

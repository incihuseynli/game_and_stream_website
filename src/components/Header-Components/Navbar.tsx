import NavLinks from "./NavLinks";
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import CloseBtn from "../Buttons/CloseBtn";
import MobileBtn from "../Buttons/MobileBtn";
import { useAuth } from "../ContextAPI/AuthContext";
import logo from "/logo.png";
import clickBtn from "/click1.mp3";
import image from "/streamer1.png";
import logoMobile from "/logo2.png";

const Header = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1024px)");
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLogged, handleLogout } = useAuth();
  const logout = () => {
    handleLogout();
    clickSound();
  };
  const clickSound = (): void => {
    new Audio(clickBtn).play();
  };

  return (
    <nav className={`${styles.flexBetween} ${styles.padding} gap-16 w-full`}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className={`${styles.flexBetween} lg:w-full`}>
        <div className={`${styles.flexBetween} w-full`}>
          {isAboveMediumScreens ? (
            // Large Screens Menu
            <div className={`${styles.flexCenter} lg:gap-12 w-full`}>
              <NavLinks />
            </div>
          ) : (
            // Medium and Small Screens Menu
            <div className="relative">
              <MobileBtn isOpen={isOpen} setIsOpen={setIsOpen} />
              {/* MOBILE MENU */}
              {isOpen && (
                <div
                  className="fixed top-0 -right-2 w-3/5 z-50 
              sm:w-2/5 h-full bg-black-500 shadow-lg
              flex flex-col gap-10 py-6 px-4 slide-left
              "
                >
                  <div
                    className={`${styles.flexBetween} border-b border-gray-500 pb-6`}
                  >
                    {/* LOGO */}
                    <div className={`${styles.flexBetween} gap-4`}>
                      <NavLink to="/">
                        <img
                          src={logoMobile}
                          className="w-10 h-10 object-cover"
                          alt="logo"
                        />
                      </NavLink>

                      <div className="flex flex-col">
                        <div className="flex">
                          <p className=" text-white text-[10px] font-medium first-letter:text-primary-green-500">
                            {/* Game & */}
                            Oyun və
                          </p>
                          <p className="text-white text-[10px] font-medium first-letter:text-primary-green-500">
                            &nbsp;Yayım
                            {/* Streaming */}
                          </p>
                        </div>
                        <p className="tracking-wider text-lg -mt-1 font-medium text-primary-green-500 ">
                          Platforması
                        </p>
                      </div>
                    </div>
                    {/* CLOSE BUTTON */}
                    <CloseBtn setIsOpen={setIsOpen} />
                  </div>
                  {/* MENUS */}
                  <div className={`${styles.flexCenter} flex-col gap-4`}>
                    <NavLinks />
                  </div>
                </div>
              )}
            </div>
          )}
          {/* Sign in/ Profile Button */}
          {isLogged ? (
            <div className="flex items-baseline gap-4">
              <NavLink to="/auth">
                <img
                  src={image}
                  alt=""
                  className="rounded-full w-14 h-12 object-cover"
                />
              </NavLink>

              <div
                className="text-primary-green-500 w-10 h-10"
                onClick={logout}
              >
                <ArrowRightOnRectangleIcon />
              </div>
            </div>
          ) : (
            <NavLink
              to="/auth"
              onClick={clickSound}
              className={`${
                isAboveSmallScreens ? "w-36 h-14  py-3  btnClip" : "w-10 h-10 "
              } text-center text-white text-lg uppercase font-medium tracking-wider`}
            >
              {isAboveSmallScreens ? (
                // "Sign in"
                "Giriş"
              ) : (
                <div className="text-primary-green-500">
                  <ArrowLeftOnRectangleIcon />
                </div>
              )}
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

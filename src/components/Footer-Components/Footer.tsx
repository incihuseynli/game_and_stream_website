import { Link, NavLink } from "react-router-dom";
import { styles } from "../../styles";
import NavLinks from "../Header-Components/NavLinks";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  return (
    <footer
      className={`bg-black-500 ${styles.paddingX} pt-24 font-poppins mt-14 -mb-6 grid grid-rows-1 place-items-center gap-16`}
    >
      {/* TOP */}
      <div className="grid grid-cols-1 place-items-center items-start sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and about with socials */}
        <div
          className={`${styles.flexCenter} flex-col gap-6 sm:items-start sm:justify-start `}
        >
          <NavLink to="/">
            <img src="./logo.png" alt="logo" />
          </NavLink>
          <p className="sm:ml-3 w-4/5  text-center text-gray-50 text-sm font-medium sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            voluptate tenetur fuga magni rem voluptatibus maiores consequuntur
            labore est cum.
          </p>
          {/* Socials */}
          <div className="ml-3 flex items-center justify-start gap-4">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src="./facebook.svg"
                className="w-8 h-8 p-2 bg-blue-600 rounded-full hover:bg-primary-green-500 transition-all duration-500"
                alt="Follow us on Facebook"
              />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src="./discord.svg"
                className="w-8 h-8 p-2 bg-purple-950 rounded-full hover:bg-primary-green-500 transition-all duration-500"
                alt="Join our discord group"
              />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src="./twitter.svg"
                className="w-8 h-8 p-2 bg-blue-400 rounded-full hover:bg-primary-green-500 transition-all duration-500"
                alt="Follow us on Twitter"
              />
            </a>
          </div>
        </div>
        {/* Quick Menu */}
        <div className={`${styles.flexCenter}  flex-col gap-6`}>
          <h5 className="text-2xl font-barlow font-bold text-gray-50 uppercase tracking-wider">
            QUICK LINKS
          </h5>
          <ul className={`${styles.flexCenter} flex-col gap-2`}>
            <NavLinks />
          </ul>
        </div>
        {/* Newsletter */}
        <div className={`${styles.flexCenter} sm:items-start flex-col gap-6`}>
          <h5 className="text-2xl font-barlow font-bold text-gray-50 uppercase tracking-wider">
            Newsletter
          </h5>
          <p className=" w-4/5  text-center text-gray-50 text-sm font-medium sm:text-left">
            Subscribe our newsletter to get our latest update & news
          </p>
          <div className="w-3/4 h-10 rounded-md flex  bg-black-500">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Get News & Updates"
              className=" text-sm text-white
             flex-1 bg-transparent outline-none border-none h-full p-4
             "
            />
            <button
              className="w-10 h-full text-center rounded-e-md bg-primary-green-500 text-white font-bold p-2
            hover:bg-primary-green-800 transition-all duration-500
            "
            >
              <ArrowSmallRightIcon />
            </button>
          </div>
          <div className="font-medium tracking-wide flex flex-col gap-2">
            <span className="flex gap-2 items-center text-base capitalize text-white">
              Phone:
              <span className="text-sm text-gray-50">+012 234 54 89</span>
            </span>
            <span className="flex gap-2 items-center text-base capitalize text-white">
              Email:
              <span className="text-sm text-gray-50 lowercase">
                hello@info.com
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Copyrights text */}
      <div
        className={`${styles.flexBetween} flex-col sm:flex-row sm:items-start items-center w-full border-t border-gray-500 py-4`}
      >
        <p className="text-sm text-gray-50 uppercase tracking-wider">
          COPYRIGHT © 2023 - ALL RIGHTS RESERVED.
        </p>

        <div className={`${styles.flexBetween} w-56`}>
          <Link
            to="/"
            className="text-sm text-gray-50 uppercase tracking-wider hover:underline hover:underline-offset-4 transition-all duration-300 "
          >
            Terms & Policy
          </Link>
          <p className="text-gray-50">|</p>
          <Link
            to="/"
            className="text-sm text-gray-50 uppercase tracking-wider hover:underline hover:underline-offset-4 transition-all duration-300 "
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

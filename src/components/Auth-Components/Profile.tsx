import {
  CheckBadgeIcon,
  PlayCircleIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import SectionHead from "../Global-Components/SectionHead";
import FloatingDashes from "../Global-Components/FloatingDashes";
import useMediaQuery from "../../hooks/useMediaQuery";
import Reveal from "../../transitions/Reveal";
import { useEffect, useState } from "react";
import axios from "axios";
import { followers, following } from "../../Db/datas";
// import { useParams } from "react-router";
interface IUser {
  id: string | number;
  email: string;
  username: string;
  birthDate: string;
  streamCount: number | string;
  playingHours: number | string;
  image: string;
  games: number | string;
}
const Profile = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser);
  // const {id} = useParams<{id:string}>()
  const URL = "http://localhost:3080/users/1";
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setUserInfo(data);
      // console.log(data);
    });
  }, []);
  return (
    <section className="flex flex-col gap-44 relative">
      {isAboveSmallScreens && <FloatingDashes />}
      {/* Info */}
      <Reveal>
        <div className={`${styles.flexCenter} flex-col gap-12`}>
          {/* Top */}
          <div
            className={`bg-black-500 rounded-xl w-full  lg:w-3/4 gap-6 mx-auto  ${styles.padding} ${styles.flexCenter} lg:${styles.flexBetween} flex-col lg:flex-row`}
          >
            <img src={userInfo.image} alt={`${userInfo.username} 's profile`} />
            <div
              className={`${styles.flexCenter} lg:${styles.flexBetween} w-full flex-col lg:flex-row gap-4 lg:gap-0`}
            >
              {/* Left Side */}
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-green-300 circle"></span>
                  <span className="text-xs uppercase text-primary-green-300 font-bold tracking-wider online">
                    Online
                  </span>
                </div>
                <h4 className="font-barlow font-bold text-xl tracking-wide text-white capitalize">
                  {userInfo.username}
                </h4>
                <p className="text-xs font-poppins text-gray-400 font-medium w-3/4 text-center lg:text-left">
                  You Haven't Gone Live yet. Go Live By Touching The Button
                  Below.
                </p>
                <button className="w-fit mt-5 border border-primary-green-300 rounded-md text-center py-3 px-6 text-white font-poppins font-bold text-sm bg-transparent hover:bg-primary-green-300 transition-all duration-700 hover:text-black-500">
                  Start live stream
                </button>
              </div>
              {/* Right side */}
              <ul className="mt-4 lg:mt-0 bg-black-800 rounded-xl p-4 flex flex-col  gap-4  items-center lg:items-start">
                <li className="flex items-center justify-between w-56 border-b border-b-gray-400 border-opacity-10 pb-4 font-poppins font-bold text-white text-sm">
                  Games{" "}
                  <span className="text-primary-green-300">
                    {userInfo.games}
                  </span>
                </li>
                <li className="flex items-center justify-between w-56 border-b border-b-gray-400 border-opacity-10 pb-4 font-poppins font-bold text-white text-sm">
                  Followers{" "}
                  <span className="text-primary-green-300">
                    {followers.length}
                  </span>
                </li>
                <li className="flex items-center justify-between w-56 border-b border-b-gray-400 border-opacity-10 pb-4 font-poppins font-bold text-white text-sm">
                  Following{" "}
                  <span className="text-primary-green-300">
                    {following.length}
                  </span>
                </li>
                <li className="flex items-center justify-between w-56 border-b border-b-gray-400 border-opacity-10 pb-4 font-poppins font-bold text-white text-sm">
                  Live Stream{" "}
                  <span className="text-primary-green-300">
                    {userInfo.streamCount}
                  </span>
                </li>
                <li className="flex items-center justify-between w-56  font-poppins font-bold text-white text-sm">
                  Play Hours{" "}
                  <span className="text-primary-green-300">
                    {userInfo.playingHours}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom */}
          <div
            className={`bg-black-500 rounded-xl w-full lg:w-3/4 ${styles.padding} ${styles.flexCenter} flex-col gap-8`}
          >
            <h5 className="font-barlow font-bold text-white text-center text-2xl uppercase">
              Profile Details
            </h5>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide  text-white"
                  disabled
                  value={userInfo.email}
                />
                <input
                  type="text"
                  className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
                  disabled
                  value={userInfo.username}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  value={`PLAYER ID:  player_000${userInfo.id}`}
                  className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide text-white"
                  disabled
                />
                <input
                  type="date"
                  value={userInfo.birthDate}
                  className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
                  disabled
                />
              </div>
            </div>
            {/* Followers and Following */}
            <div className="grid grid-cols-1 md:grid-cols-2  w-full my-6 gap-12 md:gap-0">
              {/* TABS */}
              <div>
                <button className="font-barlow font-bold text-xl tracking-wide uppercase text-primary-green-300 hover:text-primary-green-800 transition-all duration-500">
                  Followers
                </button>
                <ul
                  className={`pr-12 py-6 flex flex-col gap-4 h-96 overflow-y-scroll`}
                >
                  {followers.map(({ id, username, image, isFollowed }) => {
                    return (
                      <li
                        key={id}
                        className={`${styles.flexBetween} w-full border-b border-b-gray-400 border-opacity-10 pb-6 last:border-none last:pb-0`}
                      >
                        <div className="flex gap-5">
                          <img
                            src={image}
                            alt={`${username} 's profile`}
                            className="w-10 h-10 object-cover rounded-full"
                          />
                          <div className="flex items-center gap-2">
                            <CheckBadgeIcon className="w-5 h-5 text-primary-green-300 " />
                            <span className="text-base md:text-xs lg:text-lg font-barlow font-bold text-white capitalize w-24 truncate pr-4">
                              {username}
                            </span>
                          </div>
                        </div>
                        <button
                          className={`${
                            isFollowed
                              ? "hover:bg-primary-green-300 bg-secondary-yellow-500 "
                              : "bg-primary-green-300 hover:bg-secondary-yellow-500 "
                          } 
                        rounded-3xl py-2 px-3 text-white font-poppins font-bold text-sm capitalize text-center  transition-all duration-500 w-fit
                        `}
                        >
                          {isFollowed ? "Followed" : "Follow"}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="md:pl-4 pt-6 md:pt-0 border-t border-t-gray-600 border-opacity-20 md:border-none">
                <button className="flex font-barlow font-bold text-xl tracking-wide uppercase text-primary-green-300 hover:text-primary-green-800 transition-all duration-500">
                  Following
                </button>
                <ul
                  className={`pr-12 py-6 flex flex-col gap-4 h-96 overflow-y-scroll`}
                >
                  {[...following]
                    .reverse()
                    .map(({ id, username, image, isFollowed }) => {
                      return (
                        <li
                          key={id}
                          className={`${styles.flexBetween} w-full border-b border-b-gray-400 border-opacity-10 pb-6 last:border-none last:pb-0`}
                        >
                          <div className="flex gap-5">
                            <img
                              src={image}
                              alt={`${username} 's profile`}
                              className="w-10 h-10 object-cover rounded-full"
                            />
                            <div className="flex items-center gap-2">
                              <CheckBadgeIcon className="w-5 h-5 text-primary-green-300 " />
                              <span className="text-lg font-barlow font-bold text-white capitalize  w-24 truncate lg:w-fit pr-4">
                                {username}
                              </span>
                            </div>
                          </div>
                          <button
                            className={`${
                              isFollowed
                                ? "hover:bg-primary-green-300 bg-secondary-yellow-500 "
                                : "bg-primary-green-300 hover:bg-secondary-yellow-500 "
                            } 
                        rounded-3xl py-2 px-3 text-white font-poppins font-bold text-sm capitalize text-center  transition-all duration-500 w-fit
                        `}
                          >
                            {isFollowed ? "Followed" : "Follow"}
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      {/* How to start Live Stream Section */}
      <Reveal>
        <div
          className={`${styles.flexCenter} flex-col w-full gap-12 text-center`}
        >
          {/* Section Head */}
          <SectionHead
            headTitle="Become streamer"
            title="How To Start Your Live Stream"
          />
          {/* Cards */}
          <div
            className={`bg-black-500 ${styles.paddingX}  py-20 w--4/5 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10`}
          >
            {/* Card */}
            <div className="relative z-0">
              <div className=" h-56 bg-black-800 py-8 px-4 rounded-xl flex flex-col gap-2 shadow-2xl border border-opacity-30 border-primary-green-300 hover:border-secondary-yellow-500 transition-all duration-700">
                <UserCircleIcon className="w-14 h-14 object-contain  text-primary-green-300" />
                <h6 className="font-barlow font-semibold text-xl text-white">
                  Go To Your Profile
                </h6>
                <p className="font-poppins text-sm text-gray-400 font-medium tracking-wide  text-left first-letter:capitalize">
                  To start your stream you should go to your profile page in
                  first.
                </p>
              </div>
              <div className="hidden lg:block absolute -right-12 top-1/2 w-12 border-4 border-dashed border-primary-green-300 rotate-180 -z-10"></div>
            </div>
            {/* Card */}
            <div className="relative z-0">
              <div className=" h-56 bg-black-800 py-8 px-4 rounded-xl flex flex-col gap-2 shadow-2xl border border-opacity-30 border-primary-green-300 hover:border-secondary-yellow-500 transition-all duration-700">
                <PlayCircleIcon className="w-14 h-14 object-contain  text-primary-green-300" />
                <h6 className="font-barlow font-semibold text-xl text-white">
                  Live Stream Button
                </h6>
                <p className="font-poppins text-sm text-gray-400 font-medium tracking-wide  text-left first-letter:capitalize">
                  To be able to stream you should click "Start Live Stream"
                  button.
                </p>
              </div>
              <div className="hidden lg:block absolute -right-12 top-1/2 w-12 border-4 border-dashed border-primary-green-300 rotate-180 -z-10"></div>
            </div>
            {/* Card */}
            <div className="relative z-0">
              <div className="h-56 bg-black-800 py-8 px-4 rounded-xl flex flex-col gap-2 shadow-2xl border border-opacity-30 border-primary-green-300 hover:border-secondary-yellow-500 transition-all duration-700">
                <VideoCameraIcon className="w-14 h-14 object-contain  text-primary-green-300" />
                <h6 className="font-barlow font-semibold text-xl text-white">
                  You Are Live
                </h6>
                <p className="font-poppins text-sm text-gray-400 font-medium tracking-wide  text-left first-letter:capitalize">
                  Clicking the button will send you a Twitch. Now you can start
                  streaming via Twitch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Profile;

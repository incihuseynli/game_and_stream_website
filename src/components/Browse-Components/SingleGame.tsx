import {
  ArrowDownTrayIcon,
  StarIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";

import { styles } from "../../styles";
import img1 from "/img1.jpg";
import BtnText from "../Buttons/BtnText";
// https://youtu.be/fCPscArLNQs?si=NWTkZPDAsNsrYL-y
const SingleGame = () => {
  return (
    <div
      className={`${styles.flexCenter} flex-col gap-12 ${styles.paddingY} px-4 bg-black-500 rounded-xl`}
    >
      {/* Image and Game Promo Video */}

      <div className="flex flex-col items-center md:flex-row gap-6">
        <img
          src={img1}
          alt=""
          className="w-full md:w-fit h-fit  lg:w-fit lg:h-[22.5rem] object-cover rounded-xl"
        />
        <video
          className="w-96 h-fit lg:max-w-fit  lg:h-[22.5rem] rounded-xl"
          controls
        >
          <source src="your-video-source.mp4" type="video/mp4" />
          <source src="your-video-source.webm" type="video/webm" />
          <source src="your-video-source.ogv" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* About Game */}
      <div className="flex flex-col items-center justify-center gap-10">
        <h4 className="text-3xl md:text-4xl text-white font-barlow font-bold tracking-wide">
          <span className="text-primary-green-500">Game Name</span> Details
        </h4>

        <div
          className={`${styles.flexCenter} flex-wrap gap-8 py-8 px-16 bg-black-800  rounded-xl text-base capitalize tracking-wider font-poppins font-bold`}
        >
          <span className="text-gray-500">Sandbox</span>
          <span className="flex items-center gap-2 text-gray-50 font-bold font-poppins text-sm">
            <div className="w-5 h-5 text-secondary-yellow-500">
              <StarIcon />
            </div>{" "}
            4.8
          </span>
          <span className="border border-opacity-10 border-gray-500 p-2 text-black">
            13+
          </span>
          <span className="text-secondary-yellow-500">Action</span>
          <div className={`${styles.flexCenter} gap-2`}>
            <div className="w-5 h-5 text-primary-green-500 font-bold">
              <ArrowDownTrayIcon />
            </div>
            <span className="text-gray-50 font-bold font-poppins text-sm">
              2.5M
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 text-primary-green-300">
              <CircleStackIcon />
            </div>
            <span className="text-white">36.5GB</span>
          </div>
        </div>

        <div className={`${styles.flexCenter} flex-col  gap-6`}>
          <div className={`${styles.flexCenter} flex-wrap gap-6`}>
            <img
              src={img1}
              alt=""
              className="w-full md:w-72 h-fit object-cover rounded-xl"
            />
            <img
              src={img1}
              alt=""
              className="w-full md:w-72 h-fit object-cover rounded-xl"
            />
            <img
              src={img1}
              alt=""
              className="w-full md:w-72 h-fit object-cover rounded-xl"
            />
          </div>
          {/* About Game */}
          <div className="w-full md:w-3/4 flex flex-col items-center gap-4">
            <p className="text-gray-500 font-poppins tracking-wider text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              dignissimos obcaecati? Consequatur tempora officiis aspernatur
              vitae nemo illum, ratione alias aliquam ullam quod quibusdam
              mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Alias, dignissimos obcaecati? Consequatur tempora officiis
              aspernatur vitae nemo illum, ratione alias aliquam ullam quod
              quibusdam mollitia? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias, dignissimos obcaecati? Consequatur
              tempora officiis aspernatur vitae nemo illum, ratione alias
              aliquam ullam quod quibusdam mollitia? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Alias, dignissimos obcaecati?
              Consequatur tempora officiis aspernatur vitae nemo illum, ratione
              alias aliquam ullam quod quibusdam mollitia? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Alias, dignissimos obcaecati?
              Consequatur tempora officiis aspernatur vitae nemo illum, ratione
              alias aliquam ullam quod quibusdam mollitia?
            </p>
            <BtnText children="Download game now" path="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;

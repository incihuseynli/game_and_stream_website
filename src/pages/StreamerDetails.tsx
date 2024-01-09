import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { styles } from "../styles";
import { NavLink, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import Axios from "axios";
import { IStreamers } from "../types";
import PageTransition from "../transitions/PageTransition";
import useMediaQuery from "../hooks/useMediaQuery";
import { Helmet } from "react-helmet";
import Navbar from "../components/Header-Components/Navbar";

const StreamDetails = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1040px)");
  const URL = "http://localhost:3080/streamers/";
  const { id } = useParams<{ id: string }>();
  const [streamer, setStreamer] = useState<IStreamers>({} as IStreamers);
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  const handleData = () => {
    Axios.get(URL + id).then(({ data }) => {
      setStreamer(data);
      // console.log(data);
    });
  };

  useEffect(() => {
    handleData();
  }, []);
  const prevStreams = streamer.prev_streams?.slice(0, 3);
  // console.log(streamer.prev_streams?.slice(0,3));

  // console.log( prevStreams);

  return (
    <>
      <Navbar />
      <PageTransition>
        {/* Helmet config */}
        <Helmet>
          <title>{`${streamer.username} profili`}</title>
          <meta name="description" content={`${streamer.username} profile`} />
        </Helmet>
        <main
          className={`${styles.margin} p-12 rounded-xl  bg-black-500 flex flex-col gap-20`}
        >
          {/* About Streamer */}
          <section className=" grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center lg:pl-24">
            {/* Promo video */}
            <ReactPlayer
              url={streamer.link}
              controls
              className="lg:w-full"
              playing={false}
              loop={true}
              style={{
                maxWidth: isAboveMediumScreens ? "100%" : "300px",
                objectFit: "contain",
              }}
            />

            {/* Info */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <img
                  src={streamer.image}
                  alt={`${streamer.username} 's profile`}
                  className="w-24 h-24 object-cover rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckBadgeIcon className="w-5 h-5 text-primary-green-300 " />
                    <span className="text-lg font-barlow font-bold text-white">
                      {streamer.username}
                    </span>
                  </div>
                  <button
                    className={`
              ${
                isFollowed
                  ? "hover:bg-primary-green-300 bg-secondary-yellow-500"
                  : "bg-primary-green-300 hover:bg-secondary-yellow-500"
              }
              rounded-3xl py-2 px-3 text-white font-poppins font-bold text-sm capitalize text-center  transition-all duration-500 w-fit
              `}
                    onClick={() => setIsFollowed(!isFollowed)}
                  >
                    {isFollowed ? "izlənir" : "izlə"}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-gray-300 font-poppins text-base tracking-wide">
                <span>
                  <span className="text-secondary-yellow-500 font-bold">
                    {streamer.monthly_watchers}
                  </span>{" "}
                  {/* monthly watchers */}
                  aylıq izləyici
                </span>
                <span>
                  <span className="text-secondary-yellow-500 font-bold">
                    {streamer.followers}
                  </span>{" "}
                  {/* followers */}
                  izləyicilər
                </span>
                <span>
                  <span className="text-secondary-yellow-500 font-bold">
                    {streamer.play_hours}
                  </span>{" "}
                  {/* hours game played this month */}
                  saat oyun oynadı bu ay
                </span>
                <span>
                  <span className="text-secondary-yellow-500 font-bold">
                    {streamer.stream_hours}
                  </span>{" "}
                  {/* hours streamed this week */}
                  saat yayımda oldu bir həftə ərzində
                </span>
              </div>
            </div>
          </section>
          {/* Their previous streams list */}
          <section className="flex flex-col items-center justify-center gap-8">
            {/* Title */}
            <h4 className="font-barlow font-bold uppercase text-white text-3xl text-center">
              {/* Previous Streams of{" "} */}
              <span className="text-primary-green-300">
                {streamer.username}
              </span>{" "}
              Əvvəlki yayımları
            </h4>
            {/* List */}
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex flex-wrap w-full items-center justify-center lg:justify-start gap-4">
                {prevStreams &&
                  prevStreams.map(
                    ({ id, game_name, watchers, thumbnail, stream_link }) => {
                      return (
                        <NavLink
                          key={id}
                          to={stream_link}
                          className="relative streamCard transition-all duration-700 border rounded-xl border-gray-400 border-opacity-20 hover:border-primary-green-300"
                        >
                          <img
                            src={thumbnail}
                            alt={game_name}
                            className="w-52 h-52 rounded-xl object-cover"
                          />
                          <div className="hidden info flex-col items-center bg-primary-green-300 rounded-sm absolute bottom-0 translate-x-1/4 translate-y-14 w-fit py-2 px-6">
                            <span className="text-white font-barlow font-bold text-base">
                              {game_name}
                            </span>
                            <span className="text-white font-bold font-poppins text-xs tracking-wide">
                              {watchers} insan izlədi
                            </span>
                          </div>
                        </NavLink>
                      );
                    }
                  )}
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  );
};

export default StreamDetails;

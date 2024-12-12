import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../../swiperCss.css";
import { styles } from "../../styles";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IGame } from "../../types";
import Axios from "axios";
const GameSlider = () => {
  // const URL = "http://localhost:3080/games?_limit=6";
  const URL = "https://my-json-server.typicode.com/dbForProjects/games_api/games?_limit=4";
  const [games, setGames] = useState<IGame[]>([]);
  const handleData = () => {
    try {
      Axios.get(URL).then(({ data }) => {
        setGames(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <section className="my-36">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper gameListSwiper "
        style={{
          "--swiper-pagination-bullet-width": "5rem",
          "--swiper-pagination-bullet-height": ".3rem",
          "--swiper-pagination-bullet-horizontal-gap": "0",
          "--swiper-pagination-bullet-border-radius": "0",
          "--swiper-pagination-color": "#45f983",
          "--swiper-pagination-bullet-inactive-color": "#3fde77",
        }}
      >
        {games.map(({ id, thumbnail, title, ratePer }) => {
          return (
            <SwiperSlide key={id}>
              <img
                src={thumbnail}
                alt={title}
                className="w-fit h-fit object-cover"
              />
              <div
                className={`${styles.flexBetween} px-16 md:px-2 pt-4 w-full`}
              >
                <NavLink
                  to={`/browse/${id}`}
                  className="font-barlow text-xl uppercase font-bold tracking-wide text-white"
                >
                  {title}
                </NavLink>
                <span className="font-barlow text-lg uppercase font-semibold tracking-wide text-secondary-yellow-500">
                  Reytinq {ratePer}
                  {/* RATE {ratePer} */}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default GameSlider;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../../swiperCss.css";
import { styles } from "../../styles";
import { NavLink } from "react-router-dom";
const GameSlider = () => {
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
        className="mySwiper gameListSwiper"
        style={{
          "--swiper-pagination-bullet-width": "5rem",
          "--swiper-pagination-bullet-height": ".3rem",
          "--swiper-pagination-bullet-horizontal-gap": "0",
          "--swiper-pagination-bullet-border-radius": "0",
          "--swiper-pagination-color": "#45f983",
          "--swiper-pagination-bullet-inactive-color": "#3fde77",
        }}
      >
        <SwiperSlide >
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <div className={`${styles.flexBetween} px-16 md:px-2 pt-4 w-full`}>
            <NavLink
              to=""
              className="font-barlow text-xl uppercase font-bold tracking-wide text-white"
            >
              Game Name
            </NavLink>
            <span className="font-barlow text-lg uppercase font-semibold tracking-wide text-secondary-yellow-500">
              RATE 50%
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default GameSlider;

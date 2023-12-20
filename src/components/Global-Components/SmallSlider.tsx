import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import CustomSwiperPagination from "./CustomSwiperPagination";
import { styles } from "../../styles";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { IHoc } from "../../types";
import "../../swiperCss.css";
import Reveal from "../../transitions/Reveal";
const SmallSlider = ({ secTitle, children }: IHoc) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:768px)");
  const [slidesPerView, setSlidesPerView] = useState<number>(1);
  useEffect(() => {
    if (isAboveMediumScreen) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(1);
    }
  }, [isAboveMediumScreen]);

  return (
    <Reveal>
      <div className="w-full px-6 bg-black-500 text-white  rounded-xl">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper globalSlider p-10  relative"
        >
          {/* HEAD OF SLIDER */}
          <div
            className={`w-full ${styles.flexBetween} absolute top-5 right-0 left-0 md:-ml-8 ${styles.paddingX}`}
          >
            <h4 className="text-2xl text-white font-barlow font-bold tracking-wider">
              {secTitle}
            </h4>
            <CustomSwiperPagination />
          </div>
          {/* SLIDES */}
          {children}
        </Swiper>
      </div>
    </Reveal>
  );
};

export default SmallSlider;

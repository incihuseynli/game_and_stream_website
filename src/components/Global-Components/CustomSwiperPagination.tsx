import { useSwiper } from "swiper/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const CustomSwiperPagination = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-2 items-baseline">
      <button
        onClick={() => swiper.slidePrev()}
        className="w-6 h-6 text-gray-500  font-bold hover:text-primary-green-500 transition-all duration-300"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-6 h-6 text-gray-500  font-bold hover:text-primary-green-500 transition-all duration-300"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default CustomSwiperPagination;

import ScrollCarousel from "scroll-carousel-react";
import { IScrollProps } from "../../types";

const ScrollCarouselSlider = ({children}:IScrollProps) => {
  return (
    <ScrollCarousel autoplay autoplaySpeed={600} speed={7} smartSpeed={true}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
        <div key={item} className="my-4 mx-2 rounded h-60 w-52">
          <div className="h-60 pb-4 w-52 bg-black-800 border border-primary-green-800 hovered rounded-xl flex flex-col items-center justify-center gap-4">
           {children}
          </div>
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default ScrollCarouselSlider;

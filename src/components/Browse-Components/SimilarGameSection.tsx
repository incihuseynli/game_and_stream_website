import BtnText from "../Buttons/BtnText"
import ScrollCarouselSlider from "../Global-Components/ScrollCarouselSlider"
import SectionHead from "../Global-Components/SectionHead";
import image from "/img1.jpg";

const SimilarGameSection = () => {
  return (
    <section className="mt-36 flex flex-col items-center gap-16">
        {/* Section Head */}
        <SectionHead headTitle="Play more" title="similar games" />
        {/* Slider */}
       <ScrollCarouselSlider>
        <img src={image} alt="" className="w-32 h-32 rounded-xl" />
        <div className="">
          <h6 className="text-lg font-barlow font-bold text-white truncate">
            Game Name
          </h6>
          <BtnText children="play now" path="/" />
        </div>
      </ScrollCarouselSlider>
    </section>
  )
}

export default SimilarGameSection

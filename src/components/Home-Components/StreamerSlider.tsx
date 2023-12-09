import BtnText from "../Buttons/BtnText";
import ScrollCarouselSlider from "../Global-Components/ScrollCarouselSlider";

const StreamerSlider = () => {
  return (
    <ScrollCarouselSlider>
      <div className="w-full h-full py-4  rounded-t-xl flex items-center justify-center">
        <img
          src="./streamer1.png"
          alt=""
          className="rounded-full w-24 h-24 object-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <h4 className="font-barlow text-white font-bold -tracking-wide  uppercase text-lg">
          Streamers Name
        </h4>
        <span className="text-xs text-gray-50 font-bold font-poppins -tracking-wide">
          Total watchers :{" "}
          <span className="text-secondary-yellow-500">12.9M</span>
        </span>
      </div>
      <BtnText path="">Watch Now</BtnText>
    </ScrollCarouselSlider>
  );
};

export default StreamerSlider;

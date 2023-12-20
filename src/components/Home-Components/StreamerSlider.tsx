import { useEffect, useState } from "react";
import BtnText from "../Buttons/BtnText";
import { IStreamers } from "../../types";
import Axios from "axios";
import ScrollCarousel from "scroll-carousel-react";

const StreamerSlider = () => {
  const URL = "http://localhost:3080/streamers";
  const [streamers, setStreamers] = useState<IStreamers[]>([]);
  const handleData = () => {
    Axios.get(URL).then(({ data }) => {
      setStreamers(data);
      // console.log(data);
    });
  };
  useEffect(() => {
    handleData();
  }, []);

  return (
    <ScrollCarousel autoplay autoplaySpeed={600} speed={7} smartSpeed={true}>
      {[1, 2].map((item) => (
        <div key={item} className="w-full h-80 flex gap-6 mr-6">
          {streamers.map(({ id, username, followers, image }) => {
            return (
              <div key={id} className="w-56 h-64 text-white bg-black-800 border border-primary-green-800 hovered rounded-xl flex flex-col items-center justify-center gap-4">
                <div className="w-full h-full py-4  rounded-t-xl flex items-center justify-center">
                  <img
                    src={image}
                    alt={`${username} 's profile`}
                    className="rounded-full w-24 h-24 object-cover"
                  />
                </div>
                <div className="flex flex-col items-center -mt-6">
                  <h4 className="font-barlow text-white font-bold -tracking-wide  uppercase text-lg">
                    {username}
                  </h4>
                  <span className="text-xs text-gray-50 font-bold font-poppins -tracking-wide">
                    Total followers :{" "}
                    <span className="text-secondary-yellow-500">
                      {followers}
                    </span>
                  </span>
                </div>
                <div className="mb-4">
                <BtnText path={`/streams/${id}`}>Explore</BtnText>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default StreamerSlider;

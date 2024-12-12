import { useEffect, useState } from "react";
import BtnText from "../Buttons/BtnText";
import SectionHead from "../Global-Components/SectionHead";
import ScrollCarousel from "scroll-carousel-react";
import { IGame } from "../../types";
import axios from "axios";

const SimilarGameSection = () => {
  // const URL = "http://localhost:3080/games";
  const URL = "https://my-json-server.typicode.com/dbForProjects/games_api/games";
  const [games, setGames] = useState<IGame[]>([]);
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setGames(data);
    });
  }, []);
  return (
    <section className="mt-36 flex flex-col items-center gap-16 py-16 bg-black-500 rounded-lg">
      {/* Section Head */}
      {/* <SectionHead headTitle="Play more" title="similar games" /> */}
      <SectionHead headTitle="Daha çox oyna" title="oxşar oyunlar" />
      {/* Slider */}
      <ScrollCarousel autoplay autoplaySpeed={600} speed={2} smartSpeed={true}>
        {[1, 2].map((item) => (
          <div key={item} className="w-full h-80 flex gap-6 mr-6">
            {games.map(({ id, title, thumbnail }) => {
              return (
                <div
                  key={id}
                  className="w-56 h-64 text-white bg-black-800 border border-primary-green-800 hovered rounded-xl flex flex-col items-center justify-center gap-4"
                >
                  <img
                    src={thumbnail}
                    alt={` Play ${title}`}
                    className="w-32 h-32 rounded-xl object-cover"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <h6 className="text-lg font-barlow font-bold text-white  w-fit truncate">
                      {title}
                    </h6>
                    {/* <BtnText children="play now" path={`/browse/${id}`} /> */}
                    <BtnText children="indi oyna" path={`/browse/${id}`} />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </ScrollCarousel>
    </section>
  );
};

export default SimilarGameSection;

import { FC } from "react";
import { styles } from "../styles";
import AllGames from "../components/Browse-Components/AllGames";
import FeaturedGames from "../components/Browse-Components/FeaturedGames";
import MostDownloadeds from "../components/Browse-Components/MostDownloadeds";
import Header from "../components/Header-Components/Header";
import image from "/heroimg3.png";
import SectionHead from "../components/Global-Components/SectionHead";
const Browse: FC = () => {
  return (
    <>
      {/* Header */}
      <Header>
        <h4 className="md:ml-4 lg:ml-8 mb-12 md:mb-0 text-center md:text-left font-barlow font-bold text-white text-4xl md:text-5xl uppercase tracking-wide drop-shadow-lg">
          Browse Games
        </h4>
        <img src={image} alt="" className="w-fit h-fit lg:ml-24 " />
      </Header>
      {/* ========================= */}
      <section className="mt-28">
        <SectionHead
          headTitle="Best of the Best"
          title="Play best games with only bests"
        />

        <div
          className={`${styles.padding} my-8 grid grid-cols-1 lg:grid-cols-browse gap-8`}
        >
          {/* Featured Games Slider */}
          <FeaturedGames />
          {/* Top Downloaded Games */}
          <MostDownloadeds />
        </div>
      </section>
      {/* All Games w/Pagination */}
      <AllGames />
    </>
  );
};

export default Browse;

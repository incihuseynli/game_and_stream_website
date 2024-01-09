import { FC } from "react";
import { styles } from "../styles";
import AllGames from "../components/Browse-Components/AllGames";
import FeaturedGames from "../components/Browse-Components/FeaturedGames";
import MostDownloadeds from "../components/Browse-Components/MostDownloadeds";
import SectionHead from "../components/Global-Components/SectionHead";
import PageTransition from "../transitions/PageTransition";
import Reveal from "../transitions/Reveal";
import { Helmet } from "react-helmet";
import image from "/heroimg4.png";
import PageHead from "../components/Global-Components/PageHead";

const Browse: FC = () => {
  return (
    <PageTransition>
      {/* Helmet config */}
      <Helmet>
        {/* <title>Browse Games</title> */}
        <title>Oyunlar</title>
        <meta name="description" content="Explore and start play our games" />
      </Helmet>
      {/* Header Section */}
      {/* <PageHead image={image} pageTitle="Browse Games" /> */}
      <PageHead image={image} pageTitle="Oyunlarımız" />
      {/* Main Section*/}
      <main>
        <section className={`mt-28 ${styles.flexCenter} flex-col `}>
          <div className="text-center">
            {/* <SectionHead
              headTitle="Best of the Best"
              title="Play best games with only bests"
            /> */}
            <SectionHead
              headTitle="Ən yaxşıların ən yaxşısı"
              title="Ən yaxşı oyunları ən yaxşılarla oynayın"
            />
          </div>

          <div
            className={`${styles.padding} my-8 grid grid-cols-1 lg:grid-cols-browse gap-8`}
          >
            {/* Featured Games Slider */}
            <FeaturedGames />
            {/* Top Downloaded Games */}
            <Reveal>
              <MostDownloadeds />
            </Reveal>
          </div>
        </section>
        {/* All Games w/Pagination */}
        <AllGames />
      </main>
    </PageTransition>
  );
};

export default Browse;

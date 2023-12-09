import Header from "../components/Header-Components/Header";
import PrizeSection from "../components/Tournament-Components/PrizeSection";
import TournamentsList from "../components/Tournament-Components/TournamentsList";
import image from "/heroimg2.png";

const Tournament = () => {
  return (
    <>
      {/* Header */}
      <Header>
        <h4 className="md:ml-8 mb-12 md:mb-0 text-center md:text-left font-barlow font-bold text-white text-4xl md:text-5xl uppercase tracking-wide drop-shadow-lg">
          Tournaments
        </h4>
        <img src={image} alt="" className="w-fit h-fit  md:ml-24 " />
      </Header>
      {/* Main */}
      <main>
        {/* Prizes */}
        <PrizeSection />
        {/* Tournaments List */}
        <TournamentsList/>
      </main>
    </>
  );
};

export default Tournament;

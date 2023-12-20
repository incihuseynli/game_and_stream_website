import PageTransition from "../transitions/PageTransition";
import PrizeSection from "../components/Tournament-Components/PrizeSection";
import TournamentsList from "../components/Tournament-Components/TournamentsList";
import image from "/heroimg2.png";
import Reveal from "../transitions/Reveal";
import { Helmet } from "react-helmet";
import PageHead from "../components/Global-Components/PageHead";

const Tournament = () => {
  return (
    <PageTransition>
      {/* Helmet config */}
      <Helmet>
        <title>Tournaments</title>
        <meta
          name="description"
          content="Join our tournaments and earn more than money"
        />
      </Helmet>
      {/* Header */}
      <PageHead image={image} pageTitle="Tournaments" />
      {/* Main */}
      <main>
        {/* Prizes */}
        <PrizeSection />
        {/* Tournaments List */}
        <Reveal>
          <TournamentsList />
        </Reveal>
      </main>
    </PageTransition>
  );
};

export default Tournament;

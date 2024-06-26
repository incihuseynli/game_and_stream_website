import PageTransition from "../transitions/PageTransition";
import TournamentContent from "../components/Tournament-Components/TournamentContent";
import TrendingMatches from "../components/Tournament-Components/TrendingMatches";
import { styles } from "../styles";
import Reveal from "../transitions/Reveal";
import Navbar from "../components/Header-Components/Navbar";

const TournamentDetails = () => {
  return (
    <>
      <Navbar />
      <PageTransition>
        {/* Main Section */}
        <main
          className={`${styles.paddingX} py-14 grid grid-cols-1 lg:grid-cols-[800px_400px] gap-5`}
        >
          {/* Content of Tournament */}
          <Reveal>
            <TournamentContent />
          </Reveal>
          {/* Trending Matches */}
          <Reveal>
            <TrendingMatches />
          </Reveal>
        </main>
      </PageTransition>
    </>
  );
};

export default TournamentDetails;

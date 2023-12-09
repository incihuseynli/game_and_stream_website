import TournamentContent from "../components/Tournament-Components/TournamentContent";
import TrendingMatches from "../components/Tournament-Components/TrendingMatches";
import { styles } from "../styles";

const TournamentDetails = () => {
  return (
    <main
      className={`${styles.paddingX} py-14 grid grid-cols-1 lg:grid-cols-browse gap-5`}
    >
      {/* Content of Tournament */}
      <TournamentContent />
      {/* Trending Matches */}
      <TrendingMatches />
    </main>
  );
};

export default TournamentDetails;

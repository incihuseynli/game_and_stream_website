import SimilarGameSection from "../components/Browse-Components/SimilarGameSection";
import SingleGame from "../components/Browse-Components/SingleGame";
import { styles } from "../styles";

const GameDetail = () => {
  return (
    <main className={`${styles.padding}`}>
      {/* Game Details Section */}
      <SingleGame />
      {/* Similar Games Recomendations Slider */}
     <SimilarGameSection/>
    </main>
  );
};

export default GameDetail;

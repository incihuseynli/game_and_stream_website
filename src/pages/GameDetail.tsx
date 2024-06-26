import PageTransition from "../transitions/PageTransition";
import SimilarGameSection from "../components/Browse-Components/SimilarGameSection";
import SingleGame from "../components/Browse-Components/SingleGame";
import { styles } from "../styles";
import Reveal from "../transitions/Reveal";
import Navbar from "../components/Header-Components/Navbar";
const GameDetail = () => {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className={`${styles.padding}`}>
          {/* Game Details Section */}
          <Reveal>
            <SingleGame />
          </Reveal>
          {/* Similar Games Recomendations Slider */}
          <Reveal>
            <SimilarGameSection />
          </Reveal>
        </main>
      </PageTransition>
    </>
  );
};

export default GameDetail;

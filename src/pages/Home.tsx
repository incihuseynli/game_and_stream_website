import PageTransition from "../transitions/PageTransition";
import Parallax from "../components/Global-Components/Parallax";
import Stats from "../components/Global-Components/Stats";
import GameSection from "../components/Home-Components/GameSection";
import GameSlider from "../components/Home-Components/GameSlider";
import StreamersList from "../components/Home-Components/StreamersList";
import TodaysPick from "../components/Home-Components/TodaysPick";
import Reveal from "../transitions/Reveal";
import HomeHeader from "../components/Home-Components/HomeHeader";
import StreamGuide from "../components/Home-Components/StreamGuide";
const Home = () => {
  return (
    <PageTransition>
      {/* ================================= Header Section ================================= */}
      <HomeHeader />
      <main>
        {/* ============================= Count Up Section ============================ */}
        <Stats />
        {/* ============================= Game of Today Section ============================ */}
        <TodaysPick />
        {/* ============================= Game Slider Section ============================ */}
        <GameSlider />
        {/* ============================= Games List Section ============================ */}
        <GameSection />
        {/* ============================= Streamers List Section ============================ */}
        <Reveal>
          <StreamersList />
        </Reveal>
        {/* ============================= Parallax Banner Section ============================ */}
        <Reveal>
          <Parallax />
        </Reveal>
        {/* ============================= Stream Guide Section ============================ */}
        <Reveal>
          <StreamGuide />
        </Reveal>
      </main>
    </PageTransition>
  );
};

export default Home;

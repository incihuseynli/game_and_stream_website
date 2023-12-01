import Hero from "../components/Hero-Components/Hero";
import TodaysPick from "../components/Home-Components/TodaysPick";

const Home = () => {
  return (
    <main>
      {/* ================================= Hero Section ================================= */}
      <Hero />
      {/* ================================= Game of Today Section ================================= */}
      <TodaysPick/>
    </main>
  );
};

export default Home;

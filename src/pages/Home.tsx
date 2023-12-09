import Btn from "../components/Buttons/Btn";
import Parallax from "../components/Global-Components/Parallax";
import Stats from "../components/Global-Components/Stats";
import Header from "../components/Header-Components/Header";
import GameSection from "../components/Home-Components/GameSection";
import GameSlider from "../components/Home-Components/GameSlider";
import StreamersList from "../components/Home-Components/StreamersList";
import TodaysPick from "../components/Home-Components/TodaysPick";
import { styles } from "../styles";

const Home = () => {
  return (
    <>
      {/* ================================= Header Section ================================= */}
      <Header>
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-12 items-center md:items-start ">
          <div className="flex flex-col gap-6">
            {/* TAG */}
            <div className="w-56 rounded-md p-3 bg-gradient">
              <h6 className="uppercase text-xl font-bold text-primary-green-500 tracking-widest font-barlow">
                Live Gaming
              </h6>
            </div>
            {/* HEADING */}
            <div className="flex flex-col gap-5">
              <h1
                className="font-playpen text-white uppercase text-5xl lg:text-7xl tracking-wide text-shadow "
              >
                Streaming
              </h1>
              <span className="uppercase text-2xl font-poppins tracking-widest text-white font-bold">
                & online video games
              </span>
            </div>
          </div>
          <Btn children="Explore" path="/" />
          <div className={`${styles.flexBetween}  w-full md:w-3/4`}>
            <img src="./gameLogo1.png" alt="" className="brand rounded-full" />
            <img src="./gameLogo2.png" alt="" className="brand rounded-md" />
            <img src="./gameLogo3.png" alt="" className="brand rounded-full" />
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center">
          <img src="./heroImg.png" alt="" className="w-4/5 object-cover" />
        </div>
      </Header>
      <main>
        {/* ============================= Count Up Section ============================ */}
        <Stats/>
        {/* ============================= Game of Today Section ============================ */}
        <TodaysPick />
        {/* ============================= Game Slider Section ============================ */}
        <GameSlider />
        {/* ============================= Games List Section ============================ */}
        <GameSection />
        {/* ============================= Streamers List Section ============================ */}
        <StreamersList />
        {/*  */}
        <Parallax />
      </main>
    </>
  );
};

export default Home;

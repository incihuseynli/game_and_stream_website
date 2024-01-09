import { styles } from "../../styles";
import Reveal from "../../transitions/Reveal";
import Btn from "../Buttons/Btn";
import Header from "../Header-Components/Header";
type IBrandImgs = {
  img: string;
};
const brandImgs: IBrandImgs[] = [
  { img: "/gameLogo1.png" },
  { img: "/gameLogo2.png" },
  { img: "/gameLogo3.png" },
];
import heroImg from "/heroImg.png";
const HomeHeader = () => {
  return (
    <Header>
      {/* ===================== HERO SECTION ===================== */}
      {/* LEFT SIDE */}
      <Reveal>
        <div className="flex flex-col gap-12 items-center md:items-start ">
          <div className="flex flex-col gap-6">
            {/* TAG */}
            <div className="w-56 rounded-md p-3 bg-gradient">
              <h6 className="uppercase text-xl font-bold text-primary-green-500 tracking-widest font-barlow">
                {/* Live Gaming */}
                Canlı Oyun
              </h6>
            </div>
            {/* HEADING */}
            <div className="flex flex-col gap-5">
              <h1 className="font-playpen text-white uppercase text-5xl lg:text-7xl tracking-wide text-shadow ">
                {/* Streaming */}
                Yayımlar
              </h1>
              <span className="uppercase text-2xl font-poppins tracking-widest text-white font-bold">
                {/* & online video games */}
                və onlayn video oyunlar
              </span>
            </div>
          </div>
          <Btn children="Kəşf et" path="/browse" />
          <div
            className={`${styles.flexBetween} hidden lg:flex  w-full md:w-3/4`}
          >
            {brandImgs.map(({ img }, index) => {
              return (
                <img
                  src={img}
                  key={index}
                  className="w-fit"
                  alt="Grand Sponsors"
                />
              );
            })}
          </div>
        </div>
      </Reveal>
      {/* RIGHT SIDE */}
      <Reveal>
        <div className="flex items-center justify-center">
          <img
            src={heroImg}
            alt="Hero image of site"
            className="w-4/5 object-cover heroImage"
          />
        </div>
      </Reveal>
    </Header>
  );
};

export default HomeHeader;

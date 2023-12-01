import { styles } from "../../styles";
import Btn from "../Buttons/Btn";

const HeroSect = () => {
  return (
    <section
      className={`${styles.padding}  grid grid-cols-1 md:grid-cols-2 gap-4 items-center`}
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-12">
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
              className="font-playpen text-white uppercase text-7xl
          tracking-wide text-shadow 
          "
            >
              Streaming
            </h1>
            <span className="uppercase text-2xl font-poppins tracking-widest text-white font-bold">
              & online video games
            </span>
          </div>
        </div>
        <Btn children="Explore" path="/" />
        <div className={`${styles.flexBetween} w-3/4`}>
          <img src="./gameLogo1.png" alt="" className="brand rounded-full" />
          <img src="./gameLogo2.png" alt="" className="brand rounded-md" />
          <img src="./gameLogo3.png" alt="" className="brand rounded-full" />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center">
        <img src="./heroImg.png" alt="" className="w-4/5 object-cover" />
      </div>
    </section>
  );
};

export default HeroSect;

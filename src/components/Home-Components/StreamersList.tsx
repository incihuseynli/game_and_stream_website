import { styles } from "../../styles";
import SectionHead from "../Global-Components/SectionHead";
import StreamerSlider from "./StreamerSlider";

const StreamersList = () => {
  // bg-no-repeat bg-cover bg-center  bg-opacity-60
  return (
    <section
      className={`my-36 bg-black-500   ${styles.paddingY}`}
    >
      {/* Section Head */}
      {/* <SectionHead headTitle="Become a Legend" title="Our Top Streamers" /> */}
      <SectionHead headTitle="Əfsanə ol" title="Ən Yaxşı Yayımçılarımız" />
      {/* Streamers Slider */}
      <div className="my-16">
        <StreamerSlider />
      </div>
    </section>
  );
};

export default StreamersList;

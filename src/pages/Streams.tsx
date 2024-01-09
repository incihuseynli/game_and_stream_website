import image from "/heroimg3.png";
import { styles } from "../styles";
import SectionHead from "../components/Global-Components/SectionHead";
import SliderSect from "../components/Streamers-Components/SliderSect";
import ListSect from "../components/Streamers-Components/ListSect";
import AllStreamers from "../components/Streamers-Components/AllStreamers";
import PageTransition from "../transitions/PageTransition";
import Reveal from "../transitions/Reveal";
import { Helmet } from "react-helmet";
import PageHead from "../components/Global-Components/PageHead";

const Streams = () => {
  return (
    <PageTransition>
      {/* Helmet config */}
      <Helmet>
        <title>
          {/* Streams */}
          Yayımlar
          </title>
        <meta name="description" content="Our streams page" />
      </Helmet>
      {/* Header */}
      {/* <PageHead pageTitle="Streams" image={image} /> */}
      <PageHead pageTitle="Yayımlar" image={image} />
      {/* Main */}

      <main>
        <section
          className={`${styles.paddingX} grid grid-cols-1 lg:grid-cols-[750px_450px]  gap-6 lg:gap-20 mt-36`}
        >
          {/* Slider */}
          <SliderSect />
          {/* Most Followed Streamers List */}
          <Reveal>
            <ListSect />
          </Reveal>
        </section>
        {/* All Streamers List */}
        <section
          className={`${styles.padding}  my-24 flex flex-col flex-wrap gap-16`}
        >
          {/* <SectionHead
            headTitle="Enjoy Playing with together"
            title="Most Popular Streamers"
          /> */}
          <SectionHead
            headTitle="Birlikdə oynamaqdan həzz al"
            title="Ən məşhur yayımçılar"
          />
          {/* ALL STREAMERS */}
          <Reveal>
            <AllStreamers />
          </Reveal>
        </section>
      </main>
    </PageTransition>
  );
};

export default Streams;

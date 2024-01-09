import { Helmet } from "react-helmet";
import Navbar from "../components/Header-Components/Navbar";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <main className=" w-full h-screen">
        {/* Helmet config */}
        <Helmet>
          {/* <title>404 | Page doesn't exist</title> */}
          <title>404 | Axtardığınız səhifə yoxdur</title>
          <meta
            name="description"
            content="The page you're looking couldn't find"
          />
        </Helmet>
        <div>
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>

        <div className="lamp__wrap">
          <div className="lamp">
            <div className="cable"></div>
            <div className="cover"></div>
            <div className="in-cover">
              <div className="bulb"></div>
            </div>
            <div className="light"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 relative top-80">
          <p className="text-9xl text-center text-gray-800  font-barlow font-bold">
            404
          </p>
          <span className="text-black text-xl font-poppins tracking-wide uppercase">
            {/* We can't seem to find the page you're looking for. */}
            Axtardığınız səhifəni tapa bilmədik..
          </span>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;

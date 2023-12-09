import { PlayIcon } from "@heroicons/react/24/solid";
import Header from "../components/Header-Components/Header";
import { styles } from "../styles";
import image from "/heroimg3.png";
const Contact = () => {
  return (
    <main>
      {/* Header */}
      <Header>
        <h4 className="md:ml-4 lg:ml-8 mb-12 md:mb-0 text-center md:text-left font-barlow font-bold text-white text-4xl md:text-5xl uppercase tracking-wide drop-shadow-lg">
          Contact Us
        </h4>
        <img src={image} alt="" className="w-fit h-fit lg:ml-24 " />
      </Header>
      {/* Contact Section */}
      <section
        className={`${styles.paddingX} pt-28 md:pt-48 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center items-center`}
      >
        {/* Contact content */}
        <div className="flex flex-col gap-4">
          <h4 className="font-barlow font-bold uppercase text-white text-2xl md:text-4xl lg:text-5xl tracking-wide text">
            Contact with Us
          </h4>
          <p className="mt-2 font-poppins text-gray-400 text-left tracking-wide text-base font-semibold">
            Excepteur sint occaecat atat non proident, sunt in culpa qui officia
            deserunt mollit anim id est labor.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center">
              <PlayIcon className="w-4 h-4 text-gray-400 rotate-180" />
              <PlayIcon className="w-4 h-4 text-primary-green-300" />
            </div>
            <h6 className="uppercase font-barlow font-bold text-white text-lg">
              INFORMATION
            </h6>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-poppins text-gray-400 text-left tracking-wide text-sm font-semibold">
              +998 012 345 67 893
            </span>
            <span className="font-poppins text-gray-400 text-left tracking-wide text-sm font-semibold">
              info@example.com
            </span>
            <span className="font-poppins text-gray-400 text-left tracking-wide text-sm font-semibold">
              New Central Park W7 Street, New York
            </span>
          </div>
        </div>
        {/* Contact Form */}
        <form className="flex flex-col justify-start items-start gap-4 my-5">
          <div className="flex items-center gap-4 w-full">
            <input
              type="text"
              placeholder="Name *"
              className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
            />

            <input
              type="email"
              placeholder="Email *"
              className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
            />
          </div>
          <textarea
            placeholder="Message *"
            className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white resize-none h-40"
          ></textarea>
          <input
            type="submit"
            value="Submit now"
            className="mt-6 text-white font-barlow font-bold tracking-wide uppercase text-base bg-primary-green-500 py-4 px-8 rounded-sm"
          />
        </form>
      </section>
    </main>
  );
};

export default Contact;

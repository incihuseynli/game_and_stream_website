import {
  PlayCircleIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import image from "/roadmap.png";
const StreamGuide = () => {
  return (
    <section
      className={`${styles.padding} grid grid-cols-1 lg:grid-cols-2 gap-20`}
    >
      {/* Left Side */}
      <div className="flex flex-col gap-6 items-center justify-center lg:items-start lg:justify-normal lg:border-r-8 lg:border-r-primary-green-300 lg:relative">
        <h4 className="font-barlow font-bold text-4xl lg:text-7xl text-white text-center lg:text-left">
          {/* How to start stream guide */}
          Necə yayım başladılmalıdır
        </h4>
        <p className="font-poppins text-sm text-gray-500 w-full lg:w-3/4 text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolorum?
        </p>
        <img
          src={image}
          alt="How to start stream"
          className="w-fit mt-12 lg:ml-6 h-fit phoneAnimation"
        />
        <div className="hidden lg:block w-20 h-20 bg-primary-green-300 rotate-45 absolute -right-11 top-16">
          <img
            src="./startFlag.jpg"
            alt=""
            className="-rotate-45 w-14 h-fit object-cover ml-3 mt-3"
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="ml-4 flex flex-col gap-8 items-center lg:items-start">
        {/* Card */}
        <div className="relative z-0 w-full md:w-96">
          <div className=" h-56 bg-black-800 py-8 px-4 rounded-xl flex flex-col  gap-2 shadow-2xl border border-opacity-30 border-primary-green-300 hover:border-secondary-yellow-500 transition-all duration-700">
            <UserCircleIcon className="w-14 h-14 object-contain  text-primary-green-300" />
            <h6 className="font-barlow font-semibold text-xl text-white">
              {/* Go To Your Profile */}
              İstifadəçi Profilinə keçid
            </h6>
            <p className="font-poppins text-sm text-gray-400 font-medium tracking-wide  text-left first-letter:capitalize">
              {/* To start your stream you should go to your profile page in first. */}
              Yayımınıza başlamaq üçün əvvəlcə profil səhifənizə keçməlisiniz.
            </p>
          </div>
          <div className="hidden lg:block absolute right-6 -bottom-6 w-14 border-4 border-dashed border-primary-green-300 rotate-45 -z-10"></div>
        </div>
        {/* Card */}
        <div className="relative z-0 w-full md:w-96 lg:ml-32">
          <div className=" h-56 bg-black-800 py-8 px-4 rounded-xl flex flex-col gap-2 shadow-2xl border border-opacity-30 border-primary-green-300 hover:border-secondary-yellow-500 transition-all duration-700">
            <PlayCircleIcon className="w-14 h-14 object-contain  text-primary-green-300" />
            <h6 className="font-barlow font-semibold text-xl text-white">
              {/* Live Stream Button */}
              Canlı Yayına Başla Düyməsi
            </h6>
            <p className="font-poppins text-sm text-gray-400 font-medium tracking-wide  text-left first-letter:capitalize">
              {/* To be able to stream you should click "Start Live Stream" button. */}
              Yayımınızı başlatmaq üçün "Canlı Yayımı Başlat" düyməsini aktiv
              edin.
            </p>
          </div>
          <div className="hidden lg:block absolute right-44 -bottom-6 w-14  border-4 border-dashed border-primary-green-300 -rotate-45 -z-10"></div>
        </div>
        {/* Card */}
        <div className="relative z-0 w-full md:w-96">
          <div className="h-56 bg-black-800 py-8 px-4 rounded-xl flex flex-col gap-2 shadow-2xl border border-opacity-30 border-primary-green-300 hover:border-secondary-yellow-500 transition-all duration-700">
            <VideoCameraIcon className="w-14 h-14 object-contain  text-primary-green-300" />
            <h6 className="font-barlow font-semibold text-xl text-white">
              {/* You Are Live */}
              Siz canlı yayımdasınız
            </h6>
            <p className="font-poppins text-sm text-gray-400 font-medium tracking-wide  text-left first-letter:capitalize">
              {/* Clicking the button will send you a Twitch. Now you can start
              streaming via Twitch. */}
              Düyməni klikləməklə siz Twitch yönləndiriləcəksiniz. İndi Twitch
              vasitəsilə yayıma başlaya bilərsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamGuide;

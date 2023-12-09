import TournamentForm from "./TournamentForm";
import image from "/Quote.svg";
const TournamentContent = () => {
  return (
    <section className="py-6 px-8 bg-black-500 w-full  letterCut rounded-sm border border-gray-400 border-opacity-20">
      <div className="flex flex-col gap-8">
        {/* Tournaments Title */}
        <h5 className="text-white font-barlow font-bold text-2xl md:text-3xl tracking-wide uppercase border-b-2 border-b-gray-500 border-opacity-20 pb-4">
          ZOMBIE LAND TOURNAMENT MAX
        </h5>
        <p className="font-poppins text-gray-400 text-left tracking-wide text-base font-semibold">
          Excepteur sint occaecat atat non proident, sunt in culpa qui officia
          deserunt mollit anim id est labor umLor em ipsum dolor amet consteur
          adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper.
          Ipsum is simply dummy text of printing and typeetting industry. Lorem
          Ipsum has been the industry's standsaard sipiscing Duis elementum
          solliciin. Duis aute irure dolor in repderit in voluptate velit esse
          cillum dolorliq commodo consequat.
        </p>
        <div className="flex items-center gap-4">
          <img src={image} alt="" className="w-16 h-16" />
          <p className="text-lg text-white italic tracking-wider font-poppins font-semibold">
            Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is
            simply dummy text of printing and typeetting industry.
          </p>
        </div>
        <p className="font-poppins text-gray-400 text-left tracking-wide text-base font-semibold">
          Excepteur sint occaecat atat non proident, sunt in culpa qui officia
          deserunt mollit anim id est labor umLor em ipsum dolor amet consteur
          adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper.
          Ipsum is simply dummy text of printing and typeetting industry. Lorem
          Ipsum has been the industry's standsaard sipiscing Duis elementum
          solliciin. Duis aute irure dolor in repderit in voluptate velit esse
          cillum dolorliq commodo consequat.
        </p>
        <video controls className="w-full ">
          <source
            src="https://www.youtube.com/watch?v=ssrNcwxALS4"
            type="video/mp4"
          />
          <source
            src="https://www.youtube.com/watch?v=ssrNcwxALS4"
            type="video/webm"
          />
          <source
            src="https://www.youtube.com/watch?v=ssrNcwxALS4"
            type="video/ogg"
          />
          Your browser does not support the video tag.
        </video>
        <p className="font-poppins text-gray-400 text-left tracking-wide text-base font-semibold">
          Excepteur sint occaecat atat non proident, sunt in culpa qui officia
          deserunt mollit anim id est labor umLor em ipsum dolor amet consteur
          adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper.
          Ipsum is simply dummy text of printing and typeetting industry. Lorem
          Ipsum has been the industry's standsaard sipiscing Duis elementum
          solliciin. Duis aute irure dolor in repderit in voluptate velit esse
          cillum dolorliq commodo consequat.
        </p>
      </div>
      {/* Form to join tournament */}
      <TournamentForm/>
    </section>
  );
};

export default TournamentContent;

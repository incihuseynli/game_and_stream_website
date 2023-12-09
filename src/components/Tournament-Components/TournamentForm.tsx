const TournamentForm = () => {
  return (
    <div className="flex flex-col gap-2 my-6">
      <h6 className="text-white font-barlow font-bold text-2xl uppercase tracking-wide">
        Join This Tournament
      </h6>
      <p className="font-poppins text-gray-400 text-sm tracking-wide first-letter:capitalize">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <form className="flex flex-col justify-start items-start gap-4 my-5">
        <input
          type="text"
          placeholder="Name *"
          className="w-full md:w-5/6 border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-w-full"
        />
        <input
          type="text"
          placeholder="Player ID *"
          className="w-full md:w-5/6 border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
        />
        <input
          type="email"
          placeholder="Email *"
          className="w-full md:w-5/6 border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
        />
        <input
          type="submit"
          value="Join now"
          className="mt-6 text-white font-barlow font-bold tracking-wide uppercase text-base bg-primary-green-500 py-4 px-8 rounded-sm"
        />
      </form>
    </div>
  );
};

export default TournamentForm;

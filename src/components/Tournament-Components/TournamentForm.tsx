import { useState } from "react";
import SubmitBtn from "../Buttons/SubmitBtn";
import Module from "../Global-Components/Module";
import { FormEvent } from "../../types";

const TournamentForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };
  return (
    <div className="flex flex-col gap-2 my-6">
      <h6 className="text-white font-barlow font-bold text-2xl uppercase tracking-wide">
        Join This Tournament
      </h6>
      <p className="font-poppins text-gray-400 text-sm tracking-wide first-letter:capitalize">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <form
        className="flex flex-col justify-start items-start gap-4 my-5 text-white"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name *"
          required
          className="w-full md:w-5/6 border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-w-full"
        />
        <input
          type="text"
          placeholder="Player ID *"
          required
          className="w-full md:w-5/6 border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide  text-white"
        />
        <input
          type="email"
          placeholder="Email *"
          required
          className="w-full md:w-5/6 border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide  text-white"
        />
        <SubmitBtn value="Join now" />
      </form>
      {isOpen && <Module setIsOpen={setIsOpen} type="form" />}
    </div>
  );
};

export default TournamentForm;

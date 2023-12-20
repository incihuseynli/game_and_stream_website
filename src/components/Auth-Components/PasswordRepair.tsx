import { useState } from "react";
import SubmitBtn from "../Buttons/SubmitBtn";
import image from "/heroimg3.png";
import { FormEvent } from "../../types";
import Module from "../Global-Components/Module";
import PageHead from "../Global-Components/PageHead";

const PasswordRepair = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      {/* Header */}
      <PageHead image={image} pageTitle="Password Repairment" />
      <main className="my-24 flex items-center justify-center">
        <section className="border w-full lg:w-2/3 border-gray-500 border-opacity-20 p-8 flex flex-col gap-4 shadow-xl">
          <h4 className="text-3xl font-barlow font-bold uppercase text-white">
            Lost Your Password?
          </h4>
          <p className="mt-2 font-poppins text-gray-400 text-left tracking-wide text-base font-medium">
            Please enter your email address. You will receive a link to create a
            new password via email.
          </p>
          <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email *"
              required
              className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide  text-white"
            />
            <SubmitBtn value="Reset Password" />
          </form>
          {isOpen && <Module setIsOpen={setIsOpen} type="your new password" />}
        </section>
      </main>
    </>
  );
};

export default PasswordRepair;

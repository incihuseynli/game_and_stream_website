import Header from "../Header-Components/Header";
import image from "/heroimg3.png";

const PasswordRepair = () => {
  return (
    <>
      {/* Header */}
      <Header>
        <h4 className="md:ml-4 lg:ml-8 mb-12 md:mb-0 text-center md:text-left font-barlow font-bold text-white text-4xl md:text-5xl uppercase tracking-wide drop-shadow-lg">
          Password Repairment
        </h4>
        <img src={image} alt="" className="w-72 h-72 lg:ml-56 " />
      </Header>
      <main className="my-24 flex items-center justify-center">
        <section className="border w-full lg:w-2/3 border-gray-500 border-opacity-20 p-8 flex flex-col gap-4 shadow-xl">
          <h4 className="text-3xl font-barlow font-bold uppercase text-white">
            Lost Your Password?
          </h4>
          <p className="mt-2 font-poppins text-gray-400 text-left tracking-wide text-base font-medium">
            Please enter your email address. You will receive a link to create a
            new password via email.
          </p>
          <form className="flex flex-col gap-6 ">
            <input
              type="email"
              placeholder="Email *"
              className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
            />
            <input
              type="submit"
              value="Reset Password"
              className="mt-6 w-fit text-white font-barlow font-bold tracking-wide uppercase text-base bg-primary-green-500 hover:bg-secondary-yellow-500 transition-all duration-700 py-4 px-8 rounded-sm"
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default PasswordRepair;

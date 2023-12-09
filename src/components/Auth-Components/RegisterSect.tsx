import { EyeSlashIcon } from "@heroicons/react/24/solid";

const RegisterSect = () => {
  return (
    <section className="border border-gray-500 border-opacity-20 p-8 flex flex-col gap-4 shadow-xl">
      <h4 className="text-3xl font-barlow font-bold uppercase text-white">
        Register
      </h4>
      <p className="mt-2 font-poppins text-gray-400 text-left tracking-wide text-base font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
        facilis.
      </p>
      <form className="flex flex-col gap-6 ">
        <input
          type="email"
          placeholder="Email *"
          className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
        />
        <input
          type="text"
          placeholder="Username *"
          className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
        />
        <input
          type="date"
          placeholder="Birth Date *"
          className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
        />
        <div className="w-full flex items-center border border-gray-400 border-opacity-20 bg-black-800 rounded-sm outline-none focus-within:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white">
          <input
            type="password"
            placeholder="Password *"
            className="border-none p-4 mr-2 w-full h-full outline-none bg-transparent flex-1"
          />
          <EyeSlashIcon className="w-4 h-4 mr-2 text-gray-500" />
        </div>
        <div className="w-full flex items-center border border-gray-400 border-opacity-20 bg-black-800 rounded-sm outline-none focus-within:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white">
          <input
            type="password"
            placeholder="Confirm Password *"
            className="border-none p-4 mr-2 w-full h-full outline-none bg-transparent flex-1"
          />
          <EyeSlashIcon className="w-4 h-4 mr-2 text-gray-500" />
        </div>
        <div className="flex  gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            className="accent-primary-green-300 w-4 h-4"
          />
          <span className="text-sm -mt-1 font-poppins font-medium text-white">
            You're accepting personal data will be used to support your
            experience throughout this website, to manage access to your
            account, and for other purposes described in our{" "}
            <a href="#" className="text-primary-green-500">
              privacy policy
            </a>
            .
          </span>
        </div>
        <input
          type="submit"
          value="Sign in"
          className="mt-6 w-40 text-white font-barlow font-bold tracking-wide uppercase text-base bg-primary-green-500 hover:bg-secondary-yellow-500 transition-all duration-700 py-4 px-8 rounded-sm"
        />
      </form>
    </section>
  );
};

export default RegisterSect;

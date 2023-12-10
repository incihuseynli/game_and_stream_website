import { EyeSlashIcon } from "@heroicons/react/24/solid";
import Axios from "axios";
import { useState } from "react";
import { FormEvent } from "../../types";

const RegisterSect = () => {
  interface IUser {
    email: string;
  }
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const isUserExist = existingUsers.some(
      (user: IUser) => user.email === email
    );

    // For already existed users
    if (isUserExist) {
      console.log("User already exists");
      return;
    }
    // Adding New User
    const newUser = { username, password, email, birthDate };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    await Axios.post("http://localhost:5000/users", newUser);
  };
  /**
   * TODO: only add id & email to LocalStorage other infos should go to json server
   **/
  return (
    <section className="border border-gray-500 border-opacity-20 p-8 flex flex-col gap-4 shadow-xl">
      <h4 className="text-3xl font-barlow font-bold uppercase text-white">
        Register
      </h4>
      <p className="mt-2 font-poppins text-gray-400 text-left tracking-wide text-base font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
        facilis.
      </p>
      <form className="flex flex-col gap-6 " onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email *"
          className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide  text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username *"
          className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="date"
          placeholder="Birth Date *"
          className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <div className="w-full flex items-center border border-gray-400 border-opacity-20 bg-black-800 rounded-sm outline-none focus-within:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white">
          <input
            type="password"
            placeholder="Password *"
            className="border-none p-4 mr-2 w-full h-full outline-none bg-transparent flex-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <EyeSlashIcon className="w-4 h-4 mr-2 text-gray-500" />
        </div>
        {/* <div className="w-full flex items-center border border-gray-400 border-opacity-20 bg-black-800 rounded-sm outline-none focus-within:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white">
          <input
            type="password"
            placeholder="Confirm Password *"
            className="border-none p-4 mr-2 w-full h-full outline-none bg-transparent flex-1"
          />
          <EyeSlashIcon className="w-4 h-4 mr-2 text-gray-500" />
        </div> */}
        <div className="flex  gap-2">
          <input
            type="checkbox"
            name=""
            id="policy"
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

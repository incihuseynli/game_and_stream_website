import Axios from "axios";
import { useState } from "react";
import { FormEvent } from "../../types";
import SubmitBtn from "../Buttons/SubmitBtn";
import toast, { Toaster } from "react-hot-toast";

const RegisterSect = () => {
  interface IUser {
    email: string;
    username: string;
  }
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const clearInputFields = () => {
    setUsername("");
    setEmail("");
    setBirthDate("");
    setPassword("");
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const isUsernameTaken = existingUsers.some(
      (user: IUser) => user.username === username
    );
    const isEmailTaken = existingUsers.some(
      (user: IUser) => user.email === email
    );
    // If someone has same username
    if (isUsernameTaken) {
      // toast.error("Username is already taken. Please choose another.");
      toast.error("İstifadəçi adı artıq istifadə olunub. Başqasını seçin.");
      return;
    }
    // For already existed users
    if (isEmailTaken) {
      // toast.error("Email address is already registered. Please use another.");
      toast.error(
        "İstifadə etdiyiniz email addresslə qeydiyyatdan keçirilib.Zəhmət olmasa, başqasınız istifadə edin."
      );
      return;
    }
    // Adding New User
    const newUser = { username, password, email, birthDate };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    await toast.promise(Axios.post("http://localhost:3080/users", newUser), {
      // loading: "Registering...",
      loading: "Qeydiyyatdan keçirsiniz...",
      success: () => {
        clearInputFields();
        // return `Successfully! You can login now!`;
        return `Uğurlu! İndi giriş edə bilərsiniz!`;
      },
      // error: "Registration failed",
      error: "Qeydiyyat uğursuz oldu",
    });
  };

  return (
    <section className="border border-gray-500 border-opacity-20 p-8 flex flex-col gap-4 shadow-xl">
      <h4 className="text-3xl font-barlow font-bold uppercase text-white">
        {/* Register */}
        Qeydiyyat
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
          required
        />
        <input
          type="text"
          placeholder="İstifadəçi adı *"
          className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Doğum tarixi *"
          className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <div className="w-full flex items-center border border-gray-400 border-opacity-20 bg-black-800 rounded-sm outline-none focus-within:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white">
          <input
            type="text"
            placeholder="Şifrə *"
            className="border-none p-4 mr-2 w-full h-full outline-none bg-transparent flex-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex  gap-2">
          <input
            type="checkbox"
            name=""
            id="policy"
            checked={true}
            className="accent-primary-green-300 w-4 h-4"
            required
          />
          <span className="text-sm -mt-1 font-poppins font-medium text-white">
            {/* You're accepting personal data will be used to support your
            experience throughout this website, to manage access to your
            account, and for other purposes described in our */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            autem aliquam eaque nemo unde recusandae.{" "}
            <a href="#" className="text-primary-green-500">
              privacy policy
            </a>
            .
          </span>
        </div>
        {/* <SubmitBtn value="Sign in" /> */}
        <SubmitBtn value="Qeydiyyatdan keç" />
        <Toaster position="bottom-right" reverseOrder={true} />
      </form>
    </section>
  );
};

export default RegisterSect;

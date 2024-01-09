import { NavLink } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { FormEvent, IUsers } from "../../types";
import Cookies from "js-cookie";
import SubmitBtn from "../Buttons/SubmitBtn";
type LoginSectProps = {
  onLogin: () => void;
};
const LoginSect: React.FC<LoginSectProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // Show Password Toggle
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Login config
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    try {
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const isUserExist = existingUsers.some(
        (user: IUsers) => user.email === email && user.password == password
      );

      if (isUserExist) {
        onLogin();
        if (rememberMe) {
          Cookies.set("loggedIn", "true", { expires: 7 });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loggedInCookie = Cookies.get("loggedIn");
    if (loggedInCookie) {
      onLogin();
    }
  }, []);
  return (
    <section className="border border-gray-500 border-opacity-20 p-8 flex flex-col gap-4 shadow-xl">
      <h4 className="text-3xl font-barlow font-bold uppercase text-white">
        {/* Login */}
        Giriş
      </h4>
      <p className="mt-2 font-poppins text-gray-400 text-left tracking-wide text-base font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
        facilis.
      </p>
      <form className="flex flex-col gap-6 " onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email *"
          className="w-full border border-gray-400 border-opacity-20 bg-black-800 p-4 rounded-sm outline-none focus:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide  text-white"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="w-full flex items-center border border-gray-400 border-opacity-20 bg-black-800 rounded-sm outline-none focus-within:border-primary-green-300 transition-all duration-700 text-base font-poppins tracking-wide capitalize text-white">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Şifrə *"
            className="border-none p-4 mr-2 w-full h-full outline-none bg-transparent flex-1"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {showPassword ? (
            <EyeIcon
              className="w-4 h-4 mr-2 text-gray-500"
              onClick={handleShowPassword}
            />
          ) : (
            <EyeSlashIcon
              className="w-4 h-4 mr-2 text-gray-500"
              onClick={handleShowPassword}
            />
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-primary-green-300 w-4 h-4"
              aria-checked="true"
              required
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span className="text-sm font-poppins font-medium text-white">
              {/* Remember me */}
              Məni xatırla
            </span>
          </div>
          <NavLink
            to="/auth/lost-password"
            className="text-sm font-poppins font-medium text-primary-green-300 tracking-wide hover:text-secondary-yellow-500 transition-all duration-500"
          >
            {/* Lost your password? */}
            Şifrənizi unutmusunuz?
          </NavLink>
        </div>

        {/* <SubmitBtn value="Log in" /> */}
        <SubmitBtn value="Giriş et" />
      </form>
    </section>
  );
};

export default LoginSect;

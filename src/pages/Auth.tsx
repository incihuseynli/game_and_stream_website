import LoginSect from "../components/Auth-Components/LoginSect";
import RegisterSect from "../components/Auth-Components/RegisterSect";
import Header from "../components/Header-Components/Header";
import { styles } from "../styles";
import image from "/heroimg3.png";
const Auth = () => {
  return (
    <>
      <Header>
        <h4 className="md:ml-4 lg:ml-8 mb-12 md:mb-0 text-center md:text-left font-barlow font-bold text-white text-4xl md:text-5xl uppercase tracking-wide drop-shadow-lg">
          MY ACCOUNT
        </h4>
        <img src={image} alt="" className="w-fit h-fit lg:ml-24 " />
      </Header>
      <main className={`${styles.paddingX} py-24 grid grid-cols-1 lg:grid-cols-2 place-items-center items-start gap-6`}>
        {/* Login Form */}
        <LoginSect />
        {/* Register Form */}
        <RegisterSect />
      </main>
    </>
  );
};

export default Auth;

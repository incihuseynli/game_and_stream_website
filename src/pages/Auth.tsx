import LoginSect from "../components/Auth-Components/LoginSect";
import RegisterSect from "../components/Auth-Components/RegisterSect";
import { styles } from "../styles";
import image from "/heroimg3.png";
import Profile from "../components/Auth-Components/Profile";
import { useAuth } from "../components/ContextAPI/AuthContext";
import PageTransition from "../transitions/PageTransition";
import Reveal from "../transitions/Reveal";
import { Helmet } from "react-helmet";
import PageHead from "../components/Global-Components/PageHead";

const Auth = () => {
  const { isLogged, handleLogin } = useAuth();

  return (
    <PageTransition>
      {/* Helmet Config */}
      <Helmet>
        {/* <title>{isLogged ? "My Account" : "Login/Registeration Page"}</title> */}
        <title>{isLogged ? "Profilim" : "Giriş et və ya qeydiyyatdan keç"}</title>
        <meta
          name="description"
          content="My Account page of Games and streams website"
        />
      </Helmet>
      {/* Header Section */}
      {/* <PageHead pageTitle="My account" image={image} /> */}
      <PageHead pageTitle={isLogged ? "Profilim" : "Giriş / Qeydiyyat"} image={image} />
      {/* Main Section */}
      <main className={`${styles.paddingX} py-24`}>
        {isLogged ? (
          <Profile />
        ) : (
          <section className=" grid grid-cols-1 lg:grid-cols-2 place-items-center items-start gap-6">
            {/* Login Form */}
            <Reveal>
              <LoginSect onLogin={handleLogin} />
            </Reveal>
            {/* Register Form */}
            <Reveal>
              <RegisterSect />
            </Reveal>
          </section>
        )}
      </main>
    </PageTransition>
  );
};

export default Auth;

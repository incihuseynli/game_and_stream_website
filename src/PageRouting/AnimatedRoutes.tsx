import { Route, Routes, useLocation } from "react-router";
import { Paths } from "./Paths";
import Navbar from "../components/Header-Components/Navbar.tsx";
import Footer from "../components/Footer-Components/Footer.tsx";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  const currentRoute = Paths.find((route) => route.path === location.pathname);
  const showNavbar =
    currentRoute &&
    Paths.map(({ title }) => title).includes(currentRoute.title);

  return (
    <>
      {/* HEADER */}
      {!showNavbar && <Navbar />}
      {/* Framer wrapper */}
      <AnimatePresence mode="wait">
        {/* ROUTES */}
        <Routes location={location} key={location.pathname}>
          {Paths.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Routes>
      </AnimatePresence>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default AnimatedRoutes;

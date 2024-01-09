import { Route, Routes, useLocation } from "react-router";
import { Paths } from "./Paths";
import Footer from "../components/Footer-Components/Footer.tsx";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const AnimatedRoutes = () => {
  const location = useLocation();



    useEffect(() => {
      // Scroll to the top of the page whenever the location changes
      window.scrollTo(0, 0);
    }, [location.pathname]);
  
  return (
    <>
    
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

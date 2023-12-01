import { Route, Routes, useLocation } from "react-router";
import { Paths } from "./Paths";
import Header from "../components/Header-Components/Header";
import Footer from "../components/Footer-Components/Footer.tsx";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      {/* HEADER */}
      <Header />
      {/* ROUTES */}
      <Routes location={location} key={location.pathname}>
        {Paths.map(({ id, path, element }) => {
          return <Route key={id} path={path} element={element} />;
        })}
      </Routes>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default AnimatedRoutes;

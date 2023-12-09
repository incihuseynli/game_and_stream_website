import AnimatedRoutes from "./PageRouting/AnimatedRoutes";
import AnimatedCursorComponent from "./components/Global-Components/AnimatedCursorComponent";
import ToTop from "./components/Footer-Components/ToTop";

function App() {
  return (
    <>
      {/* ALL PAGES ROUTINGS */}
      <AnimatedRoutes />
      {/* ANIMATED CURSOR COMPONENT */}
      <AnimatedCursorComponent />
      {/* TO UP PAGE SCROLL */}
      <ToTop />
    </>
  );
}

export default App;

import { styles } from "../../styles";
import { IChildren } from "../../types";
import HeroSect from "../Global-Components/HeroSect";
import Navbar from "./Navbar";
const Header = ({children}:IChildren) => {
  return (
    <header className="bg-[url('./images/bgHero.jpg')] bg-center bg-cover bg-no-repeat">
      <Navbar />
      <HeroSect>
        <section
          className={`${styles.padding}  grid grid-cols-1 md:grid-cols-2 gap-4  items-center`}
        >
         {children}
        </section>
      </HeroSect>
    </header>
  );
};

export default Header;

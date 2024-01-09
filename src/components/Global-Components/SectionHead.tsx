import { styles } from "../../styles";
import TitleReveal from "../../transitions/TitleReveal";
import { ISHead } from "../../types";

const SectionHead = ({ headTitle, title }: ISHead) => {
  return (
    <div className={`${styles.flexCenter} flex-col gap-3`}>
      <span className="uppercase text-base text-primary-green-500 font-poppins font-bold tracking-widest">
        <TitleReveal>{headTitle}</TitleReveal>
      </span>
      <h4 className="font-poppins font-bold text-2xl md:text-4xl text-white uppercase">
        {title}
      </h4>
      <span className="w-16 h-1.5 bg-primary-green-500 rounded-b-lg"></span>
    </div>
  );
};

export default SectionHead;

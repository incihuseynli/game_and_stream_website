import { styles } from "../../styles";
interface Iprops {
  type: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
import clickBtn from "/click1.mp3";

const Module = ({ type, setIsOpen }: Iprops) => {
  const handleModuleClose = (): void => {
    setIsOpen(false);
    window.location.reload();
    const clickSound = (): void => {
      new Audio(clickBtn).play();
    };
    clickSound();
  };
  return (
    <div className="w-fit bg-black-500 rounded-sm p-16  text-center absolute mx-4  lg:left-1/4 lg:translate-x-1/40 border">
      <div className={`${styles.flexCenter} flex-col gap-2`}>
        <h5 className="text-secondary-yellow-500 font-barlow font-bold text-lg tracking-wide uppercase">
          {/* your {type} has been sent! */}
           {type} uğurla göndərildi!
        </h5>
        <p className="text-gray-400 font-poppins font-medium text-sm tracking-wide">
          {/* Reply will send via email you provided.  */}
          Cavab qeyd etdiyiniz email address üzərindən təqdim ediləcəkdir. <br />
          {/* Please check it later. */}
          Zəhmət olmasa, daha sonra poçt qutunuzu yoxlayın.
        </p>
        <button
          className="mt-6 text-white font-barlow font-bold tracking-wide uppercase text-base bg-primary-green-500 hover:bg-secondary-yellow-500 transition-all duration-700 py-4 px-8 rounded-sm"
          onClick={handleModuleClose}
        >
          {/* Close */}
          Bağla
        </button>
      </div>
    </div>
  );
};

export default Module;

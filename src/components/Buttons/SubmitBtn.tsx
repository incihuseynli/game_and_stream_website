import clickBtn from "/click1.mp3";
type IProps = {
  value : string;
}
const SubmitBtn = ({value}:IProps) => {
     const clickSound = (): void => {
    new Audio(clickBtn).play();
  };
  return (
    <input
      type="submit"
      value={value}
      className="mt-6 w-fit text-white font-barlow font-bold tracking-wide uppercase text-base bg-primary-green-500 hover:bg-secondary-yellow-500 transition-all duration-700 py-4 px-8 rounded-sm"
      onClick={clickSound}
    />
  );
};

export default SubmitBtn;

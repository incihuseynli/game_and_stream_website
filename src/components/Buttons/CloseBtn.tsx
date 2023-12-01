import React from "react";
import clickBtn from "/closeClick.mp3";

interface ICloseBtnProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CloseBtn = ({ setIsOpen }: ICloseBtnProps) => {
  const clickSound = (): void => {
    new Audio(clickBtn).play();
  };
  const handleClick = () => {
    setIsOpen(false);
    clickSound();
  };
  return (
    <div>
      <img
        src="./closeBtn.svg"
        alt="menu closing button"
        className="hover:scale-150 cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default CloseBtn;

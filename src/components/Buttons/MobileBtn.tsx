import React from "react";
import clickBtn from "/click1.mp3";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

interface ICloseBtnProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}
const MobileBtn = ({ setIsOpen, isOpen }: ICloseBtnProps) => {
  const clickSound = (): void => {
    new Audio(clickBtn).play();
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
    clickSound();
  };
  return (
    <div
      className="w-12 h-12 mr-8 cursor-pointer text-white hover:text-primary-green-500"
      onClick={handleClick}
    >
      <Bars3BottomRightIcon />
    </div>
  );
};

export default MobileBtn;

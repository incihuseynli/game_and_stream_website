import { useState } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
const ToTop = () => {
  const [icon, setIcon] = useState<boolean>(false);
  const toUp = (): void => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  window.onscroll = function (): void {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  };

  return (
    <>
      {icon && (
        <div
          onClick={toUp}
          className="fixed right-4 bottom-4 z-50 w-10 h-10 p-2 rounded-full text-white hover:bg-primary-green-800 bg-primary-green-500"
        >
          <ArrowSmallUpIcon />
        </div>
      )}
      ;
    </>
  );
};

export default ToTop;

import React, { useState, useEffect } from "react";
import { IDate } from "../../types";

const CountdownTimer: React.FC<{ endDate: string }> = ({ endDate }) => {
  const calculateTimeLeft = (): IDate => {
    const difference = new Date(endDate).getTime() - new Date().getTime();
    let timeLeft: IDate = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<IDate>(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }, [timeLeft]);

  return (
    <div className="font-poppins absolute right-0 top-0 p-4 rounded-t-xl rounded-bl-xl ">
      <div className="flex">
        <div className="flex flex-col items-center">
          {timeLeft.days > 0 && (
            <span className="text-white font-medium tracking-wide text-xs">
              {timeLeft.days}
            </span>
          )}

          <span className="uppercase text-sm font-bold tracking-wide text-gray-500">
            {/* Day */}
            GÜN
          </span>
        </div>
        <span className="text-base text-gray-500 mx-2  -mt-1">:</span>
        <div className="flex flex-col items-center">
          {timeLeft.hours > 0 && (
            <span className="text-white font-medium tracking-wide text-xs">
              {timeLeft.hours}
            </span>
          )}
          <span className="uppercase text-sm font-bold tracking-wide text-gray-500">
            {/* Hour */}
            Saat
          </span>
        </div>
        <span className="text-base text-gray-500 mx-2  -mt-1">:</span>
        <div className="flex flex-col items-center">
          {timeLeft.minutes > 0 && (
            <span className="text-white font-medium tracking-wide text-xs">
              {timeLeft.minutes}
            </span>
          )}
          <span className="uppercase text-sm font-bold tracking-wide text-gray-500">
            {/* Min */}
            Dəq
          </span>
        </div>
        <span className="text-base text-gray-500 mx-2  -mt-1">:</span>
        <div className="flex flex-col items-center">
          {timeLeft.seconds > 0 && (
            <span className="text-white font-medium tracking-wide text-xs">
              {timeLeft.seconds}
            </span>
          )}
          <span className="uppercase text-sm font-bold tracking-wide text-gray-500">
            {/* sec */}
            San
          </span>
        </div>
      </div>
    </div>
  );
};
export default CountdownTimer;

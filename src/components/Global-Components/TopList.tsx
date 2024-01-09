import { IHoc } from "../../types";

const TopList = ({ secTitle, children }:IHoc) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full bg-black-500 rounded-2xl p-6">
      {/* HEAD */}
      <h4 className="mb-4 text-[28px] text-primary-green-300 font-barlow font-bold tracking-wider">
        {secTitle}
      </h4>
      {/* LIST */}
      {children}
    </div>
  );
};

export default TopList;

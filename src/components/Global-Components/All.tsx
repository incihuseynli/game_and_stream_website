import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import { IChildren } from "../../types";

const All = ({children}:IChildren) => {
  const active: boolean = true;

  return (
    <>
      {/* All  */}
      <div className="bg-black-500 rounded-2xl">
        {/* List  */}
       
            {children}
      
        {/* Pagination */}
        <div className={`${styles.flexCenter} gap-2 text-white mt-4 mb-8`}>
          {/* Previous button */}
          <button className="w-9 h-9 border text-white border-gray-500 hover:border-primary-green-300 hover:text-primary-green-300 transition-all duration-500 rounded-md p-2">
            <ChevronLeftIcon />
          </button>
          {/* Page number's buttons */}
          <button
            className={`w-9 h-9 text-center font-barlow font-medium text-base border transition-all duration-500 rounded-md p-1
          ${
            active
              ? "bg-primary-green-300 border-primary-green-300"
              : "bg-transparent border-gray-500 hover:border-primary-green-300 hover:text-primary-green-300"
          }`}
          >
            1
          </button>

          {/* Next button */}
          <button className="w-9 h-9 border text-white border-gray-500 hover:border-primary-green-300 hover:text-primary-green-300 transition-all duration-500 rounded-md p-2">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default All;

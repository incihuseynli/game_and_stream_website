import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { styles } from "../../styles";
import { IChildren, IGame } from "../../types";
import { ReactEventHandler } from "react";
interface IPaginate {
  prevPage: ReactEventHandler<HTMLButtonElement>;
  nextPage: ReactEventHandler<HTMLButtonElement>;
  currentPage: number;
  stateProp: IGame[];
  limit: number;
  paginate: ReactEventHandler<HTMLButtonElement>;
}
interface AllProps extends IChildren, IPaginate {}
const All = ({
  children,
  prevPage,
  currentPage,
  stateProp,
  limit,
  paginate,
  nextPage,
}: AllProps) => {
  return (
    <>
      {/* All  */}
      <div className="bg-black-500 rounded-2xl">
        {/* List  */}

        {children}

        {/* Pagination */}
        <div className={`${styles.flexCenter} gap-2 text-white mt-4 mb-8`}>
          {/* Previous button */}
          <button
            className="w-9 h-9 border text-white border-gray-500 hover:border-primary-green-300 hover:text-primary-green-300 transition-all duration-500 rounded-md p-2"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon />
          </button>
          {/* Page number's buttons */}
          {Array.from(
            {
              length: Math.ceil(stateProp.length / limit),
            },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-9 h-9 text-center font-barlow font-medium text-base border transition-all duration-500 rounded-md p-1
            ${
              currentPage === i + 1
                ? "bg-primary-green-300 border-primary-green-300"
                : "bg-transparent border-gray-500 hover:border-primary-green-300 hover:text-primary-green-300"
            }`}
              >
                {i + 1}
              </button>
            )
          )}

          {/* Next button */}
          <button
            className="w-9 h-9 border text-white border-gray-500 hover:border-primary-green-300 hover:text-primary-green-300 transition-all duration-500 rounded-md p-2"
            onClick={nextPage}
            disabled={currentPage === Math.ceil(stateProp.length / limit)}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default All;

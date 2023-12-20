import { NavLink } from "react-router-dom";
import { IStreamers } from "../../types";
import All from "../Global-Components/All";
import { useEffect, useState } from "react";
import Axios from "axios";

const AllStreamers = () => {
  const URL = "http://localhost:3080/streamers";
  const [streamers, setStreamers] = useState<IStreamers[]>([]);
  const handleData = () => {
    try {
      Axios.get(URL).then(({ data }) => {
        setStreamers(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  //   Pagination config
  const limit = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentDatas = streamers.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  return (
    <All
      currentPage={currentPage}
      limit={limit}
      nextPage={nextPage}
      paginate={paginate}
      prevPage={prevPage}
      stateProp={streamers}
    >
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-9 md:gap-x-28 lg:gap-4 place-items-center mx-auto py-16 px-4 lg:px-8">
        {currentDatas.map(({ id, username, followers, image }) => {
          return (
            <NavLink
              key={id}
              to={`/streams/${id}`}
              className="bg-black-800 w-44  p-6 flex flex-col items-center gap-2 rounded-xl border border-gray-500 hover:border-primary-green-300 transition-all duration-700 border-opacity-20"
            >
              <img
                src={image}
                alt={`${username} profile`}
                className="w-24 h-24 rounded-full"
              />
              <div className="flex flex-col items-center">
                <h6 className="text-base uppercase font-barlow font-bold text-white text-center">
                  {username}
                </h6>
                <span className="text-primary-green-300 font-poppins text-sm font-semibold tracking-wide">
                  {followers} followers
                </span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </All>
  );
};

export default AllStreamers;

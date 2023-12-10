import { useEffect, useState } from "react";
import { styles } from "../../styles";
import All from "../Global-Components/All";
import SectionHead from "../Global-Components/SectionHead";
import GameCard from "../Home-Components/GameCard";
import { IGame } from "../../types";
import Axios from "axios";

const AllGames = () => {
  const limit = 6;
  const URL = `http://localhost:3080/games`;
  const [games, setGames] = useState<IGame[]>([]);
  const handleData = () => {
    try {
      Axios.get(URL).then(({ data }) => {
        setGames(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentDatas = games.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  // console.log(currentDatas);

  return (
    <section className={`${styles.padding} my-24 flex flex-col gap-16`}>
      {/* Section Head */}
      <SectionHead
        headTitle="Choose game you want"
        title="All Best Games is in here"
      />
      {/* All Games */}
      <All
        currentPage={currentPage}
        limit={limit}
        nextPage={nextPage}
        paginate={paginate}
        prevPage={prevPage}
        stateProp={games}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-9 place-items-center py-16 px-4 lg:px-8">
          {currentDatas.map((currentData) => {
            return <GameCard key={currentData.id} currentData={currentData} />;
          })}
        </div>
      </All>
    </section>
  );
};

export default AllGames;

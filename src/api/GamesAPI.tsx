import Axios from "axios";
import { useEffect, useState } from "react";
import { GamesAPIProps, IGame } from "../types";

const GamesAPI: React.FC<GamesAPIProps> = ({ limit, children }) => {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": "8270335a98mshff2fc09f55e7c03p15f4a7jsn3afb95e7043a",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const [games, setGames] = useState<IGame[]>([]);
  const handleData = async () => {
    try {
      const response = await Axios.request(options);
      const limitedGames = response.data.slice(0, limit);

      setGames(limitedGames);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleData();
  }, [limit]);

  return <>{children(games)}</>;
};

export default GamesAPI;

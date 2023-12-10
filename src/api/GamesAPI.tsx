import Axios from "axios";
import { useEffect, useState } from "react";
import { GamesAPIProps, IGame } from "../types";

const GamesAPI: React.FC<GamesAPIProps> = ({ limit, children }) => {
  const URL = `http://localhost:3080/games?_limit=${limit}`;
  // `https://my-json-server.typicode.com/dbForProjects/games_api/games?_limit=${limit}`;
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
  }, [limit]);

  return <>{children(games)}</>;
};

export default GamesAPI;

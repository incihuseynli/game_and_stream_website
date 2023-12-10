import { useEffect, useState } from "react";
import { GameDetailsAPIProps, IGame } from "../types";
import Axios from "axios";
import { useParams } from "react-router";

const GameDetailAPI: React.FC<GameDetailsAPIProps> = ({ children }) => {
  const { id } = useParams<{id:string}>();
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: {id: `${id}`},
    headers: {
      "X-RapidAPI-Key": "8270335a98mshff2fc09f55e7c03p15f4a7jsn3afb95e7043a",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const [game, setGame] = useState<IGame | null>(null);
  useEffect(() => {
    Axios.get(options.url).then(({ data }) => {
      setGame(data);
    });
  },[options.url]);
  return <>{children(game)}</>;
};

export default GameDetailAPI;

import { useEffect, useState } from "react";
import { IStreamers, StreamsAPIProps } from "../types";
import Axios from "axios";

const StreamersAPI: React.FC<StreamsAPIProps> = ({ limit, children }) => {
  const URL =
    limit && limit > 0
      ? `http://localhost:3080/streamers?_limit=${limit}`
      : "http://localhost:3080/streamers";
  // console.log(URL);

  const [streamers, setStreamers] = useState<IStreamers[]>([]);
  const handleData = () => {
    Axios.get(URL).then(({ data }) => {
      setStreamers(data);
    });
  };
  useEffect(() => {
    handleData();
  }, []);
  return <>{children(streamers)}</>;
};

export default StreamersAPI;

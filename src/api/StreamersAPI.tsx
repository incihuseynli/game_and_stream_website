import { useEffect, useState } from "react";
import { IStreamers, StreamsAPIProps } from "../types";
import Axios from "axios";

const StreamersAPI: React.FC<StreamsAPIProps> = ({ limit, children }) => {
  const URL =
    limit && limit > 0
      ? `https://my-json-server.typicode.com/dbForProjects/streamersDb/streams?_limit=${limit}`
      : "https://my-json-server.typicode.com/dbForProjects/streamersDb/streams";
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

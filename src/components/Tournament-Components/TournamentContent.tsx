import { useParams } from "react-router";
import TournamentForm from "./TournamentForm";
import image from "/Quote.svg";
import { useEffect, useState } from "react";
import { ITournaments } from "../../types";
import axios from "axios";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";

const TournamentContent = () => {
  const { id } = useParams<{ id: string }>();
  // const URL = "http://localhost:3080/tournaments/";
  const URL = "https://my-json-server.typicode.com/dbForProjects/tournaments/tournaments";
  const [tournament, setTournament] = useState<ITournaments>(
    {} as ITournaments
  );

  useEffect(() => {
    axios.get(URL + id).then(({ data }) => {
      setTournament(data);
    });
  }, [id]);

  return (
    <section className="py-6 px-8 bg-black-500 w-full  letterCut rounded-sm  relative">
      {/* Helmet config */}
      <Helmet>
        <title>{`${tournament.title} detalları`}</title>
        <meta
          name="description"
          content={`Join to ${tournament.title} tournament now!`}
        />
      </Helmet>
      <div className="flex flex-col gap-8">
        {/* Tournaments Title */}
        <h5 className="text-white font-barlow font-bold text-2xl md:text-3xl tracking-wide uppercase border-b-2 border-b-gray-500 border-opacity-20 pb-4">
          {tournament.title}
        </h5>
        <p className="font-poppins text-gray-400 text-left tracking-wide text-base font-semibold">
          {tournament.content}
        </p>
        <div className="flex items-center gap-4">
          <img src={image} alt="" className="w-16 h-16" />
          <p className="text-lg text-white italic tracking-wider font-poppins font-semibold">
            {tournament.quote}
          </p>
        </div>
        <p className="font-poppins text-gray-400 text-left tracking-wide text-base font-semibold">
          {tournament.content}
        </p>
        <ReactPlayer className="w-full" url={tournament.promo} />
        <p className="font-poppins text-gray-400 text-left tracking-wide text-base font-semibold">
          {tournament.content}
        </p>
      </div>
      {/* Form to join tournament */}
      <TournamentForm />
    </section>
  );
};

export default TournamentContent;

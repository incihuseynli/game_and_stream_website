import Home from "../pages/Home";
import Browse from "../pages/Browse";
import { RoutesType } from "../types";
import GameDetail from "../pages/GameDetail";
import Tournament from "../pages/Tournament";
import Streams from "../pages/Streams";
import Contact from "../pages/Contact";
import TournamentDetails from "../pages/TournamentDetails";
import StreamerDetails from "../pages/StreamerDetails";
import PageNotFound from "../pages/PageNotFound";
import Auth from "../pages/Auth";
import PasswordRepair from "../components/Auth-Components/PasswordRepair";

export const Paths: RoutesType = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    // title: "Home",
    title: "Əsas Səhifə",
  },
  {
    id: 2,
    path: "/browse",
    element: <Browse />,
    // title: "Browse",
    title: "Oyunlar",
  },
  {
    id: 3,
    path: "/tournament",
    element: <Tournament />,
    // title: "Tournament",
    title: "Müsabiqələr",
  },
  {
    id: 4,
    path: "/streams",
    element: <Streams />,
    title: "Yayımlar",
  },
  {
    id: 5,
    path: "/contact",
    element: <Contact />,
    title: "Əlaqə",
  },
  {
    id: 6,
    path: "/browse/:id",
    element: <GameDetail />,
  },
  {
    id: 7,
    path: "/tournament/:id",
    element: <TournamentDetails />,
  },
  {
    id: 8,
    path: "/streams/:id",
    element: <StreamerDetails />,
  },
  {
    id: 9,
    path: "/auth",
    element: <Auth />,
  },
  {
    id: 10,
    path: "/auth/lost-password",
    element: <PasswordRepair />,
  },

  {
    id: 12,
    path: "*",
    element: <PageNotFound />,
  },
];

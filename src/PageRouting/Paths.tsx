import Home from "../pages/Home";
import Browse from "../pages/Browse";
import {RoutesType} from "../types";
export const Paths:RoutesType = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    id: 2,
    path: "/browse",
    element: <Browse />,
    title: "Browse",
  },
  {
    id: 3,
    path: "/tournament",
    element: <Browse />,
    title: "Tournament",
  },
  {
    id: 4,
    path: "/streams",
    element: <Browse />,
    title: "Streams",
  },
  {
    id: 5,
    path: "/contact",
    element: <Browse />,
    title: "Contact",
  },
];

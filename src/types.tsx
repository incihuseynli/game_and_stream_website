import { ReactNode } from "react";

// For Routes
export type RoutesType = Iroute[];
interface Iroute {
  id: string | number;
  path: string;
  element: JSX.Element;
  title?: string;
}
// For styles.ts
export interface IStyles {
  [key: string]: string;
}
// Children type inside Btn component
export interface IBtn {
  children: ReactNode;
  path: string;
}

// Section Head Component's Props
export interface ISHead {
  headTitle: string;
  title: string;
}

export interface IScrollProps {
  children: ReactNode;
}

export interface IHoc {
  children: ReactNode;
  secTitle: string;
}
export interface IChildren {
  children: ReactNode;
}

export interface IGame {
  id: string | number;
  title: string;
  thumbnail: string;
  publisher: string;
  game_url: string;
  video_link: string;
  genre: string;
  rate: number | string;
  age_rate: number | string;
  downloads: string;
  storage: number | string;
  content: string;
  smallImgs: nestedGames[];
  ratePer: string | number;
}
type nestedGames = {
  img:string;
  id?: string | number;
}
export interface ITodaysPick {
  id: string | number;
  title: string;
  thumbnail: string;
  game_url: string;
  ratePer: number | string;
  short_desc: string;
}
export interface GameDetailsAPIProps {
  children: (game: IGame | null) => React.ReactNode;
}
export interface GamesAPIProps {
  limit?: number;
  children: (games: IGame[]) => React.ReactNode;
}
export interface StreamsAPIProps {
  limit?: number;
  children: (streamers: IStreamers[]) => React.ReactNode;
}

export interface IUsers {
  id: string | number;
  username: string;
  email: string;
  image: string;
  password: string | number;
  birthDate: string;
  followers: string | number;
  following: string | number;
}

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type MouseEvent = React.MouseEvent<HTMLButtonElement>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface IDate {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface IStreamers {
  id:  number;
  username: string;
  image: string;
  followers: string | number;
  monthly_watchers: string | number;
  play_hours: string | number;
  stream_hours: string | number;
  rate: string | number;
  link: string;
  thumbnail: string;
  current_watchers: string | number;
  game_name: string;
  prev_streams: IPrevStreams[];
}
export interface IPrevStreams {
  id: string | number;
  game_name: string;
  watchers: string | number;
  thumbnail: string;
  stream_link: string;
}
export interface ITournaments {
  id: string | number;
  prize: string | number;
  title: string;
  status: string;
  place_count: string | number;
  content: string;
  quote: string;
  promo: string;
  sponsor: string;
  sponsor_logo: string;
  live_time: string;
  live_link: string;
  isOnline: boolean;
  top_three_players: ITop3[];
  endDate : string;
}
interface ITop3 {
  id: string | number;
  image: string;
  username: string;
  wins: string | number;
}

export interface IFollower {
  id: string | number;
  name: string;
  username: string;
  email: string;
  image: string;
  isVerified?: boolean;
  isFollowed: boolean;
}

export interface IStats {
  id: string | number;
  title: string;
  image: string;
  end: number;
}

export interface IAuthContext {
  isLogged: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}
export interface IContext {
  children: ReactNode;
}

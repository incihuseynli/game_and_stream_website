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
}
export interface GamesAPIProps {
  limit?: number;
  children: (games: IGame[]) => React.ReactNode;
}
export interface GameDetailsAPIProps {
  children: (game: IGame | null) => React.ReactNode;
}
export interface IUsers {
  id: string | number;
  username: string;
  email: string;
  birthDate: string;
  followers: string | number;
  following: string | number;
}

export type FormEvent = React.FormEvent<HTMLFormElement>
export type MouseEvent = React.MouseEvent<HTMLButtonElement>
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>


export interface IDate {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
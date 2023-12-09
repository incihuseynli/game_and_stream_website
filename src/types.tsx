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
  path : string;
}

// Section Head Component's Props 
export interface ISHead{
  headTitle : string;
  title : string
}

export interface IScrollProps {
  children: ReactNode;
}

export interface IHoc{
  children : ReactNode;
  secTitle : string;
}
export interface IChildren {
  children : ReactNode;
}
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
import { ReactNode } from "react";
export interface IBtn {
  children: ReactNode;
  path : string;
}


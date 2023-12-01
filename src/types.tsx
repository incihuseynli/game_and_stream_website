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

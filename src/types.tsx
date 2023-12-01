
export type RoutesType = Iroute[];

interface Iroute {
    id : string | number;
    path : string;
    element : JSX.Element;
    title?: string;
}
import { JSX } from "react";
import { IHoverIcon } from "./icon";

export interface INavbar {
    title: string;
    path: string;
    icons: ({ className }: IHoverIcon) => JSX.Element;
}

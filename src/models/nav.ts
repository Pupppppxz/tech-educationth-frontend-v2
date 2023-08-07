import { JSX } from "react";
import { INavbarIcon } from "./icon";

export interface INavbar {
    title: string;
    path: string;
    icons: ({ className }: INavbarIcon) => JSX.Element;
}

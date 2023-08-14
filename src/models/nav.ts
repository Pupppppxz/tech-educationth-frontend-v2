import { JSX } from "react";
import { IHoverIcon } from "./icon";
import { ILogo } from "./logo";

export interface INavbar {
    title: string;
    path: string;
    icons: ({ className }: IHoverIcon) => JSX.Element;
}

export interface IFooterUseFullLink {
    title: string;
    path: string;
}

export interface IFooterProduct {
    path: string;
    icon: ({ className }: ILogo) => JSX.Element;
}

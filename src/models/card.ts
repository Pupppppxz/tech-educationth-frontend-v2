import { JSX } from "react";
import { ILogo } from "./logo";

export interface IProduct {
    nameThai: string;
    nameEng: string;
    description: string;
    icon: ({ className }: ILogo) => JSX.Element;
}

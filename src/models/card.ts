import { JSX } from "react";
import { IHoverIcon } from "./icon";

export interface IProduct {
    nameThai: string;
    nameEng: string;
    description: string;
    id: string;
}

export interface IFlatCardProps {
    description: string;
    cardClassName: string;
    textClassName: string;
    iconClassName?: string;
    theme: "blue" | "amber";
    icon?: ({ className }: IHoverIcon) => JSX.Element | undefined;
}

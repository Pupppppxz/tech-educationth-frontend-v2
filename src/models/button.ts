import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    titleClassName: string;
    theme: "white" | "blue";
}

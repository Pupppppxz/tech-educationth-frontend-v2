import { JSX } from "react";
import { IHoverIcon } from "../icon";

export interface IRegisterStepperItem {
    title: string;
    description: string;
    icon: (props: IHoverIcon) => JSX.Element;
}

import { ClassValue } from "clsx";

export interface IIcon {
    className?: ClassValue | ClassValue[];
}

export interface IHoverIcon extends IIcon {
    hover?: boolean;
}

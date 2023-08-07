import { ClassValue } from "clsx";

export interface IIcon {
    className?: ClassValue | ClassValue[];
}

export interface INavbarIcon extends IIcon {
    hover?: boolean;
}

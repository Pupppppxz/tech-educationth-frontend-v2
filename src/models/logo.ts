import { ImageProps } from "next/image";

export interface ILogo extends Omit<ImageProps, "src" | "alt"> {}

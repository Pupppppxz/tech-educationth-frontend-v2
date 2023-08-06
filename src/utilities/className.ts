import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...className: ClassValue[]): string => twMerge(clsx(className));

export { cn };

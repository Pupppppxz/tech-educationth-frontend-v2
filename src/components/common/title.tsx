import { ClassValue } from "clsx";
import { ReactNode } from "react";
import { cn } from "@/utilities";

type TitleProps = {
    children: ReactNode;
    className?: ClassValue;
};

function Title({ children, className }: TitleProps) {
    return (
        <div className={cn("text-3xl font-bold", className)}>{children}</div>
    );
}

export default Title;

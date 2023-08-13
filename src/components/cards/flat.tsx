import { JSX } from "react";
import { IHoverIcon } from "@/models/icon";
import { cn } from "@/utilities";

interface Props {
    description: string;
    cardClassName: string;
    textClassName: string;
    iconClassName?: string;
    theme: "blue" | "amber";
    icon?: ({ className }: IHoverIcon) => JSX.Element | undefined;
}

function FlatCard({
    description,
    cardClassName,
    textClassName,
    theme,
    icon: Icon = undefined,
    iconClassName = undefined,
}: Props) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-xl p-4 text-xl font-semibold duration-1000",
                theme === "blue" && "bg-main-dark-blue text-white",
                theme === "amber" && "bg-main-amber text-main-dark-blue",
                cardClassName
            )}
        >
            <p
                className={cn(
                    "absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    theme === "amber" && "group-hover:text-white",
                    theme === "blue" && "group-hover:text-main-dark-blue",
                    textClassName
                )}
            >
                {Icon ? <Icon className={iconClassName} /> : null}
                {description}
            </p>
            <span
                className={cn(
                    "absolute top-0 left-0 h-full w-0 transition-all group-hover:w-full",
                    theme === "amber" && "group-hover:bg-main-dark-blue",
                    theme === "blue" && "group-hover:bg-main-amber"
                )}
            />
        </div>
    );
}

export default FlatCard;

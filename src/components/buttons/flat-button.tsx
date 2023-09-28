import { IButton } from "@/models/button";
import { cn } from "@/utilities";

function FlatButton({
    title,
    titleClassName = "",
    className = "",
    theme,
    ...props
}: IButton) {
    const themeBuilder = (t: string): string => {
        if (t === "white") {
            return "bg-white border-white";
        }

        if (t === "blue") {
            return "bg-main-dark-blue border-main-dark-blue";
        }

        return "";
    };

    const hoverBuilder = (t: string): string => {
        if (t === "white") {
            return "bg-main-dark-blue border-1 border-main-dark-blue";
        }

        if (t === "blue") {
            return "bg-white border-1 border-main-dark-blue";
        }

        return "";
    };

    const textBuilder = (t: string): string => {
        if (t === "white") {
            return "text-main-dark-blue group-hover:text-white";
        }

        if (t === "blue") {
            return "text-white group-hover:text-main-dark-blue";
        }

        return "";
    };

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={cn(
                "group relative px-8 py-2 border-2 rounded-full overflow-hidden",
                themeBuilder(theme),
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "absolute z-40 top-0 -left-[100%] w-full h-full transition-all group-hover:left-0",
                    hoverBuilder(theme)
                )}
            />
            <span
                className={cn(
                    "z-[51] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full",
                    textBuilder(theme),
                    titleClassName
                )}
            >
                {title}
            </span>
        </button>
    );
}

export default FlatButton;

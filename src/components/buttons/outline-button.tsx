import { IButton } from "@/models/button";
import { cn } from "@/utilities";

function OutlineButton({
    title,
    titleClassName,
    className = "",
    theme,
    ...props
}: IButton) {
    const themeBuilder = (t: string): string => {
        if (t === "white") {
            return "bg-white border-4 border-white";
        }

        return "";
    };

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={cn(
                "group relative px-8 py-2 border-2 rounded-full overflow-hidden",
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "absolute z-40 top-0 -left-[100%] w-full h-full transition-all group-hover:left-0",
                    themeBuilder(theme)
                )}
            />
            <span
                className={cn(
                    "z-[51] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full",
                    titleClassName
                )}
            >
                {title}
            </span>
        </button>
    );
}

export default OutlineButton;

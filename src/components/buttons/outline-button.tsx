import { IButton } from "@/models/button";
import { cn } from "@/utilities";

function OutlineButton({ title, className = "", ...props }: IButton) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={cn(
                "group relative px-8 py-2 border-2 rounded-full overflow-hidden",
                className
            )}
            {...props}
        >
            <div className="absolute z-[40] top-0 -left-[100%] w-full h-full bg-white transition-all group-hover:left-0" />
            <span className="z-[100] group-hover:text-main-amber">{title}</span>
        </button>
    );
}

export default OutlineButton;

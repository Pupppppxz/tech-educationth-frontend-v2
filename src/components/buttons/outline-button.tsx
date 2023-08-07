import { IButton } from "@/models/button";
import { cn } from "@/utilities";

function OutlineButton({ title, className = "", ...props }: IButton) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={cn("px-8 py-2 border-2 rounded-full", className)}
            {...props}
        >
            {title}
        </button>
    );
}

export default OutlineButton;

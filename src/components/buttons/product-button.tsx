import { IProductButton } from "@/models/button";
import { cn } from "@/utilities";

function ProductButton({
    title,
    titleClassName,
    className = "",
    isEven,
    ...props
}: IProductButton) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={cn("group relative px-8 py-2", className)}
            {...props}
        >
            <div
                className={cn(
                    "absolute top-0 left-0 rotate-3 group-hover:-rotate-3 w-full h-full rounded-full bg-white group-hover:bg-main-dark-blue transition-all",
                    isEven && "bg-main-dark-blue group-hover:bg-white"
                )}
            />
            <span
                className={cn(
                    `absolute z-[51] top-1/2 left-1/2 w-full h-full flex items-center justify-center 
                    rounded-full bg-orange-rose-gradient group-hover:bg-orange-rose-gradient-reverse
                    -translate-x-1/2 -translate-y-1/2`,
                    titleClassName
                )}
            >
                {title}
            </span>
        </button>
    );
}

export default ProductButton;

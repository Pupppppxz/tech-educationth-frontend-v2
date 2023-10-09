import React from "react";
import { CheckOutLineNoHoverIcon } from "@/components/icons";
import { cn } from "@/utilities";

type PasswordCheckListItemProps = {
    title: string;
    isCheck: boolean;
};

function PasswordCheckListItem({ title, isCheck }: PasswordCheckListItemProps) {
    return (
        <div className="flex items-center gap-x-2 px-2">
            <div
                className={cn(
                    "flex items-center justify-center w-5 h-5 p-[2px] rounded-full bg-[#2BE25E]",
                    !isCheck && "bg-[#FF512F]"
                )}
            >
                <CheckOutLineNoHoverIcon className="text-main-dark-blue" />
            </div>
            {title}
        </div>
    );
}

export default PasswordCheckListItem;

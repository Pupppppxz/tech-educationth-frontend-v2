"use client";

import { cn } from "@/utilities";
import { IHoverIcon } from "@/models/icon";

function SchoolNoHoverIcon({ className }: IHoverIcon) {
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("w-6 h-6", className)}
        >
            <path
                d="M0 11.25V21.875C0 22.2203 0.279687 22.5 0.625 22.5H3.75V10H1.25C0.559766 10 0 10.5598 0 11.25ZM14.0625 9.375H13.125V7.8125C13.125 7.63985 12.9852 7.5 12.8125 7.5H12.1875C12.0148 7.5 11.875 7.63985 11.875 7.8125V10.3125C11.875 10.4852 12.0148 10.625 12.1875 10.625H14.0625C14.2352 10.625 14.375 10.4852 14.375 10.3125V9.6875C14.375 9.51485 14.2352 9.375 14.0625 9.375ZM19.4434 6.87657L13.1934 2.70977C12.988 2.57298 12.7468 2.5 12.5 2.5C12.2532 2.5 12.012 2.57298 11.8066 2.70977L5.55664 6.87657C5.38545 6.9907 5.24508 7.14532 5.14797 7.32671C5.05087 7.50811 5.00004 7.71066 5 7.91641V22.5H10V16.875C10 16.5297 10.2797 16.25 10.625 16.25H14.375C14.7203 16.25 15 16.5297 15 16.875V22.5H20V7.9168C20 7.49883 19.791 7.10821 19.4434 6.87657ZM12.5 12.5C10.7742 12.5 9.375 11.1008 9.375 9.375C9.375 7.64922 10.7742 6.25 12.5 6.25C14.2258 6.25 15.625 7.64922 15.625 9.375C15.625 11.1008 14.2258 12.5 12.5 12.5ZM23.75 10H21.25V22.5H24.375C24.7203 22.5 25 22.2203 25 21.875V11.25C25 10.5598 24.4402 10 23.75 10Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SchoolNoHoverIcon;
"use client";

import { cn } from "@/utilities";
import { IHoverIcon } from "@/models/icon";

function LockNoHoverIcon({ className }: IHoverIcon) {
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            className={cn("w-6 h-6", className)}
        >
            <g clipPath="url(#clip0_19_17)">
                <path
                    d="M21.0938 12.5H8.98438V7.46582C8.98438 5.53223 10.5322 3.92578 12.4658 3.90625C14.4189 3.88672 16.0156 5.47364 16.0156 7.42188V8.20313C16.0156 8.85254 16.5381 9.375 17.1875 9.375H18.75C19.3994 9.375 19.9219 8.85254 19.9219 8.20313V7.42188C19.9219 3.32032 16.5771 -0.0146461 12.4756 2.29584e-06C8.37402 0.0146507 5.07812 3.39356 5.07812 7.49512V12.5H3.90625C2.6123 12.5 1.5625 13.5498 1.5625 14.8438V22.6563C1.5625 23.9502 2.6123 25 3.90625 25H21.0938C22.3877 25 23.4375 23.9502 23.4375 22.6563V14.8438C23.4375 13.5498 22.3877 12.5 21.0938 12.5ZM14.4531 19.9219C14.4531 21.001 13.5791 21.875 12.5 21.875C11.4209 21.875 10.5469 21.001 10.5469 19.9219V17.5781C10.5469 16.499 11.4209 15.625 12.5 15.625C13.5791 15.625 14.4531 16.499 14.4531 17.5781V19.9219Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_19_17">
                    <rect width="25" height="25" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default LockNoHoverIcon;

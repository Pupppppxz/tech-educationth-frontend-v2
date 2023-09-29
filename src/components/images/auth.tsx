"use client";

import Image from "next/image";
import { ILogo } from "@/models/logo";

function LoginImage(props: ILogo) {
    return (
        <Image
            src="/assets/images/auth/login-image-1.png"
            alt="home-page-landing-graphic"
            {...props}
        />
    );
}

export { LoginImage };

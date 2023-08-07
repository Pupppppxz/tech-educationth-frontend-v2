"use client";

import Image from "next/image";
import { ILogo } from "@/models/logo";

function TecheducationWhiteLogo(props: ILogo) {
    return (
        <Image
            src="/assets/icons/company/techeducation-logo-white.png"
            alt="techeducation-white-icons"
            {...props}
        />
    );
}

function TecheducationLogo(props: ILogo) {
    return (
        <Image
            src="/assets/icons/company/techeducation-logo.png"
            alt="techeducation-white-icons"
            {...props}
        />
    );
}

export { TecheducationWhiteLogo, TecheducationLogo };

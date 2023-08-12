"use client";

import Image from "next/image";
import { ILogo } from "@/models/logo";

function IMEDDAT(props: ILogo) {
    return (
        <Image
            src="/assets/images/product/IMMEDDAT.png"
            alt="immeddat logo"
            {...props}
        />
    );
}

function EDAT(props: ILogo) {
    return (
        <Image
            src="/assets/images/product/EDAT.png"
            alt="edat logo"
            {...props}
        />
    );
}

function AADAT(props: ILogo) {
    return (
        <Image
            src="/assets/images/product/AADAT.png"
            alt="aadat logo"
            {...props}
        />
    );
}

function NNODAT(props: ILogo) {
    return (
        <Image
            src="/assets/images/product/NNODAT.png"
            alt="nnodat logo"
            {...props}
        />
    );
}

export { IMEDDAT, EDAT, AADAT, NNODAT };

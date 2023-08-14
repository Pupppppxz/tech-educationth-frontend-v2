"use client";

import Image from "next/image";
import { ILogo, IProductLogo } from "@/models/logo";

function IMEDDAT(props: ILogo) {
    return (
        <Image
            src="/assets/images/product/IMEDDAT.png"
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

function PEDAT(props: ILogo) {
    return (
        <Image
            src="/assets/images/product/PEDAT.png"
            alt="pedat logo"
            {...props}
        />
    );
}

function BSDAT(props: ILogo) {
    return (
        <Image
            src="/assets/images/product/BSDAT.png"
            alt="bsdat logo"
            {...props}
        />
    );
}

function ProductLogo({ id, ...props }: IProductLogo) {
    if (id === "PD:IMEDDAT") return <IMEDDAT {...props} />;
    if (id === "PD:AADAT") return <AADAT {...props} />;
    if (id === "PD:NNODAT") return <NNODAT {...props} />;
    return <EDAT {...props} />;
}

export { IMEDDAT, EDAT, AADAT, NNODAT, ProductLogo, PEDAT, BSDAT };

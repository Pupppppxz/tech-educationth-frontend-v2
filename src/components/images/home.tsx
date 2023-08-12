"use client";

import Image from "next/image";
import { ILogo } from "@/models/logo";

function LandingImage(props: ILogo) {
    return (
        <Image
            src="/assets/images/home/image-landing.png"
            alt="home-page-landing-graphic"
            {...props}
        />
    );
}

function HomeProductImage(props: ILogo) {
    return (
        <Image
            src="/assets/images/home/home-product-bg.png"
            alt="home-page-landing-graphic"
            {...props}
        />
    );
}

export { LandingImage, HomeProductImage };

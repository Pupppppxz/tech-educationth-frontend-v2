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
            alt="home-page-product-graphic"
            {...props}
        />
    );
}

function HomeReportImage(props: ILogo) {
    return (
        <Image
            src="/assets/images/home/research-skill.png"
            alt="home-page-report-graphic"
            {...props}
        />
    );
}

function HomeInnovationImage(props: ILogo) {
    return (
        <Image
            src="/assets/images/home/checklist.png"
            alt="home-page-innovation-graphic"
            {...props}
        />
    );
}

function HomeFooterImage(props: ILogo) {
    return (
        <Image
            src="/assets/images/home/home-footer-bg.png"
            alt="home-page-footer-bg-graphic"
            {...props}
        />
    );
}

export {
    LandingImage,
    HomeProductImage,
    HomeReportImage,
    HomeInnovationImage,
    HomeFooterImage,
};

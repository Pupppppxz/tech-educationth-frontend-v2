"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import HomeParticles from "@/components/particles/home-particles";
import { LandingImage } from "@/components/images/home";

function Landing() {
    const t = useTranslations("HOME.LANDING");

    return (
        <div className="lg:box-screen-section relative flex flex-col bg-main-dark-blue">
            <div className="container z-40 mx-auto flex-1 h-full flex flex-col-reverse pt-24 lg:pt-0 lg:grid lg:grid-cols-[1fr_1.4fr]">
                <div className="flex flex-col justify-center gap-y-6 w-full h-fit lg:h-full p-6 pb-10 md:pb-4 lg:pb-0 md:p-4 lg:p-0">
                    <h3 className="text-main-amber text-lg md:text-2xl">
                        {t("testing-boundless")}
                    </h3>
                    <h1 className="text-4xl lg:text-5xl leading-snug w-full lg:w-5/6">
                        {t("testing-innovation")}
                    </h1>
                    <div className="hidden sm:grid sm:grid-cols-[2fr_1fr] w-full md:w-11/12">
                        <input
                            type="text"
                            placeholder={t("ssn")}
                            className="bg-white text-black px-4 py-2 rounded-tl-lg rounded-bl-lg focus:outline-none"
                        />
                        <button
                            type="button"
                            className="bg-orange-rose-gradient rounded-tr-lg rounded-br-lg"
                        >
                            {t("get-started")}
                        </button>
                    </div>
                    <Link href="/login" className="flex sm:hidden">
                        <button
                            type="button"
                            className="w-full py-2 text-lg md:py-0 md:text-base bg-orange-rose-gradient rounded-tl-lg rounded-bl-lg md:rounded-tl-none md:rounded-bl-none rounded-tr-lg rounded-br-lg"
                        >
                            {t("get-started")}
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <LandingImage
                        className="w-8/12 lg:w-10/12 object-contain"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            <HomeParticles />
        </div>
    );
}

export default Landing;

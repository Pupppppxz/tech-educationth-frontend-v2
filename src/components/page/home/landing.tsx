"use client";

import { useTranslations } from "next-intl";
import HomeParticles from "@/components/particles/home-particles";
import { LandingImage } from "@/components/images/home";

function Landing() {
    const t = useTranslations("HOME.LANDING");

    return (
        <div className="box-screen-section relative flex flex-col bg-main-dark-blue">
            <div className="container z-40 mx-auto flex-1 h-full grid grid-cols-[1fr_1.4fr]">
                <div className="flex flex-col justify-center gap-y-6 h-full">
                    <h3 className="text-main-amber text-2xl">
                        {t("testing-boundless")}
                    </h3>
                    <h1 className="text-5xl leading-snug w-5/6">
                        {t("testing-innovation")}
                    </h1>
                    <div className="grid grid-cols-[2fr_1fr] w-10/12">
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
                </div>
                <div className="flex flex-col justify-center items-center">
                    <LandingImage
                        className="w-10/12 object-contain"
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

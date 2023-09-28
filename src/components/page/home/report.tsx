"use client";

import { useTranslations } from "next-intl";
import { HomeReportImage } from "@/components/images/home";
import { StarNoHoverIcon } from "@/components/icons";
import { FlatCard } from "@/components/cards";

function Report() {
    const t = useTranslations("HOME.REPORT");

    return (
        <div className="lg:box-screen-section flex items-center">
            <div className="container mx-auto w-full h-full flex flex-col items-center lg:grid lg:grid-cols-2 gap-x-4 py-16 md:py-12 lg:py-0">
                <div className="flex justify-center lg:justify-end">
                    <HomeReportImage
                        className="object-contain w-10/12"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="w-full flex flex-col justify-center md:grid md:grid-cols-2 lg:flex lg:flex-col gap-y-6 gap-x-6 px-6 mt-4 lg:mt-0">
                    <div className="w-full flex gap-x-4 items-center justify-center lg:justify-start md:col-span-2 text-main-dark-blue">
                        <StarNoHoverIcon />
                        <h1 className="text-2xl md:text-3xl font-bold">
                            {t("topic")}
                        </h1>
                    </div>
                    <FlatCard
                        description={t("critical")}
                        cardClassName="w-full lg:w-10/12 rounded-3xl h-56 lg:h-44 xl:h-40 cursor-pointer shadow-main-2"
                        textClassName="text-center text-lg md:text-xl"
                        theme="blue"
                    />
                    <FlatCard
                        description={t("innovation")}
                        cardClassName="w-full lg:w-10/12 rounded-3xl h-56 lg:h-44 xl:h-40 cursor-pointer shadow-main-2"
                        textClassName="text-center text-lg md:text-xl"
                        theme="amber"
                    />
                </div>
            </div>
        </div>
    );
}

export default Report;

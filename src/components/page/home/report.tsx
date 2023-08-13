"use client";

import { useTranslations } from "next-intl";
import { HomeReportImage } from "@/components/images/home";
import { StarNoHoverIcon } from "@/components/icons";
import { FlatCard } from "@/components/cards";

function Report() {
    const t = useTranslations("HOME.REPORT");

    return (
        <div className="box-screen-section flex items-center">
            <div className="container mx-auto w-full h-full grid grid-cols-2">
                <div className="flex justify-end w-10/12">
                    <HomeReportImage
                        className="object-contain"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="flex flex-col justify-center gap-y-6 px-6">
                    <div className="flex gap-x-4 items-center text-main-dark-blue">
                        <StarNoHoverIcon />
                        <h1 className="text-3xl font-bold">{t("topic")}</h1>
                    </div>
                    <FlatCard
                        description={t("critical")}
                        cardClassName="w-10/12 rounded-3xl h-36 cursor-pointer"
                        textClassName="text-center"
                        theme="blue"
                    />
                    <FlatCard
                        description={t("innovation")}
                        cardClassName="w-10/12 rounded-3xl h-36 cursor-pointer"
                        textClassName="text-center"
                        theme="amber"
                    />
                </div>
            </div>
        </div>
    );
}

export default Report;

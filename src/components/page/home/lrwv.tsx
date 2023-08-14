"use client";

import { useTranslations } from "next-intl";
import { FlatCard } from "@/components/cards";
import { LRWVList } from "@/constants/home";
import { IFlatCardProps } from "@/models/card";
import { HomeInnovationImage } from "@/components/images/home";

function LRWV() {
    const t = useTranslations("HOME.LRWV");

    return (
        <div className="box-screen-section bg-main-dark-blue">
            <div className="container mx-auto grid grid-cols-2 h-full">
                <div className="flex flex-col justify-center h-full gap-y-4">
                    <h1 className="w-9/12 mb-4 text-3xl font-bold text-center text-main-amber">
                        {t("topic")}
                    </h1>
                    {LRWVList?.map((item: IFlatCardProps) => (
                        <FlatCard
                            key={`lrwn-item-${item.description}`}
                            description={t(item.description)}
                            cardClassName={item.cardClassName}
                            textClassName={item.textClassName}
                            theme={item.theme}
                            icon={item.icon}
                            iconClassName={item.iconClassName}
                        />
                    ))}
                </div>
                <div className="flex flex-col justify-center h-full p-8">
                    <HomeInnovationImage
                        width={1000}
                        height={1000}
                        className="object-contain p-6 w-8/12 bg-white rounded-2xl aspect-square"
                    />
                </div>
            </div>
        </div>
    );
}

export default LRWV;

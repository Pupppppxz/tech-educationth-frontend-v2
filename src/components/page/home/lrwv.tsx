"use client";

import { useTranslations } from "next-intl";
import { FlatCard } from "@/components/cards";

function LRWV() {
    const t = useTranslations("HOME.LRWV");

    return (
        <div className="overflow-hidden w-[100dvw] h-[100dvh] bg-main-dark-blue">
            <div className="container mx-auto grid grid-cols-2">
                <div>
                    <h1 className="w-9/12 text-3xl font-bold text-center text-main-amber">
                        {t("topic")}
                    </h1>
                    <FlatCard
                        description={t("reading")}
                        cardClassName=""
                        textClassName=""
                        theme="blue"
                    />
                </div>
                <div />
            </div>
        </div>
    );
}

export default LRWV;

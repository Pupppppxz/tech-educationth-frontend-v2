"use client";

import { useTranslations } from "next-intl";
import { BookColorIcon } from "@/components/icons";

function Innovation() {
    const t = useTranslations("HOME.INNOVATION");

    return (
        <div className="box-screen-section flex items-center">
            <div
                className={`container mx-auto w-full h-fit flex flex-col gap-y-8 justify-center 
                items-center p-16 bg-main-dark-blue rounded-3xl`}
            >
                <BookColorIcon />
                <h3 className="text-4xl font-bold">{t("title")}</h3>
                <h1 className="text-6xl font-bold text-main-amber">
                    {t("topic")}
                </h1>
                <div className="w-8/12 h-1 bg-white" />
                <p className="text-xl text-center">{t("description")}</p>
                <p className="text-6xl -mt-4">...</p>
            </div>
        </div>
    );
}

export default Innovation;

"use client";

import { useTranslations } from "next-intl";
import { BookColorIcon } from "@/components/icons";

function Innovation() {
    const t = useTranslations("HOME.INNOVATION");

    return (
        <div className="md:box-screen-section flex items-center p-4 md:p-0">
            <div
                className="container mx-auto w-full h-fit flex flex-col gap-y-8 justify-center 
                items-center p-4 py-10 lg:py-16 md:p-8 lg:p-16 bg-main-dark-blue rounded-3xl shadow-main-1"
            >
                <BookColorIcon />
                <h3 className="text-3xl md:text-4xl font-bold text-center">
                    {t("title")}
                </h3>
                <h1 className=" text-5xl md:text-6xl font-bold text-main-amber text-center">
                    {t("topic")}
                </h1>
                <div className="w-8/12 h-1 bg-white" />
                <p className="text-lg md:text-xl text-center">
                    {t("description")}
                </p>
                <p className="text-6xl -mt-4">...</p>
            </div>
        </div>
    );
}

export default Innovation;

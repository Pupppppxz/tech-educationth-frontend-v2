"use client";

import { useTranslations } from "next-intl";
import { Title } from "@/components/common";
import RegisterStepper from "@/components/page/register/stepper";

function Register() {
    const t = useTranslations("AUTH.REGISTER");
    return (
        <div className="w-full h-full flex flex-col p-10 text-black">
            <Title>{t("title")}</Title>
            <p className="mt-2 text-xl text-[#777777]">{t("description")}</p>
            <div className="h-[1px] w-full mt-4 bg-main-dark-blue" />
            <div className="grid grid-cols-[320px_1fr] h-full">
                <RegisterStepper />
                <div />
            </div>
        </div>
    );
}

export default Register;

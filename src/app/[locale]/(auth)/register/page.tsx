"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Title } from "@/components/common";
import RegisterStepper from "@/components/page/register/stepper";
import {
    RegisterAuthorization,
    RegisterCountry,
    RegisterConfirm,
    RegisterContact,
    RegisterPersonal,
    RegisterSchool,
} from "@/components/page/register";

function Register() {
    const t = useTranslations("AUTH.REGISTER");
    const [registerStep] = useState<number>(5);
    return (
        <div className="w-full h-full flex flex-col p-6 md:p-10 text-black">
            <Title className="text-2xl md:text-3xl">{t("title")}</Title>
            <p className="mt-2 text-lg md:text-xl text-[#777777]">
                {t("description")}
            </p>
            <div className="h-[1px] w-full mt-4 bg-main-dark-blue" />
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] h-full">
                <RegisterStepper />
                {registerStep === 0 ? <RegisterCountry /> : null}
                {registerStep === 1 ? <RegisterAuthorization /> : null}
                {registerStep === 2 ? <RegisterSchool /> : null}
                {registerStep === 3 ? <RegisterPersonal /> : null}
                {registerStep === 4 ? <RegisterContact /> : null}
                {registerStep === 5 ? <RegisterConfirm /> : null}
            </div>
        </div>
    );
}

export default Register;

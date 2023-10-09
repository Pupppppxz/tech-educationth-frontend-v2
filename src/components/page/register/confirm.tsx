"use client";

import { useTranslations } from "next-intl";
import { FlatButton } from "@/components/buttons";
import RegisterHeader from "./header";

function RegisterConfirm() {
    const t = useTranslations("AUTH.REGISTER");
    return (
        <div className="w-full h-full flex flex-col justify-between items-center gap-x-2 md:gap-x-6 px-0 py-6 md:p-6 overflow-y-auto">
            <RegisterHeader
                stepName={t("steps.step6")}
                title={t("confirmation.title")}
            />
            <div className="flex items-center justify-center h-[75%] gap-x-2 sm:gap-x-6">
                <input
                    type="text"
                    className="w-10 h-10 bg-white border text-xl text-center border-main-gray-2 rounded-lg focus:outline-none"
                    maxLength={1}
                />
                <input
                    type="text"
                    className="w-10 h-10 bg-white border text-xl text-center border-main-gray-2 rounded-lg focus:outline-none"
                    maxLength={1}
                />
                <input
                    type="text"
                    className="w-10 h-10 bg-white border text-xl text-center border-main-gray-2 rounded-lg focus:outline-none"
                    maxLength={1}
                />
                <input
                    type="text"
                    className="w-10 h-10 bg-white border text-xl text-center border-main-gray-2 rounded-lg focus:outline-none"
                    maxLength={1}
                />
                <input
                    type="text"
                    className="w-10 h-10 bg-white border text-xl text-center border-main-gray-2 rounded-lg focus:outline-none"
                    maxLength={1}
                />
                <input
                    type="text"
                    className="w-10 h-10 bg-white border text-xl text-center border-main-gray-2 rounded-lg focus:outline-none"
                    maxLength={1}
                />
            </div>
            <div className="flex justify-between items-center w-full">
                <p>ไม่ได้รับรหัส OTP ?</p>
                <FlatButton
                    type="submit"
                    title="ยืนยัน"
                    className="w-24 h-10 shadow-main-3"
                    titleClassName=""
                    theme="blue"
                />
            </div>
        </div>
    );
}

export default RegisterConfirm;

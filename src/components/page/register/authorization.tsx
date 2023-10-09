"use client";

import { useTranslations } from "next-intl";
import { Form, Formik } from "formik";
import { InputSelect, InputField } from "@/components/form";
import { FlatButton } from "@/components/buttons";
import { selectVerificationType } from "@/constants/register";
import RegisterHeader from "./header";

function RegisterAuthorization() {
    const t = useTranslations("AUTH.REGISTER");
    return (
        <div className="w-full h-full px-0 py-6 md:p-6 overflow-y-auto">
            <RegisterHeader
                stepName={t("steps.step2")}
                title={t("authentication.title")}
            />
            <Formik
                initialValues={{ SSNType: "", SSN: "" }}
                onSubmit={() => {}}
            >
                <Form className="w-full flex flex-col gap-y-4 mt-6">
                    <InputSelect
                        name="SSNType"
                        id="SSNType"
                        label="วิธีการยืนยันตัวตน"
                        placeholder="-- เลือกวิธีการยืนยันตัวตน --"
                        options={selectVerificationType}
                    />
                    <InputField
                        name="SSN"
                        id="SSN"
                        label="หมายเลขบัตรประจำตัวประชาชน / หมายเลขหนังสือเดินทาง"
                    />
                    <div className="w-full flex justify-end gap-x-3 mt-2">
                        <FlatButton
                            type="submit"
                            title="ย้อนกลับ"
                            className="w-28 h-10 shadow-main-3"
                            titleClassName=""
                            theme="white"
                        />
                        <FlatButton
                            type="submit"
                            title="ถัดไป"
                            className="w-24 h-10 shadow-main-3"
                            titleClassName=""
                            theme="blue"
                        />
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default RegisterAuthorization;

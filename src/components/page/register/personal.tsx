"use client";

import { useTranslations } from "next-intl";
import { Formik, Form } from "formik";
import { FlatButton } from "@/components/buttons";
import { InputSelect, InputField } from "@/components/form";
import { selectSchoolLabels } from "@/constants/register";
import RegisterHeader from "./header";

function RegisterPersonal() {
    const t = useTranslations("AUTH.REGISTER");
    return (
        <div className="relative overflow-hidden w-full h-[85%] md:h-full px-0 py-6 md:p-6 overflow-y-auto">
            <RegisterHeader
                stepName={t("steps.step4")}
                title={t("personalInfo.title")}
            />
            <Formik
                initialValues={{ SSNType: "", SSN: "" }}
                onSubmit={() => {}}
            >
                <Form className="w-full flex flex-col md:grid md:grid-cols-2 gap-y-4 gap-x-6 md:items-end mt-6">
                    <InputSelect
                        name="titleName"
                        id="titleName"
                        label="คำนำหน้า"
                        placeholder="-- โปรดเลือกคำนำหน้า --"
                        options={selectSchoolLabels}
                    />
                    <InputField
                        name="bod"
                        id="bod"
                        label="เดือน/วัน/ปีเกิด (ค.ศ.)"
                        type="date"
                    />
                    <InputField
                        name="nameThai"
                        id="nameThai"
                        label="ชื่อ (ภาษาไทย) "
                    />
                    <InputField
                        name="surnameThai"
                        id="surnameThai"
                        label="นามสกุล (ภาษาไทย)"
                    />
                    <InputField
                        name="nameEng"
                        id="nameEng"
                        label="ชื่อ (ภาษาอังกฤษ)"
                    />
                    <InputField
                        name="surnameEng"
                        id="surnameEng"
                        label="นามสกุล (ภาษาอังกฤษ)"
                    />
                    <div className="w-full col-span-2 flex justify-end gap-x-3 mt-2">
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

export default RegisterPersonal;

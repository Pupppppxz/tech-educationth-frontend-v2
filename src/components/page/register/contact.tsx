"use client";

import { useTranslations } from "next-intl";
import { Formik, Form } from "formik";
import { FlatButton } from "@/components/buttons";
import { InputField } from "@/components/form";
import { passwordCheckList } from "@/constants/register";
import RegisterHeader from "./header";
import PasswordCheckListItem from "./password-check-item";

function RegisterContact() {
    const t = useTranslations("AUTH.REGISTER");
    return (
        <div className="relative overflow-hidden w-full h-[85%] md:h-full px-0 py-6 md:p-6 overflow-y-auto">
            <RegisterHeader
                stepName={t("steps.step5")}
                title={t("contact.title")}
            />
            <Formik
                initialValues={{ SSNType: "", SSN: "" }}
                onSubmit={() => {}}
            >
                <Form className="w-full flex flex-col md:grid md:grid-cols-2 gap-y-4 gap-x-6 md:items-end mt-6">
                    <InputField name="bod" id="bod" label="หมายเลขโทรศัพท์" />
                    <InputField name="nameThai" id="nameThai" label="อีเมล" />
                    <div className="flex flex-col gap-y-4">
                        <InputField
                            name="surnameThai"
                            id="surnameThai"
                            label="รหัสผ่าน"
                        />
                        <InputField
                            name="nameEng"
                            id="nameEng"
                            label="ยืนยันรหัสผ่าน"
                        />
                    </div>
                    <div className="flex flex-col justify-between w-full h-full p-3 rounded-xl text-white bg-main-dark-blue">
                        {passwordCheckList?.map((item, index) => (
                            <PasswordCheckListItem
                                key={`password-check-list-${item}`}
                                title={item}
                                isCheck={index % 2 === 0}
                            />
                        ))}
                    </div>
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

export default RegisterContact;

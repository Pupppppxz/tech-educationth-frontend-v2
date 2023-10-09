"use client";

import { useTranslations } from "next-intl";
import { Form, Formik } from "formik";
import { InputField, InputSelect } from "@/components/form";
import { FlatButton } from "@/components/buttons";
import { selectSchoolLabels } from "@/constants/register";
import RegisterHeader from "./header";

function RegisterSchool() {
    const t = useTranslations("AUTH.REGISTER");
    return (
        <div className="relative overflow-hidden w-full h-[85%] md:h-full px-0 py-6 md:p-6 overflow-y-auto">
            <RegisterHeader
                stepName={t("steps.step3")}
                title={t("school.title")}
            />
            <Formik
                initialValues={{ SSNType: "", SSN: "" }}
                onSubmit={() => {}}
            >
                <Form className="w-full flex flex-col gap-y-4 mt-6">
                    <InputSelect
                        name="SSNType"
                        id="SSNType"
                        label="โรงเรียนที่กำลังศึกษาอยู่"
                        placeholder="-- โปรดเลือกโรงเรียนที่กำลังศึกษาอยู่ --"
                        options={selectSchoolLabels}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-y-4 gap-x-6 items-end">
                        <InputSelect
                            name="studyPlan"
                            id="studyPlan"
                            label="แผนการเรียน"
                            placeholder="-- โปรดเลือกแผนการเรียนของท่าน --"
                            options={selectSchoolLabels}
                        />
                        <FlatButton
                            type="submit"
                            title="ไม่พบแผนการเรียน ?"
                            className="w-full h-[52px] rounded-xl shadow-main-3 mt-6 md:mt-0"
                            titleClassName=""
                            theme="blue"
                        />
                        <InputSelect
                            name="level"
                            id="level"
                            label="ระดับชั้นการศึกษา"
                            placeholder="-- โปรดเลือกชั้นเรียนของท่าน --"
                            options={selectSchoolLabels}
                        />
                        <InputField name="room" id="room" label="ห้องเรียน" />
                    </div>
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

export default RegisterSchool;

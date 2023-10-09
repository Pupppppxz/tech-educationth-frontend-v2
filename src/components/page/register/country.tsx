"use client";

import { useTranslations } from "next-intl";
import { Form, Formik } from "formik";
import { InputSelect } from "@/components/form";
import { FlatButton } from "@/components/buttons";
import { selectCountryLabels } from "@/constants/register";
import RegisterHeader from "./header";

function RegisterCountry() {
    const t = useTranslations("AUTH.REGISTER");
    return (
        <div className="w-full h-full px-0 py-6 md:p-6 overflow-y-auto">
            <RegisterHeader
                stepName={t("steps.step1")}
                title={t("country.title")}
            />
            <Formik initialValues={{ country: "" }} onSubmit={() => {}}>
                <Form className="w-full flex flex-col gap-y-4 mt-6">
                    <InputSelect
                        name="country"
                        id="country"
                        placeholder="-- โปรดเลือกประเทศที่กำลังศึกษาอยู่ --"
                        options={selectCountryLabels}
                    />
                    <div className="w-full flex justify-end mt-2">
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

export default RegisterCountry;

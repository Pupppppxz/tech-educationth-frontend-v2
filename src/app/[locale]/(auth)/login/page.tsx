"use client";

import { Formik } from "formik";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoginImage } from "@/components/images/auth";
import { InputIconField } from "@/components/form";
import { PasswordIcon, UserIcon } from "@/components/icons";
import { Title } from "@/components/common";
import { FlatButton } from "@/components/buttons";

function Login() {
    const t = useTranslations("AUTH.LOGIN");
    const router = useRouter();

    return (
        <div className="relative w-full h-full grid grid-cols-2 p-20">
            <div className="flex items-center justify-center">
                <LoginImage width={1000} height={1000} className="w-9/12" />
            </div>
            <div className="flex flex-col justify-center gap-y-3 text-black">
                <Title>{t("title")}</Title>
                <h3>{t("description")}</h3>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    onSubmit={values => console.log({ values })}
                    onReset={() => {
                        router.push("/forgot-password");
                    }}
                >
                    <div className="w-full flex flex-col gap-y-4 mt-6">
                        <InputIconField
                            id="login-username"
                            name="username"
                            className="text-lg"
                            placeholder={t("username")}
                            icon={UserIcon}
                            iconClassName="text-main-dark-blue"
                        />
                        <InputIconField
                            id="login-password"
                            name="password"
                            className="text-lg"
                            placeholder={t("password")}
                            icon={PasswordIcon}
                            iconClassName="text-main-dark-blue"
                        />
                        <div className="flex gap-x-4 mt-4">
                            <FlatButton
                                type="submit"
                                title={t("loginButton")}
                                className="w-36 h-12"
                                titleClassName=""
                                theme="blue"
                            />
                            <FlatButton
                                type="reset"
                                title={t("forgotPasswordButton")}
                                className="w-44 h-12 border-main-dark-blue"
                                titleClassName=""
                                theme="white"
                            />
                        </div>
                    </div>
                </Formik>
            </div>
            <Link
                href="/register"
                className="absolute top-12 right-20 text-main-dark-blue"
            >
                {t("registerButton")}
            </Link>
        </div>
    );
}

export default Login;

"use client";

import { Form, Formik } from "formik";
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
        <div className="relative w-full h-full flex flex-col lg:grid lg:grid-cols-2 p-4 md:p-12 lg:p-20">
            <div className="hidden lg:flex items-center justify-center">
                <LoginImage width={1000} height={1000} className="w-9/12" />
            </div>
            <div className="flex flex-col justify-center h-full w-full gap-y-3 text-black">
                <Title className="text-center lg:text-start">
                    {t("title")}
                </Title>
                <h3 className="text-center lg:text-start">
                    {t("description")}
                </h3>
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
                    <Form className="w-full flex flex-col gap-y-4 mt-6">
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
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <FlatButton
                                type="submit"
                                title={t("loginButton")}
                                className="w-full md:w-36 h-12"
                                titleClassName=""
                                theme="blue"
                            />
                            <FlatButton
                                type="reset"
                                title={t("forgotPasswordButton")}
                                className="w-full md:w-44 h-12 border-main-dark-blue"
                                titleClassName=""
                                theme="white"
                            />
                        </div>
                        <Link
                            href="/register"
                            className="md:absolute md:top-8 md:right-12 lg:top-12 lg:right-20 text-center text-main-dark-blue"
                        >
                            {t("registerButton")}
                        </Link>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Login;

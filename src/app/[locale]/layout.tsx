"use client";

import { NextIntlClientProvider } from "next-intl";
import { Chakra_Petch as ChakraPetch } from "next/font/google";
import { ReactNode } from "react";
import { getMessages } from "@/utilities";
import { Providers } from "@/components/theme";
import { AppHead } from "@/components/common";
import "./globals.css";

type Types = {
    children: ReactNode;
    params: { locale: string };
};

const chakraPetch = ChakraPetch({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--application-font",
});

const LocaleLayout = async ({ children, params: { locale } }: Types) => {
    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
            <body
                className={`${chakraPetch.variable} font-application bg-white dark:bg-main-gray`}
            >
                <AppHead />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Providers>{children}</Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default LocaleLayout;

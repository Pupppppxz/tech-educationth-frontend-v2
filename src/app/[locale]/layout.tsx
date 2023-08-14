"use client";

import { NextIntlClientProvider } from "next-intl";
import { Chakra_Petch as ChakraPetch } from "next/font/google";
import { PropsWithChildren } from "react";
import { getMessages } from "@/utilities";
import { Providers } from "@/components/theme";
import { AppHead } from "@/components/common";
import "./globals.css";

type Types = PropsWithChildren & {
    params: { locale: string };
};

const chakraPetch = ChakraPetch({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--application-font",
});

const LocaleLayout = async ({
    children = undefined,
    params: { locale = "th" },
}: Types) => {
    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
            <body
                className={`${chakraPetch.variable} font-application bg-black dark:bg-main-gray m-0 p-0`}
            >
                <AppHead />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Providers>{children || null}</Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default LocaleLayout;

"use client";

import { NextIntlClientProvider } from "next-intl";
import { Chakra_Petch as ChakraPetch } from "next/font/google";
import { PropsWithChildren } from "react";
import { getMessages } from "@/utilities";
import { Providers } from "@/components/theme";
import { AppHead } from "@/components/common";

import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/grid";

type LocaleLayoutProps = PropsWithChildren & {
    params: { locale: string };
};

const chakraPetch = ChakraPetch({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--application-font",
});

const LocaleLayout = async ({
    children,
    params: { locale = "th" },
}: LocaleLayoutProps) => {
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

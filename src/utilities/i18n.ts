import { notFound } from "next/navigation";
import { locales } from "@/constants/i18n";

const generateStaticParams = async () =>
    locales.map(locale => {
        return {
            locale,
        };
    });

const getMessages = async (locale: string) => {
    try {
        return (await import(`../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return null;
};

export { generateStaticParams, getMessages };

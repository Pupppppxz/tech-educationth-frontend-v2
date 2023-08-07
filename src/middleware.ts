import createMiddleware from "next-intl/middleware";
import { locales } from "./constants/i18n";

export default createMiddleware({
    locales,
    defaultLocale: "th",
});

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};

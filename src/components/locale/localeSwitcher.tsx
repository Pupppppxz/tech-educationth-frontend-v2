"use client";

import { randomUUID } from "crypto";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";
import { locales } from "@/constants/i18n";
import { cn } from "@/utilities";

function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const id = `language-switcher-${randomUUID()}`;

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <label
            htmlFor={id}
            className={cn("relative text-gray-400", {
                "transition-opacity [&:disabled]:opacity-30": isPending,
            })}
        >
            <select
                id={id}
                className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
                defaultValue={locale}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {locales.map(cur => (
                    <option key={cur} value={cur}>
                        {cur}
                    </option>
                ))}
            </select>
            <span className="pointer-events-none absolute top-[8px] right-2">
                ⌄
            </span>
        </label>
    );
}

export default LocaleSwitcher;

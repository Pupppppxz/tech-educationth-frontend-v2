import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { navbarItems } from "@/constants/nav";
import { INavbar } from "@/models/nav";
import { TecheducationWhiteLogo } from "../logos";
import { OutlineButton } from "../buttons";

function Navbar() {
    const t = useTranslations("NAVBAR");

    return (
        <div className="fixed w-full z-50">
            <div className="container mx-auto">
                <div className="flex w-auto justify-between items-center h-navbar px-3 text-black">
                    <TecheducationWhiteLogo
                        width={500}
                        height={500}
                        className="w-auto h-[50px] object-contain cursor-pointer"
                    />
                    <ul className="flex items-center gap-x-10 text-xl">
                        {navbarItems?.map((nav: INavbar) => (
                            <Link
                                className="group relative"
                                key={nav.title}
                                href={nav.path}
                            >
                                <li className="w-fit text-white cursor-pointer">
                                    {t(nav.title)}
                                </li>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <OutlineButton
                            title={t("loginButton")}
                            className="text-white group-hover:text-blue-600"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

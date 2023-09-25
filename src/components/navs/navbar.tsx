"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { navbarItems } from "@/constants/nav";
import { INavbar } from "@/models/nav";
import { cn } from "@/utilities";
import { CloseIcon, HamburgerIcon } from "@/components/icons";
import { TecheducationWhiteLogo } from "@/components/logos";
import { OutlineButton } from "@/components/buttons";

function Navbar() {
    const t = useTranslations("NAVBAR");
    const [colorChange, setColorChange] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onToggleNavbar = () => {
        setIsOpen(prev => !prev);
    };

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return (
        <div
            className={cn(
                "fixed w-full z-50",
                colorChange && "bg-main-dark-blue shadow-main-1",
                isOpen && "h-fit overflow-hidden bg-blue-dark-light-dark"
            )}
        >
            <div className="container mx-auto">
                <div
                    className={cn(
                        "flex w-auto justify-between items-center h-navbar px-3 text-black transition-all duration-500 ease-in-out",
                        isOpen &&
                            "flex-col justify-center !h-[100dvh] gap-y-16 z-[52]"
                    )}
                >
                    <TecheducationWhiteLogo
                        width={500}
                        height={500}
                        className={cn(
                            "w-auto h-10 md:h-12 object-contain cursor-pointer",
                            isOpen && "h-12"
                        )}
                    />
                    <ul
                        className={cn(
                            "hidden lg:flex items-center gap-x-10 text-xl",
                            isOpen && "flex flex-col gap-y-10"
                        )}
                    >
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
                            className="w-36 h-12"
                            titleClassName="text-white group-hover:text-blue-600"
                            theme="white"
                        />
                    </ul>
                    <div
                        role="none"
                        className={cn(
                            "w-fit h-fit",
                            isOpen && "absolute top-6 right-4"
                        )}
                        onClick={() => onToggleNavbar()}
                    >
                        {isOpen ? (
                            <CloseIcon className="text-white cursor-pointer" />
                        ) : (
                            <HamburgerIcon className="text-white cursor-pointer" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { navbarItems } from "@/constants/nav";
import { INavbar } from "@/models/nav";
import { cn } from "@/utilities";
import { CloseIcon, HamburgerIcon } from "@/components/icons";
import { TecheducationLogo, TecheducationWhiteLogo } from "@/components/logos";
import { FlatButton } from "@/components/buttons";

function AuthNavbar() {
    const t = useTranslations("NAVBAR");
    const router = useRouter();
    const [colorChange, setColorChange] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onToggleNavbar = () => {
        setIsOpen(prev => !prev);
    };

    const onLoginButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        router.push("/login");
    };

    const changeNavbarColor = () => {
        if (typeof window !== "undefined") {
            if (window?.scrollY >= 80) {
                setColorChange(true);
            } else {
                setColorChange(false);
            }
        }
    };

    if (typeof window !== "undefined")
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
                        "flex w-auto justify-between items-center h-navbar px-3 text-black transition-all duration-700 ease-in-out",
                        isOpen &&
                            "flex-col justify-center !h-[100dvh] gap-y-16 z-[52]"
                    )}
                >
                    <TecheducationLogo
                        width={500}
                        height={500}
                        className={cn(
                            "w-auto h-10 md:h-12 object-contain cursor-pointer",
                            isOpen && "hidden"
                        )}
                    />
                    <TecheducationWhiteLogo
                        width={500}
                        height={500}
                        className={cn(
                            "w-auto h-12 object-contain cursor-pointer",
                            !isOpen && "hidden"
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
                                <li
                                    className={cn(
                                        "w-fit text-main-dark-blue cursor-pointer",
                                        isOpen && "text-white"
                                    )}
                                >
                                    {t(nav.title)}
                                </li>
                                <span
                                    className={cn(
                                        "absolute -bottom-1 left-0 w-0 h-[2px] bg-main-dark-blue transition-all duration-700 group-hover:w-full",
                                        isOpen && "bg-white"
                                    )}
                                />
                            </Link>
                        ))}
                        <FlatButton
                            title={t("loginButton")}
                            className="w-36 h-12"
                            titleClassName=""
                            theme={isOpen ? "white" : "blue"}
                            onClick={onLoginButtonClick}
                        />
                    </ul>
                    <div
                        role="none"
                        className={cn(
                            "w-fit h-fit lg:hidden",
                            isOpen && "absolute top-6 right-4"
                        )}
                        onClick={() => onToggleNavbar()}
                    >
                        {isOpen ? (
                            <CloseIcon className="text-white cursor-pointer" />
                        ) : (
                            <HamburgerIcon className="text-main-dark-blue cursor-pointer" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthNavbar;

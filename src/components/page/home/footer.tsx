import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { TecheducationWhiteLogo } from "@/components/logos";
import { productFooterList, useFullLinkList } from "@/constants/home";
import { IFooterProduct, IFooterUseFullLink } from "@/models/nav";
import {
    ArrowRightNoHoverIcon,
    EmailIcon,
    PhoneIcon,
    PinIcon,
} from "@/components/icons";

function Footer() {
    const t = useTranslations("HOME.FOOTER");

    return (
        <div className="relative box-screen-section bg-footer">
            <div className="container mx-auto z-20 w-full h-full flex flex-col items-center justify-end gap-y-6">
                <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-x-4">
                    <div className="flex flex-col gap-y-4 p-4">
                        <div className="w-6/12">
                            <TecheducationWhiteLogo
                                width={1000}
                                height={1000}
                                className="object-contain"
                            />
                        </div>
                        <h1 className="font-semibold text-xl">
                            {t("company.name")}
                        </h1>
                        <p className="tracking-wide w-10/12">
                            {t("company.description")}
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-4 p-4">
                        <h1 className="font-semibold text-xl tracking-wide">
                            {t("useFullLink.title")}
                        </h1>
                        <div className="h-[2px] w-full bg-white my-1" />
                        {useFullLinkList?.map((link: IFooterUseFullLink) => (
                            <Link
                                key={`${link.path}-${link.title}`}
                                href={link.path}
                                className="flex gap-x-2 group transition-all duration-500"
                                target="_blank"
                            >
                                <ArrowRightNoHoverIcon className="group-hover:ml-3" />{" "}
                                {t(link.title)}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-4 p-4 tracking-wide">
                        <h1 className="font-semibold text-xl">
                            {t("contact.title")}
                        </h1>
                        <div className="h-[2px] w-full bg-white my-1" />
                        <div className="group flex gap-x-2">
                            <PhoneIcon /> <p>+66 (0)2-686-1202</p>
                        </div>
                        <div className="group flex gap-x-2">
                            <PinIcon />{" "}
                            <div className="flex flex-col">
                                {t("contact.address")
                                    .split("\n")
                                    .map((val: string) => (
                                        <p key={val}>{val}</p>
                                    ))}
                            </div>
                        </div>
                        <div className="group flex gap-x-2">
                            <EmailIcon />{" "}
                            <a href="mailto:techedasse@gmail.com">
                                techedasse@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-x-6">
                    {productFooterList?.map((product: IFooterProduct) => (
                        <Link
                            href={product.path}
                            key={product.path}
                            className="flex items-center aspect-square rounded-2xl bg-white"
                        >
                            <product.icon
                                width={500}
                                height={500}
                                className="object-contain object-center h-24"
                            />
                        </Link>
                    ))}
                </div>
                <div className="h-[2px] w-11/12 bg-white" />
                <p className="mt-2 tracking-wide mb-6">
                    Copyright © 2021 TechEd Assessment Testing | TECH Infinity
                    Education Co., Ltd. All right reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;

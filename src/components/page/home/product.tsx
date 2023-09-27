"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { productList } from "@/constants/home";
import { IProduct } from "@/models/card";
import { HomeProductImage } from "@/components/images/home";
import { ProductLogo } from "@/components/images/product";
import { cn } from "@/utilities";
import {
    ArrowLeftNoHoverIcon,
    ArrowRightNoHoverIcon,
} from "@/components/icons";

function Product() {
    const t = useTranslations("HOME.PRODUCTS");
    const [currentProduct, setCurrentProduct] = useState<number>(0);

    const onCurrentProductChange = (step: number) => {
        setCurrentProduct(prev => {
            if (prev === 0 && step === -1) return 3;
            if (prev === 3 && step === 1) return 0;
            return prev + step;
        });
    };

    return (
        <div className="relative md:box-screen-section">
            <div className="z-20 py-16 md:py-0 container w-full h-full mx-auto flex flex-col items-center justify-center gap-y-4">
                <h1 className="text-4xl font-bold text-main-dark-blue">
                    {t("topic")}
                </h1>
                <p className="text-xl font-bold text-main-dark-gray w-10/12 text-center">
                    {t("description")}
                </p>
                <div className="flex w-full justify-center items-center">
                    {productList?.map((product: IProduct, index: number) => (
                        <div
                            key={product.id}
                            className={cn(
                                "flex flex-col md:grid md:grid-cols-2 p-4 md:h-[60dvh]",
                                currentProduct !== index && "!hidden"
                            )}
                        >
                            <div className="w-full h-full flex items-center justify-end">
                                <div className="w-full md:w-10/12 h-full flex items-center justify-center bg-white">
                                    <ProductLogo
                                        id={product.id}
                                        width={500}
                                        height={500}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center w-full md:w-10/12 p-6 pb-24 lg:pb-6 gap-y-8 bg-main-dark-blue">
                                <div>
                                    <h1 className="text-3xl">
                                        {t(product.nameThai)}
                                    </h1>
                                    <h3 className="text-xl text-gray-300">
                                        {t(product.nameEng)}
                                    </h3>
                                </div>
                                <h3 className="text-lg">
                                    {t(product.description)}
                                </h3>
                                <div className="absolute bottom-8 right-8 flex gap-x-6">
                                    <div
                                        role="none"
                                        onClick={() =>
                                            onCurrentProductChange(-1)
                                        }
                                        className="w-12 h-12 flex items-center justify-center bg-main-amber cursor-pointer"
                                    >
                                        <ArrowLeftNoHoverIcon className="w-10 h-10" />
                                    </div>
                                    <div
                                        role="none"
                                        onClick={() =>
                                            onCurrentProductChange(1)
                                        }
                                        className="w-12 h-12 flex items-center justify-center bg-main-amber cursor-pointer"
                                    >
                                        <ArrowRightNoHoverIcon className="w-10 h-10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <HomeProductImage
                width={2000}
                height={2000}
                className="z-[-1] absolute -bottom-24 left-0 object-contain opacity-50"
            />
        </div>
    );
}

export default Product;

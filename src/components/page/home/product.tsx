"use client";

import { useTranslations } from "next-intl";
import { ProductCard } from "@/components/cards";
import { productList } from "@/constants/home";
import { IProduct } from "@/models/card";
import { HomeProductImage } from "@/components/images/home";

function Product() {
    const t = useTranslations("HOME.PRODUCTS");

    return (
        <div className="relative overflow-hidden w-[100dvw] h-[100dvh]">
            <div className="z-20 container w-full h-full mx-auto flex flex-col items-center justify-center gap-y-4">
                <h1 className="text-4xl font-bold text-main-dark-blue">
                    {t("topic")}
                </h1>
                <p className="text-xl font-bold text-main-dark-gray w-10/12 text-center">
                    {t("description")}
                </p>
                <div className="grid grid-cols-4 mt-4">
                    {productList?.map((product: IProduct, index: number) => (
                        <ProductCard
                            key={product.nameEng}
                            nameThai={t(product.nameThai)}
                            nameEng={t(product.nameEng)}
                            description={t(product.description)}
                            id={product.id}
                            buttonTitle={t("button")}
                            isEven={index % 2 !== 0}
                        />
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

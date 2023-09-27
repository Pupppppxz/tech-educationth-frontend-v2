import React from "react";
import { IProduct } from "@/models/card";
import { cn } from "@/utilities";
import { ProductButton } from "../buttons";
import { ProductLogo } from "../images/product";

interface ProductCardProps extends IProduct {
    buttonTitle: string;
    isEven: boolean;
}

function ProductCard({
    nameThai,
    nameEng,
    description,
    id,
    buttonTitle,
    isEven,
}: ProductCardProps) {
    return (
        <div
            className={cn(
                `group relative overflow-hidden flex flex-col justify-between items-center gap-y-8 px-4 py-6
            bg-white first-of-type:rounded-tl-2xl first-of-type:rounded-bl-2xl 
            last-of-type:rounded-tr-2xl last-of-type:rounded-br-2xl cursor-pointer transition-all duration-500`,
                isEven && "bg-main-dark-blue"
            )}
        >
            <div className="z-20 flex flex-col items-center gap-y-4">
                <ProductLogo
                    id={id}
                    width={500}
                    height={500}
                    className="h-20 object-contain"
                />
                <h1
                    className={cn(
                        "text-xl w-10/12 text-center font-bold text-white group-hover:text-main-dark-blue",
                        isEven && "text-main-dark-blue group-hover:text-white"
                    )}
                >
                    {nameThai}
                </h1>
                <h3
                    className={cn(
                        "text-[0.9rem] w-10/12 text-center font-semibold text-white group-hover:text-main-dark-blue",
                        isEven && "text-main-dark-blue group-hover:text-white"
                    )}
                >
                    {nameEng}
                </h3>
                <div
                    className={cn(
                        "my-3 h-[2px] w-full bg-white group-hover:bg-main-dark-blue",
                        isEven && "bg-main-dark-blue group-hover:bg-white"
                    )}
                />
                <p
                    className={cn(
                        "text-[1rem] text-center text-white group-hover:text-main-dark-blue w-11/12",
                        isEven && "text-black group-hover:text-white"
                    )}
                >
                    {description}
                </p>
            </div>
            <ProductButton
                isEven={isEven}
                title={buttonTitle}
                titleClassName=""
                className="z-20 w-40 h-8"
            />
            <div
                className={cn(
                    "absolute inset-0 w-full h-full z-10 top-0 left-0 bg-main-dark-blue transition-all duration-100 delay-200 group-hover:opacity-0",
                    isEven && "bg-white"
                )}
            />
        </div>
    );
}

export default ProductCard;

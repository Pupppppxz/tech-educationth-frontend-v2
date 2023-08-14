"use client";

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/utilities";

type Props = {
    options?: EmblaOptionsType;
    sliderClassName?: string;
    itemClassName?: string;
} & PropsWithChildren;

function Slider({
    children,
    options,
    sliderClassName = undefined,
    itemClassName = undefined,
}: Props) {
    const [emblaRef] = useEmblaCarousel(
        {
            slidesToScroll: 1,
            align: "start",
            ...options,
        },
        [Autoplay()]
    );

    return (
        <div
            className={cn("overflow-hidden w-full", sliderClassName)}
            ref={emblaRef}
        >
            <div className="flex min-w-1/3">
                <div className={cn("flex gap-10", itemClassName)}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Slider;

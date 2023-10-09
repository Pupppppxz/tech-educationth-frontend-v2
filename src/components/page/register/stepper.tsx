"use client";

import { useTranslations } from "next-intl";
import { registerStepperList } from "@/constants/register";
import { cn } from "@/utilities";

function RegisterStepper() {
    const t = useTranslations("AUTH.REGISTER");
    const currentStep = 0;
    return (
        <div className="hidden w-full h-full lg:flex flex-col justify-between py-8 border-r border-main-dark-blue">
            {registerStepperList?.map((item, index) => (
                <div
                    key={`${item.title}-${item.description}`}
                    className="grid grid-cols-[1fr_70px] items-center gap-x-4 h-fit w-full"
                >
                    <div className="h-full flex flex-col items-end justify-center">
                        <p
                            className={cn(
                                "text-xl font-bold text-main-gray-2",
                                index === currentStep &&
                                    "text-black tracking-wide"
                            )}
                        >
                            {t(item.title)}
                        </p>
                        <p
                            className={cn(
                                "text-sm font-semibold text-main-light-gray",
                                index === currentStep && "text-main-gray-2"
                            )}
                        >
                            {t(item.description)}
                        </p>
                    </div>
                    <div className="w-full cursor-pointer">
                        <div
                            className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-full bg-[#C4C4C4]",
                                index === currentStep &&
                                    "bg-main-dark-blue text-white"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "w-6 h-6",
                                    index === currentStep && "h-8 w-8"
                                )}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RegisterStepper;

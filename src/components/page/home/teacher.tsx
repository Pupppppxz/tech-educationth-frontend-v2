"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { TeacherCard } from "@/components/cards";
import { teacherList } from "@/constants/home";
import { ITeacherCardProps } from "@/models/card";
import {
    ArrowLeftNoHoverIcon,
    ArrowRightNoHoverIcon,
} from "@/components/icons";
import { cn } from "@/utilities";

function Teacher() {
    const t = useTranslations("HOME.TEACHER");
    const [currentTeacher, setCurrentTeacher] = useState<number>(0);
    const numberOfTeacher = teacherList.length;

    const onCurrentTeacherChange = (step: number) => {
        setCurrentTeacher(prev => {
            if (prev === 0 && step === -1) return numberOfTeacher - 1;
            if (prev === numberOfTeacher - 1 && step === 1) return 0;
            return prev + step;
        });
    };

    const nextItems = (total: number): number[] => {
        const result: number[] = [];
        let current = currentTeacher;
        for (let i = 0; i < total; i += 1) {
            if (current === numberOfTeacher - 1) {
                result.push(0);
                current = 0;
            } else {
                result.push(current + 1);
                current += 1;
            }
        }
        return result;
    };

    return (
        <div className="relative box-screen-section">
            <div className="container w-full h-full mx-auto flex flex-col items-center justify-center gap-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-main-dark-blue">
                    {t("topic")}
                </h1>
                <p className="text-lg md:text-xl font-bold text-main-dark-gray w-10/12 text-center">
                    {t("description")}
                </p>
                <div
                    className={cn(
                        "w-full grid grid-cols-[30px_1fr_30px] px-4 gap-x-2 place-items-center",
                        teacherList.length === 3 && "xl:grid-cols-1",
                        currentTeacher === 0 && "md:grid-cols-[1fr_30px]",
                        currentTeacher === teacherList.length - 2 &&
                            "md:grid-cols-[30px_1fr]",
                        currentTeacher === teacherList.length - 3 &&
                            "xl:grid-cols-[30px_1fr]"
                    )}
                >
                    <div
                        role="none"
                        onClick={() => onCurrentTeacherChange(-1)}
                        className={cn(
                            "w-full flex items-center justify-center cursor-pointer aspect-square bg-main-amber rounded-full",
                            (teacherList.length === 2 ||
                                currentTeacher === 0) &&
                                teacherList.length !== 3 &&
                                "md:hidden",
                            (teacherList.length === 3 ||
                                currentTeacher === 0) &&
                                "xl:hidden"
                        )}
                    >
                        <ArrowLeftNoHoverIcon />
                    </div>
                    <div className="grid grid-cols-1 md:hidden w-full gap-x-4">
                        {teacherList?.map(
                            (teacher: ITeacherCardProps, index: number) => (
                                <TeacherCard
                                    key={teacher.name}
                                    name={teacher.name}
                                    profilePictureURL={
                                        teacher.profilePictureURL
                                    }
                                    educations={teacher.educations}
                                    isEven={(index + 1) % 2 === 0}
                                    className={
                                        currentTeacher !== index && "hidden"
                                    }
                                />
                            )
                        )}
                    </div>
                    <div className="hidden md:grid md:grid-cols-2 xl:hidden w-full gap-x-4">
                        {teacherList?.map(
                            (teacher: ITeacherCardProps, index: number) => (
                                <TeacherCard
                                    key={teacher.name}
                                    name={teacher.name}
                                    profilePictureURL={
                                        teacher.profilePictureURL
                                    }
                                    educations={teacher.educations}
                                    isEven={(index + 1) % 2 === 0}
                                    className={
                                        currentTeacher === index ||
                                        nextItems(1).includes(index)
                                            ? ""
                                            : "hidden"
                                    }
                                />
                            )
                        )}
                    </div>
                    <div className="hidden xl:grid xl:grid-cols-3 w-full gap-x-4">
                        {teacherList?.map(
                            (teacher: ITeacherCardProps, index: number) => (
                                <TeacherCard
                                    key={teacher.name}
                                    name={teacher.name}
                                    profilePictureURL={
                                        teacher.profilePictureURL
                                    }
                                    educations={teacher.educations}
                                    isEven={(index + 1) % 2 === 0}
                                    className={
                                        currentTeacher === index ||
                                        nextItems(2).includes(index)
                                            ? ""
                                            : "hidden"
                                    }
                                />
                            )
                        )}
                    </div>
                    <div
                        role="none"
                        onClick={() => onCurrentTeacherChange(1)}
                        className={cn(
                            "w-full flex items-center justify-center cursor-pointer aspect-square bg-main-amber rounded-full",
                            (teacherList.length === 2 ||
                                currentTeacher === teacherList.length - 2) &&
                                "md:hidden",
                            (teacherList.length === 3 ||
                                currentTeacher === teacherList.length - 3) &&
                                "xl:hidden"
                        )}
                    >
                        <ArrowRightNoHoverIcon />
                    </div>
                </div>
                <p className="text-6xl -mt-4 text-main-dark-blue">...</p>
            </div>
        </div>
    );
}

export default Teacher;

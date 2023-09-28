"use client";

import Image from "next/image";
import { ClassValue } from "clsx";
import { ITeacherCardProps } from "@/models/card";
import { ITeacherEducation } from "@/models/teacher";
import { cn } from "@/utilities";
import { BookIcon } from "../icons";

type TeacherProps = ITeacherCardProps & {
    isEven: boolean;
    className?: ClassValue;
};

function TeacherCard({
    name,
    profilePictureURL,
    educations,
    isEven,
    className,
}: TeacherProps) {
    return (
        <div
            className={cn(
                "group relative flex justify-center w-full h-[600px] transition-all duration-500",
                className
            )}
        >
            <div
                className={cn(
                    "z-20 relative flex flex-col items-center w-10/12 gap-y-2 mt-[25%] bg-main-orange rounded-3xl px-4 py-16",
                    isEven && "bg-white text-main-dark-blue"
                )}
            >
                <span
                    className={cn(
                        "flex items-center px-4 pt-1 bg-white rounded-full mt-10 sm:mt-16 font-semibold text-black",
                        isEven && "text-white bg-main-dark-blue"
                    )}
                >
                    <h1>{name}</h1>
                </span>
                <div
                    className={cn(
                        "h-[2px] w-11/12 bg-white my-1",
                        isEven && "bg-main-dark-blue"
                    )}
                />
                {educations?.map((education: ITeacherEducation) => (
                    <div
                        key={`${education.degree}-${education.title}`}
                        className="flex w-11/12 gap-x-4 mb-2"
                    >
                        <BookIcon />
                        <div>
                            <p className="text-sm font-semibold">
                                {education.degree} | {education.title}
                            </p>
                            <p className="text-sm">({education.university})</p>
                        </div>
                    </div>
                ))}
                <div className="z-30 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full justify-center">
                    <Image
                        className="w-1/2 rounded-full aspect-square object-cover border-2 border-white"
                        width={500}
                        height={500}
                        alt="teacher-card-image"
                        src={profilePictureURL}
                    />
                </div>
            </div>
            <div
                className={cn(
                    "absolute z-10 flex w-10/12 h-[75%] top-[25%] rotate-[4deg] group-hover:-rotate-[4deg] rounded-3xl bg-main-dark-blue",
                    isEven && "bg-main-orange"
                )}
            />
        </div>
    );
}

export default TeacherCard;

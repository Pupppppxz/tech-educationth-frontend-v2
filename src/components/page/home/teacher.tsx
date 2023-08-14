"use client";

import { useTranslations } from "next-intl";
// import { Slider } from "@/components/slider";
import { TeacherCard } from "@/components/cards";
import { teacherList } from "@/constants/home";
import { ITeacherCardProps } from "@/models/card";

function Teacher() {
    const t = useTranslations("HOME.TEACHER");

    return (
        <div className="relative box-screen-section">
            <div className="container w-full h-full mx-auto flex flex-col items-center justify-center gap-y-4">
                <h1 className="text-4xl font-bold text-main-dark-blue">
                    {t("topic")}
                </h1>
                <p className="text-xl font-bold text-main-dark-gray w-10/12 text-center">
                    {t("description")}
                </p>

                {/* <Slider options={{ align: "center" }}> */}
                <div className="grid grid-cols-3 w-full gap-x-4">
                    {teacherList?.map(
                        (teacher: ITeacherCardProps, index: number) => (
                            <TeacherCard
                                key={teacher.name}
                                name={teacher.name}
                                profilePictureURL={teacher.profilePictureURL}
                                educations={teacher.educations}
                                isEven={(index + 1) % 2 === 0}
                            />
                        )
                    )}
                </div>
                {/* </Slider> */}
                <p className="text-6xl -mt-4 text-main-dark-blue">...</p>
            </div>
        </div>
    );
}

export default Teacher;

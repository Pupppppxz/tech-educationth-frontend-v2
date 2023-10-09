import {
    CheckNoHoverIcon,
    LockNoHoverIcon,
    SchoolNoHoverIcon,
    UserIcon,
    UserInfoNoHoverIcon,
    WorldNoHoverIcon,
} from "@/components/icons";
import { IFormOption } from "@/models/local/form";
import { IRegisterStepperItem } from "@/models/local/register";

const registerStepperList: IRegisterStepperItem[] = [
    {
        title: "country.step-title",
        description: "country.step-description",
        icon: WorldNoHoverIcon,
    },
    {
        title: "authentication.step-title",
        description: "authentication.step-description",
        icon: UserIcon,
    },
    {
        title: "school.step-title",
        description: "school.step-description",
        icon: SchoolNoHoverIcon,
    },
    {
        title: "personalInfo.step-title",
        description: "personalInfo.step-description",
        icon: UserInfoNoHoverIcon,
    },
    {
        title: "contact.step-title",
        description: "contact.step-description",
        icon: LockNoHoverIcon,
    },
    {
        title: "confirmation.step-title",
        description: "confirmation.step-description",
        icon: CheckNoHoverIcon,
    },
];

const selectCountryLabels: IFormOption[] = [
    {
        label: "ประเทศไทย | Thailand",
        value: "Thailand",
    },
];

const selectVerificationType: IFormOption[] = [
    {
        label: "หมายเลขบัตรประชาชน | SSN",
        value: "SSN",
    },
    {
        label: "หมายเลขพาสปอร์ต | Passport",
        value: "Passport",
    },
];

const selectSchoolLabels: IFormOption[] = [
    {
        label: "โรงเรียนบ้านโคกอีด่ย | Koak E Doi School",
        value: "Thailand",
    },
    {
        label: "โรงเรียนบ้านโคกอีด่ย | Koak E Doi School",
        value: "Thailand",
    },
];

const passwordCheckList: string[] = [
    "ขั้นต่ำ 8 ตัวอักษร",
    "อักขระพิมพ์ใหญ่",
    "อักขระพิมพ์เล็ก",
    "ตัวเลข (0-9)",
    "ตัวอักษรพิเศษ (@$!%*#?&^._-=)",
    "ไม่มีช่องว่าง",
];

export {
    registerStepperList,
    selectCountryLabels,
    selectVerificationType,
    selectSchoolLabels,
    passwordCheckList,
};

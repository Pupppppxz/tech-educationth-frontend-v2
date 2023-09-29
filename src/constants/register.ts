import {
    CheckNoHoverIcon,
    LockNoHoverIcon,
    SchoolNoHoverIcon,
    UserIcon,
    UserInfoNoHoverIcon,
    WorldNoHoverIcon,
} from "@/components/icons";
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

export { registerStepperList };

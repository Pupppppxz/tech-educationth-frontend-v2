import {
    CharacteristicIcon,
    HomeIcon,
    ProcessIcon,
    QUestionIcon,
} from "@/components/icons";
import { INavbar } from "@/models/nav";

const navbarItems: INavbar[] = [
    {
        title: "home-page",
        path: "/",
        icons: HomeIcon,
    },
    {
        title: "characteristic-page",
        path: "/characteristic",
        icons: CharacteristicIcon,
    },
    {
        title: "process-page",
        path: "/process",
        icons: ProcessIcon,
    },
    {
        title: "questions-page",
        path: "/questions",
        icons: QUestionIcon,
    },
];

export { navbarItems };

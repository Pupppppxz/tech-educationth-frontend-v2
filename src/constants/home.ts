import { BookIcon, GlobalIcon, PenIcon, SpeakerIcon } from "@/components/icons";
import { IFlatCardProps, IProduct } from "@/models/card";

const productList: IProduct[] = [
    {
        nameEng: "imeddat.name.eng",
        nameThai: "imeddat.name.thai",
        description: "imeddat.description",
        id: "PD:IMEDDAT",
    },
    {
        nameEng: "aadat.name.eng",
        nameThai: "aadat.name.thai",
        description: "aadat.description",
        id: "PD:AADAT",
    },
    {
        nameEng: "nnodat.name.eng",
        nameThai: "nnodat.name.thai",
        description: "nnodat.description",
        id: "PD:NNODAT",
    },
    {
        nameEng: "edat.name.eng",
        nameThai: "edat.name.thai",
        description: "edat.description",
        id: "PD:EDAT",
    },
];

const cardClassName = "h-20 rounded-full w-11/12";
const textClassName = "text-xl left-6 w-11/12 translate-x-0";
const iconClassName = "w-10 h-10";

const LRWVList: IFlatCardProps[] = [
    {
        description: "reading",
        cardClassName,
        textClassName,
        iconClassName,
        icon: BookIcon,
        theme: "blue",
    },
    {
        description: "writing",
        cardClassName,
        textClassName,
        iconClassName,
        icon: PenIcon,
        theme: "blue",
    },
    {
        description: "analysis",
        cardClassName,
        textClassName,
        iconClassName,
        icon: GlobalIcon,
        theme: "blue",
    },
    {
        description: "listen",
        cardClassName,
        textClassName,
        iconClassName,
        icon: SpeakerIcon,
        theme: "blue",
    },
];

export { productList, LRWVList };

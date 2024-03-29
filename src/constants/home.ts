import { BookIcon, GlobalIcon, PenIcon, SpeakerIcon } from "@/components/icons";
import {
    AADAT,
    BSDAT,
    EDAT,
    IMEDDAT,
    NNODAT,
    PEDAT,
} from "@/components/images/product";
import { IFlatCardProps, IProduct, ITeacherCardProps } from "@/models/card";
import { IFooterProduct, IFooterUseFullLink } from "@/models/nav";

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
const textClassName = "text-lg md:text-xl left-6 w-11/12 translate-x-0";
const iconClassName = "w-8 h-8";

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

const teacher: ITeacherCardProps = {
    name: "ดร.วศิทธิ์ ศิริลาภอนันต์",
    profilePictureURL:
        "https://www.telegraph.co.uk/content/dam/royal-family/2022/11/28/TELEMMGLPICT000317879575_trans_NvBQzQNjv4BqA7N2CxnJWnYI3tCbVBgu9T0aesusvN1TE7a0ddd_esI.jpeg",
    educations: [
        {
            degree: "ปริญญาเอก",
            title: "วิศวกรรมศาสตร์ชีวการแพทย์",
            university: "University of Warwick, UK",
        },
        {
            degree: "ปริญญาโท",
            title: "วิศวกรรมศาสตร์การเงิน",
            university: "University of Reading, UK",
        },
        {
            degree: "ปริญญาตรี",
            title: "วิศวกรรม์ศาสตร์เครื่องกล",
            university: "UNSW, Australia",
        },
        {
            degree: "ปริญญาตรี",
            title: "วิศวกรรม์ศาสตร์เครื่องกล",
            university: "มหาวิทยาลัยธรรมศาสตร์",
        },
    ],
};
const teacherList: ITeacherCardProps[] = [
    { ...teacher, name: "ดร.วศิทธิ์ ศิริลาภอนันต์ 1" },
    { ...teacher, name: "ดร.วศิทธิ์ ศิริลาภอนันต์ 2" },
    { ...teacher, name: "ดร.วศิทธิ์ ศิริลาภอนันต์ 3" },
    { ...teacher, name: "ดร.วศิทธิ์ ศิริลาภอนันต์ 4" },
    { ...teacher, name: "ดร.วศิทธิ์ ศิริลาภอนันต์ 5" },
];

const useFullLinkList: IFooterUseFullLink[] = [
    {
        title: "useFullLink.main",
        path: "/",
    },
    {
        title: "useFullLink.testing",
        path: "/",
    },
    {
        title: "useFullLink.manual",
        path: "/",
    },
    {
        title: "useFullLink.scope",
        path: "/",
    },
    {
        title: "useFullLink.about",
        path: "/",
    },
];

const productFooterList: IFooterProduct[] = [
    {
        path: "",
        icon: IMEDDAT,
    },
    {
        path: "",
        icon: AADAT,
    },
    {
        path: "",
        icon: EDAT,
    },
    {
        path: "",
        icon: NNODAT,
    },
    {
        path: "",
        icon: PEDAT,
    },
    {
        path: "",
        icon: BSDAT,
    },
];

export {
    productList,
    LRWVList,
    teacherList,
    useFullLinkList,
    productFooterList,
};

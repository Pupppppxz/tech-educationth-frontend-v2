import { AADAT, EDAT, IMEDDAT, NNODAT } from "@/components/images/product";
import { IProduct } from "@/models/card";

const productList: IProduct[] = [
    {
        nameEng: "imeddat.name.eng",
        nameThai: "imeddat.name.thai",
        description: "imeddat.description",
        icon: IMEDDAT,
    },
    {
        nameEng: "aadat.name.eng",
        nameThai: "aadat.name.thai",
        description: "aadat.description",
        icon: AADAT,
    },
    {
        nameEng: "nnodat.name.eng",
        nameThai: "nnodat.name.thai",
        description: "nnodat.description",
        icon: NNODAT,
    },
    {
        nameEng: "edat.name.eng",
        nameThai: "edat.name.thai",
        description: "edat.description",
        icon: EDAT,
    },
];

export { productList };

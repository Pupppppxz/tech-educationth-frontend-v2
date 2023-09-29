import { ReactNode } from "react";

type TitleProps = {
    children: ReactNode;
};

function Title({ children }: TitleProps) {
    return <div className="text-3xl font-bold">{children}</div>;
}

export default Title;

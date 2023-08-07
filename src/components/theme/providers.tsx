"use client";

import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

type Types = {
    children: ReactNode;
};

function Providers({ children }: Types) {
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    if (!mount) {
        return <div>{children}</div>;
    }

    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default Providers;

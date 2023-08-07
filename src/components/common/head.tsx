import Head from "next/head";

// import { structuredHeadData } from "@/constants/metadata";

function AppHead() {
    return (
        <Head>
            <script
                type="application/ld+json"
                // dangerouslySetInnerHTML={{
                //     __html: JSON.stringify(structuredHeadData),
                // }}
            />
            <link rel="icon" href="/favicon.ico" />
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </Head>
    );
}

export default AppHead;

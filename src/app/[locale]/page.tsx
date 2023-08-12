"use client";

import { Navbar } from "@/components/navs";
import { Landing, Product } from "@/components/page/home";

function HomePage() {
    return (
        <div className="overflow-y-scroll">
            <Navbar />
            <Landing />
            <Product />
        </div>
    );
}

export default HomePage;

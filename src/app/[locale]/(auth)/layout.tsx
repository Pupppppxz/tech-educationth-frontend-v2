import { PropsWithChildren } from "react";
import { AuthNavbar } from "@/components/navs";

function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="box-screen-section bg-auth relative bg-no-repeat bg-cover font-application m-0 p-0">
            <AuthNavbar />
            <div className="container mx-auto h-[100dvh] flex items-center">
                <div className="w-full h-[75dvh] mx-4 bg-white shadow-main-3">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;

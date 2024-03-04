import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { NavBar } from "../NavBar/NavBar";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
    return (
        <div>
            <NavBar />
            <Suspense fallback={<Loader />}>
                <Outlet/>
            </Suspense>
            <Toaster position="top-right" reverseOrder={ false} />
        </div>
    )
}
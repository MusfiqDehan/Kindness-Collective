import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Base/Navbar";
import Footer from "./Base/Footer";

const Layout = () => {
    const location = useLocation();
    console.log(location.pathname);

    if (location.pathname === "/") {
        document.title = "Home | Kindness Collective";
    } else if (/^\/donation\/\d+$/.test(location.pathname)) {
        document.title = "Donation Details | Kindness Collective";
    } else if (location.pathname === "/donations") {
        document.title = "Donations | Kindness Collective";
    } else if (location.pathname === "/statistics") {
        document.title = "Statistics | Kindness Collective";
    } else if (location.pathname === "/about") {
        document.title = "About | Kindness Collective";
    } else {
        document.title = "Page Not Found | Kindness Collective";
    }

    return (
        <>
            <Navbar />
            <main className="my-12 p-10">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;

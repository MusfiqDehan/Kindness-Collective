import { Outlet } from "react-router-dom";
import Navbar from "./Base/Navbar";
import Footer from "./Base/Footer";

const Layout = () => {
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

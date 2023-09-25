import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Donations from "../pages/Donations";
import About from "../pages/About";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/donations",
                element: <Donations />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

export default Routes;

import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Donations from "../pages/Donations";
import Statistics from "../pages/Statistics";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import DonationDetails from "../pages/DonationDetails";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/data.json"),
            },
            {
                path: "/donations",
                element: <Donations />,
            },
            {
                path: "/donation/:id",
                element: <DonationDetails />,
                loader: () => fetch("/data.json"),
            },
            {
                path: "/statistics",
                element: <Statistics />,
                loader: () => fetch("/data.json"),
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

export default Routes;

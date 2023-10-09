import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Donations from "../pages/Donations";
import Statistics from "../pages/Statistics";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import DonationDetails from "../pages/DonationDetails";

const API_URL = "https://kindness-collective.up.railway.app/api/v1/donations";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async () => fetch(API_URL),
            },
            {
                path: "/donations",
                element: <Donations />,
            },
            {
                path: "/donation/:id",
                element: <DonationDetails />,
                loader: async () => fetch(API_URL),
            },
            {
                path: "/statistics",
                element: <Statistics />,
                loader: async () => fetch(API_URL),
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

export default Routes;

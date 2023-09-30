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
                loader: async () =>
                    fetch(
                        "https://kindness-collective.musfiqdehan.repl.co/api/v1/donations"
                    ),
            },
            {
                path: "/donations",
                element: <Donations />,
            },
            {
                path: "/donation/:id",
                element: <DonationDetails />,
                loader: async () =>
                    fetch(
                        "https://kindness-collective.musfiqdehan.repl.co/api/v1/donations"
                    ),
            },
            {
                path: "/statistics",
                element: <Statistics />,
                loader: async () =>
                    fetch(
                        "https://kindness-collective.musfiqdehan.repl.co/api/v1/donations"
                    ),
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

export default Routes;

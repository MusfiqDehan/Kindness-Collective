import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
        setTheme(theme === "dark" ? "light" : "dark");
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
        localTheme &&
            document
                .querySelector("html")
                .setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <nav className="w-full fixed top-0 shadow-xl px-5 z-50">
            <div className="navbar bg-base-100 flex-col md:flex-col lg:flex-row">
                <div className="flex-1 text-xl">
                    <img className="w-10 h-10" src="logo.png" alt="" />
                    <NavLink to="/">Kindness Collective</NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "bg-gray-200"
                                        : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donations"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "bg-gray-200"
                                        : ""
                                }
                            >
                                Donations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "bg-gray-200"
                                        : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "bg-gray-200"
                                        : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <div className="">
                            <label className="swap swap-rotate">
                                <input onClick={toggleTheme} type="checkbox" />
                                <div className="swap-on">
                                    <Icon
                                        className="text-xl"
                                        icon="line-md:moon-loop"
                                    />
                                </div>
                                <div className="swap-off">
                                    <Icon
                                        className="text-xl"
                                        icon="line-md:sun-rising-loop"
                                    />
                                </div>
                            </label>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

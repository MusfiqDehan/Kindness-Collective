import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 shadow-xl px-5 z-50">
            <div className="navbar bg-base-100">
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
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

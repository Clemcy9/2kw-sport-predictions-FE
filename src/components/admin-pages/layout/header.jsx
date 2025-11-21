import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
    FaTachometerAlt,
    FaFutbol,
    FaChartLine,
    FaFileAlt,
    FaTags,
    FaLink,
    FaQuestionCircle,
    FaSignOutAlt,
    FaChevronDown,
    FaChevronRight,
} from "react-icons/fa";

export default function AdminHeader() {
    const navigation = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const menuItems = [
        {
            title: "Dashboard",
            path: "/admin/dashboard",
            icon: <FaTachometerAlt />,
        },
        {
            title: "Fixtures",
            icon: <FaFutbol />,
            dropdown: [
                { name: "Male Predictions", path: "/admin/fixtures" },
                { name: "Leagues", path: "/fixtures/add" },
            ],
        },
        {
            title: "Predictions",
            path: "/admin/predictions",
            icon: <FaChartLine />,
        },
        {
            title: "Metadata",
            path: "/metadata",
            icon: <FaFileAlt />,
        },
        {
            title: "Header & Footer Tags",
            path: "/admin/tags",
            icon: <FaTags />,
        },
        {
            title: "Articles",
            icon: <FaFileAlt />,
            dropdown: [
                { name: "All Articles", path: "/articles" },
                { name: "Create Article", path: "/articles/create" },
            ],
        },
        {
            title: "SEO Pages",
            path: "/seo",
            icon: <FaTags />,
        },
        {
            title: "Affiliate/Partner Links",
            path: "/affiliate",
            icon: <FaLink />,
        },
    ];

    const lastMenu = [
        {
            title: "Help & Support",
            path: "/support",
            icon: <FaQuestionCircle />,
        },
        {
            title: "Log Out",
            path: "/logout",
            icon: <FaSignOutAlt />,
        },
    ];

    const name =JSON.parse(localStorage.getItem("name"));

    return (
        <header className="bg-[#1A365D] top-0 w-full z-50 shadow-sm backdrop-blur-lg sticky">
            <div className="max-w-full lg:max-w-full mx-auto px-2 sm:px-3 lg:px-2">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <button
                        onClick={() => navigation("/")}
                        className="cursor-pointer flex items-center font-bold font-serif text-gray-50 lg:text-3xl text-[20px]"
                    >
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="text-[24px]"
                        >
                            ⚽
                        </motion.span>
                        2KwPredicts
                    </button>

                    <div className="flex justify-center items-center">

                        <h1 className="hidden font-serif text-white lg:text-2xl text-[16px] lg:flex justify-center items-end  flex-col">
                            {name}
                            <span className="font-sans text-white/80 lg:text-[16px] text-[10px]">
                                Admin
                            </span>
                        </h1>

                        <div className="lg:hidden absolute ">

                           
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className=" text-2xl text-[#fff]"
                            >
                                {isOpen ? <X /> : <Menu />}
                            </button>

                            {/* Sidebar */}
                            <aside
                                className={`min-h-screen bg-[#1A365D] text-[#fff] sm:w-80 w-full overflow-y-hidden p-4 flex flex-col shadow-lg  fixed top-15 left-0 z-40 transition-transform duration-300
                                ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
                            >
                                <nav className="flex flex-col space-y-5 gap-3 ">
                                    {menuItems.map((item, i) => (
                                        <div key={i}>
                                            {item.dropdown ? (
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            setOpenDropdown(openDropdown === item.title ? null : item.title)
                                                        }
                                                        className={`flex justify-between items-center w-full px-3 py-2 rounded-lg hover:bg-[#fff] hover:text-[#1A3761] transition ${openDropdown === item.title ? "bg-white text-[#1A3761]" : ""
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            {item.icon}
                                                            <span>{item.title}</span>
                                                        </div>
                                                        {openDropdown === item.title ? (
                                                            <FaChevronDown className="text-xs" />
                                                        ) : (
                                                            <FaChevronRight className="text-xs" />
                                                        )}
                                                    </button>

                                                    {/* Dropdown Items */}
                                                    {openDropdown === item.title && (
                                                        <div className="bg-white py-5 px-2 flex flex-col gap-1 rounded-b-[0.4rem]">
                                                            {item.dropdown.map((sub, j) => (
                                                                <NavLink
                                                                    key={j}
                                                                    to={sub.path}
                                                                    onClick={() => {setOpenDropdown(null); setIsOpen(false);}}
                                                                    className="text-sm text-[#142850] hover:bg-[#D6AE3E] p-2 rounded-[0.4rem] w-full transition-all"
                                                                >
                                                                    {sub.name}
                                                                </NavLink>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <NavLink
                                                    to={item.path}
                                                    onClick={()=> {setOpenDropdown(null); setIsOpen(false);}}
                                                    className={({ isActive }) =>
                                                        `flex items-center gap-3 p-2 rounded-lg transition-all ${isActive
                                                                ? "bg-[#fff] text-[#1A3761]"
                                                            : "hover:bg-[#fff] hover:text-[#1A3761]"
                                                        }`
                                                    }
                                                >
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </NavLink>
                                            )}
                                        </div>
                                    ))}

                                    <div className="mt-5">
                                        {lastMenu.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.path}
                                                onClick={() => { setOpenDropdown(null); setIsOpen(false); }}
                                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#fff] hover:text-[#1A3761] transition"
                                            >
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        ))}
                                    </div>

                                    <h1 className="lg:hidden sm:py-8 py-4 font-serif text-white px-3 lg:text-2xl text-[18px] flex items-start  flex-col">
                                        {name}
                                        <span className="font-sans text-white/80 lg:text-[16px] text-[10px]">
                                            Admin
                                        </span>
                                    </h1>

                                </nav>
                            </aside>
                        </div>
                    </div>

                </div>
           </div>       
        </header>
    );
}

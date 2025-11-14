import { useState } from "react";
import {Link ,NavLink, useNavigate} from "react-router-dom";
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
    FaArrowLeft
} from "react-icons/fa";

export default function Sidebar() {
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
            path: "/tags",
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

    return (
        <aside className="hidden sticky top-0 bg-[#1A365D29] text-[#1A365D] lg:w-80 w-full min-h-screen p-4 lg:flex flex-col shadow-lg py-10">
           
            <nav className="flex flex-col gap-6">
               
                {menuItems.map((item, i) => (
                    <div key={i}>
                        {item.dropdown ? (
                            <div>
                                <button
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === item.title ? null : item.title)
                                    }
                                    className={`flex justify-between items-center w-full px-3 py-2 rounded-lg hover:bg-[#1A3761] hover:text-white transition  ${openDropdown === item.title ? "bg-[#1A3761] text-white"  : ""
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
                                className={({ isActive }) =>  `flex items-center gap-3 p-2 rounded-lg transition-all ${isActive ? "bg-[#1A3761] text-white" : "hover:bg-[#1A3761] hover:text-white" }`}
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </NavLink>
                        )}
                    </div>
                ))}

                <div className="mt-10">
                    {lastMenu.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1A3761] hover:text-white transition "
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>
            </nav>
            {/* )} */}
        </aside>
    );
}

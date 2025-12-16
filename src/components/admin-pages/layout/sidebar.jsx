import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaFutbol,
  FaChartLine,
  FaFileAlt,
  FaTags,
  FaLink,
  // FaQuestionCircle,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronRight,
  // FaArrowLeft,
} from "react-icons/fa";

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();

 const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("isLoggedIn");
 };

 const handle_logout = () => {
  logout();
   navigate("/sign-in", { replace: true });
 };

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
        { name: "Make Predictions", path: "/admin/fixtures" },
        { name: "Leagues", path: "/admin/leagues" },
      ],
    },
    {
      title: "Predictions",
      path: "/admin/predictions",
      icon: <FaChartLine />,
    },
    {
      title: "Metadata",
      path: "/admin/metadata",
      icon: <FaFileAlt />,
    },
    // {
    //   title: "Header & Footer Tags",
    //   path: "/admin/tags",
    //   icon: <FaTags />,
    // },
    {
      title: "Articles",
      icon: <FaFileAlt />,
      dropdown: [
        { name: "New Post", path: "/admin/blogs/blog" },
        { name: "All Posts", path: "/admin/blogs/all-posts" },
        { name: "Media Gallery", path: "/admin/Gallery" },
      ],
    },
    {
      title: "SEO Pages",
      path: "/admin/seo",
      icon: <FaTags />,
    },
    {
      title: "Affiliate/Partner Links",
      path: "/admin/affiliate-partner-links",
      icon: <FaLink />,
    },
  ];

  const lastMenu = [
    {
      title: "Log Out",
      // path: "/admin/logout",
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <aside className="hidden min-h-screen bg-[#1A365D29] text-[#1A365D] lg:sticky top-0 lg:w-80  p-4 lg:flex flex-col shadow-lg pt-10 lg:pt-6">
      <nav className="flex flex-col gap-6">
        {menuItems.map((item, i) => (
          <div key={i}>
            {item.dropdown ? (
              <div>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.title ? null : item.title
                    )
                  }
                  className={`flex justify-between items-center w-full px-3 py-2 rounded-lg rounded-b-none hover:bg-[#1A3761] hover:text-white transition  ${
                    openDropdown === item.title ? "bg-[#1A3761] text-white" : ""
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
                        className={({ isActive }) =>
                          `flex items-center gap-3 p-2 rounded-lg transition-all ${
                            isActive
                              ? "bg-[#D6AE3E] text-[#1A3761]"
                              : "hover:bg-[#D6AE3E] hover:text-[#1A3761]"
                          }`
                        }
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
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#1A3761] text-white"
                      : "hover:bg-[#1A3761] hover:text-white"
                  }`
                }
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            )}
          </div>
        ))}

        <div className="mt-10 lg:space-y-5 lg:mt-5">
          {lastMenu.map((item, index) => (
            <button onClick={handle_logout}
              key={index}
              // to={item.path}
              className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-[#1A3761] hover:text-white transition "
            >
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </nav>
      {/* )} */}
    </aside>
  );
}

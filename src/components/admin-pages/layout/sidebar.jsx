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
  FaEdit,
  // FaArrowLeft,
} from "react-icons/fa";
import useAdminBase from "../../hooks/useAdminUrl";

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [modal, setModal] = useState(null);

  const navigate = useNavigate();

  const admin_base_url = useAdminBase();

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
      path: `${admin_base_url}/dashboard`,
      icon: <FaTachometerAlt />,
    },
    {
      title: "Fixtures",
      icon: <FaFutbol />,
      path: `${admin_base_url}/fixtures`,
      // // dropdown: [
      //   { name: "Make Predictions", },
      //   // { name: "Leagues", path: "/admin/leagues" },
      // // ],
    },
    {
      title: "Predictions",
      path: `${admin_base_url}/predictions`,
      icon: <FaChartLine />,
    },
    {
      title: "Metadata",
      path: `${admin_base_url}/metadata`,
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
        { name: "New Post", path: `${admin_base_url}/blogs/blog` },
        { name: "All Posts", path: `${admin_base_url}/blogs/all-posts` },
        // { name: "Media Gallery", path: "/admin/Gallery" },
      ],
    },
    {
      title: "SEO Pages",
      path: `${admin_base_url}/seo`,
      icon: <FaTags />,
    },
    {
      title: "Affiliate/Partner Links",
      path: `${admin_base_url}/affiliate-partner-links`,
      icon: <FaLink />,
    },
    {
      title: "Edit Affiliate Links",
      path: `${admin_base_url}/edit-affiliate`,
      icon: <FaEdit />,
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
            <button onClick={() => setModal(true)}
              key={index}
             
              className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-[#1A3761] hover:text-white transition "
            >
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </nav>

      {modal && (
					<section
						onClick={() => setModal(null)}
						className=' absolute inset-0 z-50 flex items-center justify-center bg-[#1A365D]/40'>
						<div
							onClick={(e) => e.stopPropagation()}
							className=' w-[90%] max-w-sm flex justify-center space-y-6 items-center flex-col bg-white shadow-xl px-4 py-3 '>
							<h3 className='text-[#1a365d] font-semibold'>
								Are You Sure You Want To Log-Out
							</h3>
							
							<div className='flex gap-3 py-4 justify-center items-center'>
								<button
									onClick={handle_logout}
									className='bg-[#1A365D] flex items-center gap-2 px-4 py-2 text-white'>
                    <FaSignOutAlt />
									Log-Out
								</button>
								<button
									onClick={() => setModal(null)}
									className='text-[#1A365D] px-4 py-2 bg-white border border-[#1A365D] rounded-xs'>
									Cancel
								</button>
							</div>
						</div>
					</section>
				)}
      
    </aside>
  );
}

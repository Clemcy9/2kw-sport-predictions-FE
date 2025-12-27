import { useEffect, useState } from "react";
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
    // FaQuestionCircle,
    FaSignOutAlt,
    FaChevronDown,
    FaChevronRight,
} from "react-icons/fa";

export default function AdminHeader() {
    const navigation = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
 const [modal, setModal] = useState(null);

  const navigate = useNavigate();

 const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("isLoggedIn");
 };

 const handle_logout = () => {
  logout();
   navigate("/sign-in", { replace: true });
 };

    useEffect(() => {
        if (isOpen) {
            const y = window.scrollY;
            document.body.style.cssText = `position:fixed; top:-${y}px; left:0; right:0;`;
        } else {
            const y = parseInt(document.body.style.top || "0") * -1;
            document.body.style.cssText = "";
            window.scrollTo(0, y);
        }
    }, [isOpen]);



    const menuItems = [
        {
            title: "Dashboard",
            path: "/admin/dashboard",
            icon: <FaTachometerAlt />,
        },
        {
            title: "Fixtures",
            icon: <FaFutbol />,
            path: "/admin/fixtures",
            // dropdown: [
                // { name: "Make Predictions",  },
                // { name: "Leagues", path: "/fixtures/add" },
            // ],
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
        //     title: "Header & Footer Tags",
        //     path: "/admin/tags",
        //     icon: <FaTags />,
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

    const name = localStorage.getItem(("userEmail"));

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
                            {(name).split("@")[0]}
                            <span className="font-sans text-white/80 lg:text-[16px] text-[10px]">
                                Admin
                            </span>
                        </h1>

                        <div className="lg:hidden absolute ">

                           
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className=" text-2xl text-[#fff] mr-4"
                            >
                                {isOpen ? <X /> : <Menu />}
                            </button>

                            {/* Sidebar */}
                            <div
                                className={` min-h-screen bg-[#1A365D] text-[#fff] h-screen sm:w-80 w-full overflow-y-auto p-4 flex flex-col shadow-lg  fixed  left-0 z-40 transition-transform duration-300
                                ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
                            >
                                <nav className="flex flex-col space-y-5 gap-3 min-h-screen">
                                    {menuItems.map((item, i) => (
                                        <div key={i}>
                                            {item.dropdown ? (
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            setOpenDropdown(openDropdown === item.title ? null : item.title)
                                                        }
                                                        className={`flex justify-between items-center w-full px-3 py-2 rounded-lg rounded-b-none hover:bg-[#fff] hover:text-[#1A3761] transition ${openDropdown === item.title ? "bg-white text-[#1A3761]" : ""
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
                                                                    className={({ isActive }) => `text-[#1A3761] flex items-center gap-3 p-2 rounded-lg transition-all ${isActive ? "bg-[#D6AE3E] text-[#1A3761]" : "hover:bg-[#D6AE3E] hover:text-[#1A3761]"}`}
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

                                    <div className="mt-3 w-full">
                                        {lastMenu.map((item, index) => (
                                            <button 
                                                key={index}
                                                // to={item.path}
                                                onClick={() => setModal(true)}
                                                className="flex items-center gap-3 px-3 py-2 rounded-lg w-full hover:bg-[#fff] hover:text-[#1A3761] transition"
                                            >
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </button >
                                        ))}

                                        {modal && (
					<section
						onClick={() => {setModal(null); setIsOpen(false);}}
						className='fixed inset-0 z-50 flex items-center justify-center bg-[#1A365D]/40'>
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
                                    </div>

                                    <h1 className="lg:hidden sm:py-8 py-4 font-serif text-white px-3 lg:text-2xl text-[18px] flex items-start  flex-col">
                                        {(name).split("@")[0]}
                                        <span className="font-sans text-white/80 lg:text-[16px] text-[10px]">
                                            Admin
                                        </span>
                                    </h1>

                                </nav>
                            </div>
                        </div>
                    </div>

                </div>

           </div> 

                
        </header>
    );
}

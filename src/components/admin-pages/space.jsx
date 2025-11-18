import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false); // for Predictions
    const [showTag, setShowTag] = useState(false);   // for Links
    const navigation = useNavigate();
    const tag = localStorage.getItem("headerTag") || "No link saved";

    const navLinks = [
        { title: "Home", path: "/" },
        {
            title: "Predictions",
            tipsLink: [
                { title: "Free Tips", path: "/" },
                { title: "All Predictions", path: "/" },
                { title: "Home Win", path: "/" },
                { title: "Away Win", path: "/" },
                { title: "Super Singles", path: "/" },
                { title: "Double Chance", path: "/" },
                { title: "1.5 Goals", path: "/" },
                { title: "2.5 Goals", path: "/" },
                { title: "Free 2 Odds", path: "/" },
                { title: "BTTS/GG", path: "/" },
            ],
        },
        { title: "Blog", path: "/blog" },
        { title: "Links", path: "/links" },
        { title: "Admin", path: "/sign-up" },
    ];

    return (
        <header className="bg-[#1A365D] absolute top-0 w-full z-50 shadow-sm backdrop-blur-md mb-6">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <button
                        onClick={() => navigation("/")}
                        className="cursor-pointer flex items-center font-bold font-serif text-white text-shadow-lg"
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

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex space-x-8 font-sans">
                        {navLinks.map((link, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => link.title === "Links" && setShowTag(true)}
                                onMouseLeave={() => link.title === "Links" && setShowTag(false)}
                            >
                                {link.tipsLink ? (
                                    <>
                                        <button
                                            onClick={() => setDropdown(dropdown === index ? null : index)}
                                            className="text-white flex items-center gap-1 hover:text-[#D6AE3E]"
                                        >
                                            {link.title}
                                            {dropdown === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                        </button>

                                        <AnimatePresence>
                                            {dropdown === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="absolute flex flex-col items-start bg-[#D6AE3E] text-[#1A365D] shadow-lg mt-2 w-44 rounded-md py-2 z-50"
                                                >
                                                    {link.tipsLink.map((item, subIndex) => (
                                                        <button
                                                            key={subIndex}
                                                            onClick={() => navigation(item.path)}
                                                            className="w-full text-left px-3 py-1 hover:bg-[#1A365D] hover:text-[#D6AE3E] transition"
                                                        >
                                                            {item.title}
                                                        </button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => {
                                            if (link.title === "Links") {
                                                setShowTag(!showTag); // toggle on mobile click
                                            } else {
                                                navigation(link.path);
                                                setOpen(false);
                                            }
                                        }}
                                        className="text-gray-50 transition hover:text-[#D6AE3E] cursor-pointer text-shadow-lg"
                                    >
                                        {link.title}
                                    </button>
                                )}

                                {/* Show localStorage item for Links */}
                                {link.title === "Links" && showTag && (
                                    <div className="absolute mt-2 bg-[#D6AE3E] text-[#1A365D] px-3 py-1 rounded shadow-md">
                                        {tag}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setOpen(!open)} className="text-white">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={open ? "close" : "menu"}
                                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {open ? <X size={26} /> : <Menu size={26} />}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#1A365D] w-full"
                    >
                        <div className="flex flex-col items-start space-y-4 py-4 px-6">
                            {navLinks.map((link, index) => (
                                <div key={index} className="w-full relative">
                                    {link.tipsLink ? (
                                        <>
                                            <button
                                                onClick={() => setDropdown(dropdown === index ? null : index)}
                                                className="text-white flex items-center md:justify-between gap-2 md:gap-0 w-full"
                                            >
                                                {link.title}
                                                {dropdown === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                            </button>

                                            <AnimatePresence>
                                                {dropdown === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -5 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="flex flex-col mt-2 py-2 bg-[#D6AE3E] px-2 text-[#1A365D] font-sans shadow-lg w-[300px] rounded-[0.4rem]"
                                                    >
                                                        {link.tipsLink.map((item, subIndex) => (
                                                            <button
                                                                key={subIndex}
                                                                onClick={() => {
                                                                    navigation(item.path);
                                                                    setOpen(false);
                                                                }}
                                                                className="py-1 text-left hover:bg-[#1A365D] hover:text-[#D6AE3E] transition px-2 rounded-[0.4rem] shadow-sm hover:shadow-lg"
                                                            >
                                                                {item.title}
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                if (link.title === "Links") {
                                                    setShowTag(!showTag); // toggle on mobile click
                                                } else {
                                                    navigation(link.path);
                                                    setOpen(false);
                                                }
                                            }}
                                            className="text-gray-50"
                                        >
                                            {link.title}
                                        </button>
                                    )}

                                    {/* Show localStorage item on mobile */}
                                    {link.title === "Links" && showTag && (
                                        <div className="absolute mt-2 bg-[#D6AE3E] text-[#1A365D] px-3 py-1 rounded shadow-md">
                                            {tag}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

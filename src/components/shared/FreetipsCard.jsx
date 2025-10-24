import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function FreeTips() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activePath, setActivePath] = useState("/");

    const [play, setPlay] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.innerWidth >= 768) {
                setPlay(false);
                setTimeout(() => setPlay(true), 600);
            }
        }, 5 * 10 * 1000);

        return () => clearInterval(interval);
    }, []);

    const tipsLink = [
        { title: "Free Tips", path: "/" },
        { title: "All Predictions", path: "/all-predictions" },
        { title: "Home Win", path: "/home-win" },
        { title: "Away Win", path: "/away-win" },
        { title: "Sure Singles", path: "/sure-singles" },
        { title: "Double Chance", path: "/double-chance" },
        { title: "1.5 Goals", path: "/1-5-goals" },
        { title: "2.5 Goals", path: "/2-5-goals" },
        { title: "Free 2 Odds", path: "/free-2-odds" },
        { title: "BTTS/GG", path: "/btts-gg" },
    ];

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    return (
        <div className="w-full max-w-full px-0 md:relative absolute shadow-sm md:shadow-none md:z-0 max-[300px]:mt-5 top-80 md:top-0 bg-[#1A365D] md:bg-white rounded-[0] md:rounded-none">
            <motion.nav
                key={play}
                initial={{ x: play ? -200 : 0, opacity: 0 }}
                animate={{ x: play ? 0 : "100%", opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="text-[#1A365D] md:flex w-full md:items-center md:justify-center overflow-hidden"
            >
                <div className="flex justify-center items-center p-2 w-full">
                    <div className="flex flex-wrap gap-2 md:gap-6 font-sans justify-center w-full relative">
                        {tipsLink.map((tips, index) => {

                            const isActive = activePath === tips.path;

                            return (
                                <motion.button
                                    key={index}
                                    onClick={() => navigate(tips.path)}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        backgroundColor: isActive ? "#D6AE3E" : "#fff",
                                        color: isActive ? "#1A365D" : "#1A365D",
                                        transition: { duration: 0.3 },
                                    }}
                                    className={`flex-shrink-0 min-w-[100px] rounded-[0.4rem] py-2 px-2 shadow-sm font-semibold transition-all duration-300 border border-[#D6AE3E]
                                    hover:bg-[#1A365D] hover:text-white`}
                                >
                                    {tips.title}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </motion.nav>
        </div>
    );
}
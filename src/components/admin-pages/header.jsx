import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminHeader() {
    const navigation = useNavigate();
    const name =JSON.parse(localStorage.getItem("name"));

    return (
        <header className="bg-[#1A365D] top-0 w-full z-50 shadow-sm backdrop-blur-md fixed">
            <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-0">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <button
                        onClick={() => navigation("/")}
                        className="cursor-pointer flex items-center font-bold font-serif text-gray-50 text-3xl"
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
                        <h1 className="font-serif text-white text-2xl flex justify-center items-start flex-col">
                            {name} Chizy FrontEnd
                            <span className="font-sans text-white/80 text-[16px] ">
                                Admin
                            </span>
                        </h1>
                    </div>

                </div>
          </div>       
        </header>
    );
}

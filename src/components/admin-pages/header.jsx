import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminHeader() {
    const navigation = useNavigate();
    const name =JSON.parse(localStorage.getItem("name"));

    return (
        <header className="bg-[#1A365D] top-0 w-full z-50 shadow-sm backdrop-blur-md relative">
            <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-0">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <button
                        onClick={() => navigation("/")}
                        className="cursor-pointer flex items-center font-bold font-serif text-gray-50 md:text-3xl text-[20px]"
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
                        <h1 className="font-serif text-white md:text-2xl text-[16px] flex justify-center items-end  flex-col">
                            {name}FrontEnd
                            <span className="font-sans text-white/80 md:text-[16px] text-[10px]">
                                Admin
                            </span>
                        </h1>
                    </div>

                </div>
          </div>       
        </header>
    );
}

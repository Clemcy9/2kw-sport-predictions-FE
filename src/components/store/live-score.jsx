
// import Footer from "../components/shared/Footer";
// import Footer from "../shared/Navbar";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { FaFutbol, FaTelegramPlane } from "react-icons/fa";


export default function LIve_Scores () {
    return (
        <main >
            <Navbar />
            <section
                className="font-sans relative h-[344px] mt-[22px] lg:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
                style={{ backgroundImage: "url('/live-scores.jpg')" }}
            >
                <div className="absolute inset-0 bg-[#1A365D]/40"></div> {/* overlay */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="leading-[1.1] ">

                    <div className="relative z-10 max-w-6xl px-3">

                        <TypeAnimation
                            sequence={[
                                'LIVE-SCORES', 2000,
                            ]}
                            wrapper="h1"
                            speed={50}
                            repeat={0}
                            cursor={false}
                            className=" sm:text-[48px] text-3xl lg:text-6xl font-bold mb-4 text-shadow-lg lg:pb-6"
                        />
                        <p className="text-lg lg:text-xl mb-6 text-shadow-lg">
                            Your winning journey starts here
                        </p>

                        <div className="flex justify-center items-center gap-4 lg:gap-10 transition-all">
                            <a
                                href=""
                                target="blank"
                                rel="noopener noreferrer"
                                className="flex justify-center lg:items-center gap-1 bg-[#1A365D] font-sans text-[#D6AE3E] px-1 py-3 lg:py-4 shadow-lg rounded-[0.4rem] lg:text-[1.2em] lg:px-0 lg:w-65 hover:scale-95 hover:shadow-lg transition-all">
                                Join Telegram <FaTelegramPlane />
                            </a>
                            <Link
                                to="/live-scores"
                                className="flex lg:items-center justify-center gap-1 lg:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 lg:py-3  shadow-lg rounded-[0.4rem] lg:text-[1.5rem] lg:px-0 hover:scale-95 hover:shadow-lg transition-all">
                                Live Scores <FaFutbol className="animate-bounce" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
             </section> 
             <div className="min-h-screen">No Data Available now </div>
             <Footer />  
        </main>
    );
}
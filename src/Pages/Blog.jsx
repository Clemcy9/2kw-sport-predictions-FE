import Footer from "../components/shared/Footer";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import Navbar from "../components/shared/Navbar";
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { FaFutbol, FaTelegramPlane } from "react-icons/fa";

export default function BlogPost () {

 const focus = useRef(null);

  useEffect(() => {
    focus.current?.scrollIntoView({
    behaviour: "smooth" 
    });
  }, []);

    return(
        <div ref={focus}>
            <Navbar />
            <section
                className="font-sans relative h-[344px] mt-[22px] md:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
                style={{ backgroundImage: "url('/Blog-bg.jpg')" }}
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
                                'BLOG', 2000,
                            ]}
                            wrapper="h1"
                            speed={50}
                            repeat={0}
                            cursor={false}
                            className=" sm:text-[48px] text-3xl md:text-6xl font-bold mb-4 text-shadow-lg md:pb-6"
                        />
                        <p className="text-lg md:text-xl mb-6 text-shadow-lg">
                            Your winning journey starts here
                        </p>

                        <div className="flex justify-center items-center gap-4 md:gap-10 transition-all">
                            <a
                                href=""
                                target="blank"
                                rel="noopener noreferrer"
                                className="flex justify-center md:items-center gap-1 bg-[#1A365D] font-sans text-[#D6AE3E] px-1 py-3 md:py-4 shadow-lg rounded-[0.4rem] md:text-[1.2em] md:px-0 md:w-65 hover:scale-95 hover:shadow-lg transition-all">
                                Join Telegram <FaTelegramPlane />
                            </a>
                            <Link
                                to="/live-scores"
                                className="flex md:items-center justify-center gap-1 md:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 md:py-3  shadow-lg rounded-[0.4rem] md:text-[1.5rem] md:px-0 hover:scale-95 hover:shadow-lg transition-all">
                                Live Scores <FaFutbol className="animate-bounce" />
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </section>
               <div className=" grid grid-cols-4 mx-10 gap-4 my-14 justify-center items-center">
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                    <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover"/>
                    <div className="p-2">
                        <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <span className="text-[#D6AE3E] flex justify-center items-center">view more  <FiArrowRight/> </span>
                    </div>
                    </div>
                 </article>
                 
                 
               </div>
            <Footer />
        </div>
    )
}
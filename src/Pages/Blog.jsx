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
                className="font-sans relative h-[344px] mt-[22px] lg:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
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
            <div className=" lg:mx-10 sm:mx-2 mx-2 my-14 justify-center items-center lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 sm:gap-6 gap-3 w-full sm:items-center sm:w-full sm:justify-center flex flex-col ">
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.2em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-[308px] w-[408px] min-w-[08px] sm:w-auto sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-[308px] lg:h-auto sm:w-auto sm:h-auto w-[360px] h-[180px]">
                        <img src="/Blog-bg.jpg" alt="blog" className=" rounded-l-[0.5rem] h-full w-full lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem] bg-cover" />
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col gap-3 sm:gap-0">
                        <h2 className="font-semibold leading-tight py-2 sm:py-3">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px] py-3 sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="z-20 text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.2em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-[308px] w-[408px] sm:w-auto sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-[308px] lg:h-auto sm:w-auto sm:h-auto w-[360px] h-[180px]">
                        <img src="/Blog3-bg.jpg" alt="blog" className=" rounded-l-[0.5rem] h-full w-full lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem] bg-cover" />
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col gap-3 sm:gap-0">
                        <h2 className="font-semibold leading-tight py-2 sm:py-3">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px] py-3 sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="z-20 text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>

                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.2em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-[308px] w-[408px] min-w-[08px] sm:w-auto sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-[308px] lg:h-auto sm:w-auto sm:h-auto w-[360px] h-[180px]">
                        <img src="/Blog2-bg.jpg" alt="blog" className=" rounded-l-[0.5rem] h-full w-full lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem] bg-cover" />
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col gap-3 sm:gap-0">
                        <h2 className="font-semibold leading-tight py-2 sm:py-3">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px] py-3 sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="z-20 text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.2em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-[308px] w-[408px] sm:w-auto sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-[308px] lg:h-auto sm:w-auto sm:h-auto w-[360px] h-[180px]">
                        <img src="/Blog-bg.jpg" alt="blog" className=" rounded-l-[0.5rem] h-full w-full lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem] bg-cover" />
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col gap-3 sm:gap-0">
                        <h2 className="font-semibold leading-tight py-2 sm:py-3">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px] py-3 sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="z-20 text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>

                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.2em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-[308px] w-[408px] min-w-[08px] sm:w-auto sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-[308px] lg:h-auto sm:w-auto sm:h-auto w-[360px] h-[180px]">
                        <img src="/Blog3-bg.jpg" alt="blog" className=" rounded-l-[0.5rem] h-full w-full lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem] bg-cover" />
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col gap-3 sm:gap-0">
                        <h2 className="font-semibold leading-tight py-2 sm:py-3">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px] py-3 sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="z-20 text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.2em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-[308px] w-[408px] sm:w-auto sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-[308px] lg:h-auto sm:w-auto sm:h-auto w-[360px] h-[180px]">
                        <img src="/Blog2-bg.jpg" alt="blog" className=" rounded-l-[0.5rem] h-full w-full lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem] bg-cover" />
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col gap-3 sm:gap-0">
                        <h2 className="font-semibold leading-tight py-2 sm:py-3">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px] py-3 sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="z-20 text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>

                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.2em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-[308px] w-[408px] min-w-[08px] sm:w-auto sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-[308px] lg:h-auto sm:w-auto sm:h-auto w-[360px] h-[180px]">
                        <img src="/Blog-bg.jpg" alt="blog" className=" rounded-l-[0.5rem] h-full w-full lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem] bg-cover" />
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col gap-3 sm:gap-0">
                        <h2 className="font-semibold leading-tight py-2 sm:py-3">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px] py-3 sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="z-20 text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.2em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-[308px] w-[408px] sm:w-auto sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-[308px] lg:h-auto sm:w-auto sm:h-auto w-[360px] h-[180px]">
                        <img src="/Blog-bg.jpg" alt="blog" className=" rounded-l-[0.5rem] h-full w-full lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem] bg-cover" />
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col gap-3 sm:gap-0">
                        <h2 className="font-semibold leading-tight py-2 sm:py-3">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px] py-3 sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="z-20 text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>

                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.2em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-[308px] w-[408px] min-w-[08px] sm:w-auto sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-[308px] lg:h-auto sm:w-auto sm:h-auto w-[360px] h-[180px]">
                        <img src="/Blog2-bg.jpg" alt="blog" className=" rounded-l-[0.5rem] h-full w-full lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem] bg-cover" />
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col gap-3 sm:gap-0">
                        <h2 className="font-semibold leading-tight py-2 sm:py-3">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px] py-3 sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="z-20 text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.2em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-[308px] w-[408px] sm:w-auto sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-[308px] lg:h-auto sm:w-auto sm:h-auto w-[360px] h-[180px]">
                        <img src="/Blog3-bg.jpg" alt="blog" className=" rounded-l-[0.5rem] h-full w-full lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem] bg-cover" />
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col gap-3 sm:gap-0">
                        <h2 className="font-semibold leading-tight py-2 sm:py-3">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px] py-3 sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="z-20 text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>
               </div>
            <Footer />
        </div>
    )
}
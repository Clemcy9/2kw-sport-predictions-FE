import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function DummyBlog () {

    return (
        <div className="my-3 mt-7 w-full z-20 relative min-h-screen flex flex-col justify-center items-center bg-[#F3F4F64D]">
            <h1 className="font-[Inria Sans] text-center text-3xl font-semibold text-[#1F2128] lg:pb-6 mb-8">2kwPredict Blog</h1>
            <div className="lg:grid lg:grid-cols-3 lg:gap-3 sm:grid sm:grid-cols-2 sm:gap-6 gap-3 w-full sm:items-center sm:w-full sm:justify-center flex flex-col ">
                
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.5em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-auto w-[408px] min-w-[08px] sm:w-[350px] sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-auto lg:h-auto sm:w-[350px] sm:h-auto w-[360px] h-[180px]">
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
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.5em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-auto w-[408px] sm:w-[350px] sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-auto lg:h-auto sm:w-[350px] sm:h-auto w-[360px] h-[180px]">
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
                
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.5em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-auto w-[408px] min-w-[08px] sm:w-[350px] sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-auto lg:h-auto sm:w-[350px] sm:h-auto w-[360px] h-[180px]">
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
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.5em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-auto w-[408px] sm:w-[350px] sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-auto lg:h-auto sm:w-[350px] sm:h-auto w-[360px] h-[180px]">
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

                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.5em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-auto w-[408px] min-w-[08px] sm:w-[350px] sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-auto lg:h-auto sm:w-[350px] sm:h-auto w-[360px] h-[180px]">
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
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.5em] lg:h-auto h-[180px] hover:scale-95 transition-all lg:w-auto w-[408px] sm:w-[350px] sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-auto lg:h-auto sm:w-[350px] sm:h-auto w-[360px] h-[180px]">
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

            </div>
                <Link className="p-4 z-20 text-[#D6AE3E] flex justify-center text-center items-center underline" to={"/blog"}>View All Articles </Link>
      </div>
    )
}
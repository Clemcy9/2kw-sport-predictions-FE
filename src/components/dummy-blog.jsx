import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function DummyBlog () {

    return (
        <div className="py-5 md:w-[686px] w-full z-50 relative min-h-screen flex flex-col justify-center items-center">
            <h1 className="font-sans text-center text-3xl font-semibold text-[#1F2128] md:p-6 my-8">2kwPredict Blog</h1>
            <div className="md:grid md:grid-cols-2 sm:gap-4 gap-3 sm:items-center sm:justify-center flex flex-col">
                
                <article className="flex items-center justify-center flex-row md:flex-col md:h-[223] h-180px md:w-[308px] w-full shadow-none md:shadow-sm ">
                    <div className="">
                        <img src="/Blog-bg.jpg" alt="blog" className="md:w-[308px] md:h-[144px] w-[360px] h-[180px] rounded-[0.4rem] md:rounded-t-[0.4rem] bg-cover" />
                    </div>
                    <div className="md:p-2 px-1 py-0">
                        <h2 className="font-semibold leading-tight py-2">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] md:text-[15px] text-[13px] py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full md:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>
                <article className="flex items-center justify-center flex-row md:flex-col md:h-[223] h-180px md:w-[308px] w-full shadow-none md:shadow-sm ">
                    <div className="">
                        <img src="/Blog-bg.jpg" alt="blog" className="md:w-[308px] md:h-[144px] w-[360px] h-[180px] rounded-[0.4rem] md:rounded-t-[0.4rem] bg-cover" />
                    </div>
                    <div className="md:p-2 px-1 py-0">
                        <h2 className="font-semibold leading-tight py-2">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] md:text-[15px] text-[13px] py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full md:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>
                <article className="flex items-center justify-center flex-row md:flex-col md:h-[223] h-180px md:w-[308px] w-full shadow-none md:shadow-sm ">
                    <div className="">
                        <img src="/Blog-bg.jpg" alt="blog" className="md:w-[308px] md:h-[144px] w-[360px] h-[180px] rounded-[0.4rem] md:rounded-t-[0.4rem] bg-cover" />
                    </div>
                    <div className="md:p-2 px-1 py-0">
                        <h2 className="font-semibold leading-tight py-2">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] md:text-[15px] text-[13px] py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full md:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>
                <article className="flex items-center justify-center flex-row md:flex-col md:h-[223] h-180px md:w-[308px] w-full shadow-none md:shadow-sm ">
                    <div className="">
                        <img src="/Blog-bg.jpg" alt="blog" className="md:w-[308px] md:h-[144px] w-[360px] h-[180px] rounded-[0.4rem] md:rounded-t-[0.4rem] bg-cover" />
                    </div>
                    <div className="md:p-2 px-1 py-0">
                        <h2 className="font-semibold leading-tight py-2">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] md:text-[15px] text-[13px] py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full md:py-2 py-1">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className="text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>

                
            </div>
      </div>
    )
}
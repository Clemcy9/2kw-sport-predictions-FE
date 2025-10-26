import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function DummyBlog () {

    return (
        <div className="p-6 m-4 md:w-[686px] w-full z-50 relative min-h-screen flex flex-col justify-center items-center">
            <h1 className="font-sans text-center text-3xl font-semibold text-[#1F2128]">2kwPredict Blog</h1>
            <div className="md:grid md:grid-cols-2 sm:gap-4 gap-3 sm:items-center sm:justify-center flex flex-col">
                
            <article className="flex items-center justify-center flex-col h-[223] md:w-[308px] w-full shadow-sm ">
                <img src="/Blog-bg.jpg" alt="blog" className="w-[308px] h-[144px] rounded-t-[0.4rem] bg-cover" />
                <div className="p-2">
                    <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                    <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <Link className="text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </article>
            <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover" />
                <div className="p-2">
                    <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                    <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <Link className="text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </article>
            
            <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover" />
                <div className="p-2">
                    <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                    <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
                        <span className="font-semibold text-[#65758B]"> oct/28</span>
                        <Link className="text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </article>
            <article className="flex items-center justify-center flex-col h-[223] w-[308px] shadow-sm">
                <img src="/Blog-bg.jpg" alt="blog" className="w-[3088px] h-[144px] rounded-t-[0.4rem] bg-cover" />
                <div className="p-2">
                    <h2 className="font-semibold">Lorem illendus aliquam inventorm iusto fugit voluptas!</h2>
                    <p className="text-[#65758B] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                    <div className="flex justify-between w-full py-2">
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
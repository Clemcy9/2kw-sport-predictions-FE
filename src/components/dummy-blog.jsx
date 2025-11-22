import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function DummyBlog ({images}) {

    return (
          <div >
              <article className="group overflow-hidden bg-white flex items-center justify-center flex-row lg:flex-col lg:gap-2 sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.5em] lg:h-auto h-32 hover:-translate-y-1 transition-all lg:w-auto w-full sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-full lg:h-auto overflow-hidden relative sm:h-auto w-full h-full">
                        <img src={images} alt="blog" className="group-hover:scale-110 transition-transform duration-500 rounded-l-[0.5rem] h-full sm:h-52 w-full object-cover lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem]" />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent"></div>
                    </div>
                    <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col space-y-1 sm:gap-0">
                        <h2 className="font-semibold leading-tight  ">Lorem illendus aliquam invrm iusto fugit voluptas!</h2>
                        <p className="text-[#65758B] lg:text-[15px] text-[13px]  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum beatae Unde, ab?</p>
                        <div className="flex justify-between w-full lg:py-2 ">
                            <span className="font-semibold text-[#65758B]"> oct/28</span>
                            <Link className=" text-[#D6AE3E] flex justify-center items-center" to={"/blog"}>view more  <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </article>
          </div> 
    )
}
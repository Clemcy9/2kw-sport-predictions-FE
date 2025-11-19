import { FiArrowRight } from "react-icons/fi";
// import BlogPost from "../Pages/Blog";
import PremierLeagueCard from "./Premier-league";
import DummyBlog from "./dummy-blog"
import { Link } from "react-router-dom";


export function PredictionCard () {

    

    const leagues = [
        "Premier League",
         "Champions League",
         "La Liga League",
         "Serie A League",
         "Spanish League",
    ];

    return(
        <div className="w-full border-none lg:p-4 my-2 flex justify-center items-center flex-col text-white space-y-4 lg:space-y-2">
            {leagues.map((card,index) => (
                <PremierLeagueCard key={index} leagueName={card} />
            ))}
        </div>
    )
}



export  function BlogPage () {
    const image = [
        "/Blog2-bg.jpg",
        "/Blog3-bg.jpg",
        "/Blog-bg.jpg",
        "/Blog3-bg.jpg",
        "/Blog2-bg.jpg",
        "/Blog-bg.jpg",

    ]
    // console.log(image)

    return(
        <div className="gap-5 border-none lg:p-4 my-3 mt-7 w-full z-20 relative min-h-screen flex flex-col justify-center items-center bg-[#F3F4F64D]">
            <h1 className="font-[Inria Sans] text-center text-3xl font-semibold text-[#1F2128] lg:pb-6 mb-8">2kwPredict Blog</h1>
            <div className="lg:grid lg:grid-cols-3 lg:gap-3 sm:grid sm:grid-cols-2 sm:gap-6 gap-4 w-full sm:items-center sm:w-full sm:justify-center flex flex-col ">
                {image.map((img, idx) => (
                <DummyBlog key={idx} images={img} />
            ))}
            </div>
            <Link className="p-4 z-20 text-[#D6AE3E] flex justify-center text-center items-center underline" to={"/"}>View All Articles </Link>
        </div>
    )
}


export function AllBlog({ imagesUrl }) {
    
  

    return (
        <div className="w-full">
            {/* {imageLink.map((url,idnx) => ( */}
                {/* // <BlogPost key={idnx} imagesUrl={url} /> */}
                <article className="flex items-center justify-center flex-row lg:flex-col sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.5em] lg:h-auto h-32 hover:scale-95 transition-all lg:w-auto w-full sm:h-auto  shadow-sm  lg:shadow-sm ">
                    <div className="lg:w-full lg:h-auto sm:h-auto w-full h-full">
                        <img src={imagesUrl} alt="blog" className=" rounded-l-[0.5rem] h-full sm:h-52 w-full object-cover lg:rounded-bl-none lg:rounded-t-[0.4rem] sm:rounded-bl-none sm:rounded-t-[0.5rem]" />
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
            {/* ))} */}
        </div>
    )
}

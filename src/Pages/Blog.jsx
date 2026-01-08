import Footer from "../components/shared/Footer";
// import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import Navbar from "../components/shared/Navbar";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFutbol, FaSpinner, FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import blogBg from "../assets/Hero-images/blog-bg.jpg";
import DOMPurify from "dompurify";
import Scroll_To_Top from "../components/animations/scroll-arrow";

export default function BlogPost() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get_all_blogs = async () => {
      try {
        const res = await fetch(
          "https://twokw-backend.onrender.com/api/v1/blogs"
        );

        if (!res.ok) throw new Error("Failed to get all blogs");

        const data = await res.json();
        console.log("Api data", data);
        const sorted = (data.data || []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBlogs(sorted || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    get_all_blogs();
  }, []);

  const focus = useRef(null);

  useEffect(() => {
    focus.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <section
        className="font-sans relative h-[344px] mt-[22px] lg:mt-16 bg-cover object-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${blogBg})` }}
      >
        <div className="absolute inset-0 bg-[#1A365D]/40"></div> {/* overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="leading-[1.1] "
        >
          <div className="relative z-10 max-w-6xl px-3">
            <TypeAnimation
              sequence={["BLOG", 2000]}
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
                className="flex justify-center lg:items-center gap-1 bg-[#1A365D] font-sans text-[#D6AE3E] px-1 py-3 lg:py-4 shadow-lg rounded-[0.4rem] lg:text-[1.2em] lg:px-0 lg:w-65 hover:scale-95 hover:shadow-lg transition-all"
              >
                Join Telegram <FaTelegramPlane />
              </a>
              <Link
                to="/live-score"
                className="flex lg:items-center justify-center gap-1 lg:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 lg:py-3  shadow-lg rounded-[0.4rem] lg:text-[1.5rem] lg:px-0 hover:scale-95 hover:shadow-lg transition-all"
              >
                Live Scores <FaFutbol className="animate-bounce" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <Scroll_To_Top />
      <div className=" border-none p-4 mx my-3 mt-7 w-full z-20 relative  flex flex-col justify-center items-center bg-[#e0e2e685]">
        <h1 className="font-[Inria Sans] text-center text-3xl font-semibold text-[#1F2128] lg:pb-6 mb-2 text-shadow-x z-40">
          2kwPredict Blog
        </h1>
        {loading && (
          <div className="text-center h-52 overflow-y-hidden text-[#1A365D] py-2 flex justify-center items-center">
            <span>
              <FaSpinner className="animate-spin" />{" "}
            </span>{" "}
            Loading Blog Articles...
          </div>
        )}
        <div className="lg:grid lg:grid-cols-4 lg:gap- sm:grid  sm:grid-cols-2 sm:gap-6 gap-4 w-full sm:items-center sm:w-full sm:justify-center flex flex-col  lg:px-10">
          {!loading &&
            blogs?.map((blog) => (
              <article
                key={blog._id}
                className="group overflow-hidden bg-white flex justify-between flex-row lg:flex-col lg:gap-2 sm:flex-col gap-1 rounded-[0.5em] hover:-translate-y-1 transition-all shadow-sm h-[250px] sm:h-[450px] lg:h-[450px]"
              >
                <div className="relative w-[190px] md:w-full sm:w-full h-[200px] md:h-[210px] sm:h-[200px] sm:min-h-[200px] overflow-hidden">
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500
               group-hover:scale-110 group-active:scale-110
               rounded-l-[0.5rem]
               lg:rounded-bl-none lg:rounded-t-[0.4rem]
               sm:rounded-bl-none sm:rounded-t-[0.5rem]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent" />
                </div>

                <div className="lg:px-2 h-[200px] sm:h-[2550px] lg:h-[350px] px-1 sm:px-2 flex flex-col justify-between space-y-1 sm:gap-0 w-full">
                  <div className="mt-3">
                    <h2 className="font-semibold leading-tight  ">
                      {blog.title}
                    </h2>
                    <div
                      className="ql-editor text-[#65758B] lg:text-[15px] text-[13px] mt-2 line-clamp-4"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          blog.body.slice(0, 250) + "..."
                        ),
                      }}
                    />
                  </div>
                  <div className="flex justify-between w-full lg:py-2 ">
                    <span className="font-semibold text-[#65758B]">
                      {new Date(blog.createdAt).toLocaleDateString().slice()}
                    </span>
                    <Link
                      className=" text-[#D6AE3E] flex justify-center items-center"
                      to={`/blog_id/${blog._id}`}
                    >
                      Read more <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
        </div>
        <Link
          className="p-4 z-20 text-[#D6AE3E] flex justify-center text-center items-center underline"
          to={"/"}
        >
          View All Articles
        </Link>
      </div>
      <Footer />
    </div>
  );
}

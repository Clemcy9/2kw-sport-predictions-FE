import Footer from "../components/shared/Footer";
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
        const res = await fetch("https://api.2kw.net/api/v1/blogs");
        if (!res.ok) throw new Error("Failed to get all blogs");
        const data = await res.json();
        const sorted = (data.data || []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setBlogs(sorted || []);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    get_all_blogs();
  }, []);

  const focus = useRef(null);
  useEffect(() => {
    focus.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar />
      <section
        className="font-sans relative h-[344px] mt-[22px] lg:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${blogBg})` }}
      >
        <div className="absolute inset-0 bg-[#1A365D]/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="leading-[1.1]"
        >
          <div className="relative z-10 max-w-6xl px-3">
            <TypeAnimation
              sequence={["BLOG", 2000]}
              wrapper="h1"
              speed={50}
              repeat={0}
              cursor={false}
              className="sm:text-[48px] text-3xl lg:text-6xl font-bold mb-4 text-shadow-lg lg:pb-6"
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
                className="flex lg:items-center justify-center gap-1 lg:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 lg:py-3 shadow-lg rounded-[0.4rem] lg:text-[1.5rem] lg:px-0 hover:scale-95 hover:shadow-lg transition-all"
              >
                Live Scores <FaFutbol className="animate-bounce" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <Scroll_To_Top />
      <div className="border-none p-4 mx my-3 mt-7 w-full z-20 relative flex flex-col justify-center items-center bg-[#e0e2e685]">
        <h1 className="font-[Inria Sans] text-center text-3xl font-semibold text-[#1F2128] lg:pb-6 mb-2 text-shadow-x z-40">
          2kwPredict Blog
        </h1>
        {loading && (
          <div className="text-center h-52 text-[#1A365D] py-2 flex justify-center items-center">
            <FaSpinner className="animate-spin mr-2" /> Loading Blog Articles...
          </div>
        )}
        <div className="lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2 sm:gap-6 gap-4 w-full sm:items-center sm:justify-center flex flex-col lg:px-10">
          {!loading &&
            blogs?.map((blog) => (
              <article
                key={blog._id}
                className="group overflow-hidden bg-white flex flex-col rounded-[0.5em] hover:-translate-y-1 transition-all shadow-sm h-auto min-h-[420px]"
              >
                {/* Image Fixed: Responsive w-full and object-cover */}
                <div className="relative w-full h-[200px] sm:h-[230px] overflow-hidden flex-shrink-0">
                  {blog.image_url && (
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/20 to-transparent" />
                </div>

                <div className="p-4 flex flex-col justify-between flex-grow overflow-hidden">
                  <div>
                    <h2 className="font-bold leading-tight text-[#1F2128] line-clamp-2">
                      {blog.title}
                    </h2>
                    <div
                      className="ql-editor text-[#65758B] lg:text-[14px] text-[13px] mt-2 line-clamp-4 pointer-events-none touch-none overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        maxHeight: "6em",
                        overflow: "hidden",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(blog.body),
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center w-full pt-4">
                    <span className="text-xs font-medium text-[#65758B]">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                    <Link
                      className="text-[#D6AE3E] flex items-center text-sm font-bold hover:underline"
                      to={`/blog_id/${blog._id}`}
                    >
                      Read more <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
        </div>
        <Link
          className="p-8 z-20 text-[#D6AE3E] flex justify-center text-center items-center underline font-medium"
          to={"/"}
        >
          View All Articles
        </Link>
      </div>
      <Footer />
    </div>
  );
}

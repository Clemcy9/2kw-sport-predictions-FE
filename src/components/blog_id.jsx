import Footer from "../components/shared/Footer";
// import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import Navbar from "../components/shared/Navbar";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import { FaFutbol, FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
import DOMPurify from "dompurify";
import blogBg from "../assets/Hero-images/blog-bg.jpg";

export default function BlogPost_Id() {
  const endpoints = window.location.href;
  const splitted = endpoints.split("/");
  const blogId = splitted[splitted.length - 1];
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const getBlogId = async () => {
      try {
        const res = await fetch(
          `https://twokw-backend.onrender.com/api/v1/blogs/${blogId}`
        );

        if (!res.ok) throw new Error("Failed to get all blogs");
        const data = await res.json();
        setBlog(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    getBlogId();
  }, []);

  if (!blog) return;

  return (
    <div>
      <Navbar />

      <section
        className="font-sans relative h-[344px] mt-[22px] lg:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
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

      <Routes>
        <Route
          path={blogId}
          element={
            <section className="lg:p-10 md:p-8 sm:p-5 p-2">
              <article className="group overflow-hidden flex items-center justify-center mx-auto flex-col lg:gap-2 sm:flex-col gap-1 lg:h-auto h-auto hover:-translate-y-1 transition-all lg:max-w-6xl sm:h-auto lg:rounded-xl">
                <div className=" lg:h-auto overflow-hidden relative sm:h-auto w-full h-full">
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="group-hover:scale-110 group-active:scale-110 transition-transform duration-500 h-60 sm:h-52 w-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent rounded-xl"></div>
                </div>
                <div className=" flex flex-col space-y-1 sm:gap-0">
                  <h2 className="font-semibold leading-tight  ">
                    {blog.title}
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blog.body),
                    }}
                    className="text-[#65758B] lg:text-[15px] text-[13px] "
                  ></p>
                  <div className="flex justify-between w-full lg:py-2 ">
                    <span className="font-semibold text-[#65758B]">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </article>
            </section>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
